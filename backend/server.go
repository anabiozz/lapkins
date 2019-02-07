package main

import (
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/anabiozz/lapkin-project/lapkin/backend/api"
	"github.com/anabiozz/lapkin-project/lapkin/backend/common"
	"github.com/anabiozz/lapkin-project/lapkin/backend/common/datastore"
	"github.com/anabiozz/lapkin-project/lapkin/backend/middleware"
	"github.com/anabiozz/lapkin-project/lapkin/backend/models"
	"github.com/anabiozz/logger"
	"github.com/gorilla/mux"

	_ "github.com/lib/pq"
)

const (
	// URL ...
	URL = "localhost:9000"
)

func main() {

	logger.Init(os.Stdout, os.Stdout, os.Stderr, os.Stderr)

	db, err := datastore.NewDatastore(datastore.POSTGRES)
	if err != nil {
		logger.Error(err)
	}
	defer db.CloseDB()

	env := common.Env{DB: db}

	router := mux.NewRouter()

	// Handlers

	paths := models.Paths{}

	imagesPath, err := filepath.Abs("../../images")

	paths.FullPath = imagesPath + "/full/"
	paths.PreviewPath = imagesPath + "/preview/"

	// Handlers
	router.Handle("/", http.FileServer(http.Dir("static")))
	router.Handle("/", http.FileServer(http.Dir(imagesPath)))

	// API
	router.Handle("/api/get-products", middleware.Cors(api.GetProducts(&env, paths)))
	router.Handle("/api/get-product-by-id", middleware.Cors(api.GetProductByID(&env)))

	ReloadProxy := func(w http.ResponseWriter, r *http.Request) {
		log.Println("Debug, Hot reload", r.Host)
		resp, err := http.Get("http://localhost:3500" + r.RequestURI)
		if err != nil {
			http.Error(w, err.Error(), 500)
			return
		}
		defer resp.Body.Close()
		io.Copy(w, resp.Body)
	}
	router.HandleFunc("/-/:rand(.*).hot-update.:ext(.*)", ReloadProxy)
	router.HandleFunc("/-/bundle.js", ReloadProxy)

	router.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))
	router.PathPrefix(imagesPath + "/").Handler(http.StripPrefix(imagesPath+"/", http.FileServer(http.Dir(imagesPath))))

	srv := &http.Server{
		Handler:      router,
		Addr:         URL,
		IdleTimeout:  5 * time.Second,
		WriteTimeout: 5 * time.Second,
	}

	logger.Infof("Server was started on http://%s", URL)
	logger.Fatal(srv.ListenAndServe())
}
