package api

import (
	"encoding/json"
	"net/http"

	"github.com/anabiozz/logger"
	"github.com/anabiozz/store-engine/common"
)

// GetAllProducts ...
func GetAllProducts(env *common.Env) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")

		products, err := env.DB.GetAllProducts()
		if err != nil {
			logger.Info(err)
			return
		}

		json.NewEncoder(w).Encode(products)
	})
}
