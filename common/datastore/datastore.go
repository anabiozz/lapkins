package datastore

import (
	"errors"

	"github.com/anabiozz/courty/store-engine/models"
)

// Datastore ...
type Datastore interface {
	GetProducts(productsID string) (products []models.Product, err error)
	GetProductByID(productID string) (product *models.Product, err error)
	CloseDB()
}

const (
	// POSTGRES ...
	POSTGRES = iota
)

// NewDatastore ...
func NewDatastore(datastoreType int) (Datastore, error) {
	switch datastoreType {
	case POSTGRES:
		return NewPostgresDatastore()
	}
	return nil, errors.New("unknown datastore type")
}
