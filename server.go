package main

import (
	"net/http"
	"os"
	"time"

	"github.com/anabiozz/logger"
	"github.com/anabiozz/store-engine/api"
	"github.com/anabiozz/store-engine/common"
	"github.com/anabiozz/store-engine/common/datastore"
	"github.com/anabiozz/store-engine/handlers"
	"github.com/gorilla/mux"
)

const (
	// URL ...
	URL = "0.0.0.0:8080"
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
	router.Handle("/", handlers.Index())

	// API
	router.Handle("/api/get-products", api.GetProducts(&env))
	router.Handle("/api/get-product-by-id", api.GetProductByID(&env))

	srv := &http.Server{
		Handler:      router,
		Addr:         URL,
		IdleTimeout:  5 * time.Second,
		WriteTimeout: 5 * time.Second,
	}

	logger.Infof("Server was started on %s", URL)
	logger.Fatal(srv.ListenAndServe())
}
