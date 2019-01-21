package api

import (
	"encoding/json"
	"net/http"

	"github.com/anabiozz/logger"
	"github.com/anabiozz/store-engine/common"
)

// GetProducts ...
func GetProducts(env *common.Env) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")

		products, err := env.DB.GetProducts(r.URL.Query().Get("products_id"))
		if err != nil {
			logger.Info(err)
			return
		}

		json.NewEncoder(w).Encode(products)
	})
}
