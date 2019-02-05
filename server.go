package main

import (
	"fmt"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/anabiozz/courty/store-engine/api"
	"github.com/anabiozz/courty/store-engine/common"
	"github.com/anabiozz/courty/store-engine/common/datastore"
	"github.com/anabiozz/courty/store-engine/middleware"
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
	// router.Handle("/", handlers.Index())

	imagesPath, err := filepath.Abs("../images")

	fmt.Println(imagesPath)

	// API
	router.Handle("/api/get-products", middleware.Cors(api.GetProducts(&env)))
	router.Handle("/api/get-product-by-id", middleware.Cors(api.GetProductByID(&env)))

	router.PathPrefix(imagesPath + "/").Handler(http.StripPrefix(imagesPath+"/", http.FileServer(http.Dir(imagesPath))))

	srv := &http.Server{
		Handler:      router,
		Addr:         URL,
		IdleTimeout:  5 * time.Second,
		WriteTimeout: 5 * time.Second,
	}

	logger.Infof("Server was started on %s", URL)
	logger.Fatal(srv.ListenAndServe())
}
