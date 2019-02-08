package main

import (
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

	// Handlers
	paths := models.Paths{}

	imagesPath, err := filepath.Abs("../../images")

	paths.FullPath = imagesPath + "/full/"
	paths.PreviewPath = imagesPath + "/preview/"

	// Create router
	router := mux.NewRouter()
	// subrouter for api
	apiRouter := router.PathPrefix("/api/").Subrouter()
	// subrouter for images
	imagesRouter := router.PathPrefix(imagesPath).Subrouter()
	// subrouter for postcards
	postcardRouter := router.PathPrefix("/postcard/").Subrouter()
	// Images handler
	imagesRouter.PathPrefix("/").Handler(http.StripPrefix(imagesPath+"/", http.FileServer(http.Dir(imagesPath))))
	// Static handlers
	router.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))
	postcardRouter.PathPrefix("/static").Handler(http.StripPrefix("/postcard/static/", http.FileServer(http.Dir("./static"))))
	// Index.html handler
	router.PathPrefix("/").HandlerFunc(IndexHandler())

	// API handlers
	apiRouter.Handle("/get-products", middleware.Cors(api.GetProducts(&env, paths)))
	apiRouter.Handle("/get-product-by-id", middleware.Cors(api.GetProductByID(&env)))

	srv := &http.Server{
		Handler:      router,
		Addr:         URL,
		IdleTimeout:  5 * time.Second,
		WriteTimeout: 5 * time.Second,
	}

	logger.Infof("Server was started on http://%s", URL)
	logger.Fatal(srv.ListenAndServe())
}

// IndexHandler ..
func IndexHandler() func(w http.ResponseWriter, r *http.Request) {
	fn := func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./static/index.html")
	}
	return http.HandlerFunc(fn)
}
