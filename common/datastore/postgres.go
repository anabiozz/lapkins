package datastore

import (
	"database/sql"
	"fmt"

	"github.com/anabiozz/store-engine/models"
)

const (
	dbHost     = "localhost"
	dbPort     = 5432
	dbUser     = "postgres"
	dbPassword = "postgres"
	dbName     = "art"
)

// PostgresDatastore ..
type PostgresDatastore struct {
	*sql.DB
}

// NewPostgresDatastore ..
func NewPostgresDatastore() (*PostgresDatastore, error) {
	dbinfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", dbHost, dbPort, dbUser, dbPassword, dbName)
	connection, err := sql.Open("postgres", dbinfo)
	if err != nil {
		return nil, err
	}
	return &PostgresDatastore{
		DB: connection,
	}, nil
}

// GetProducts ..
func (p *PostgresDatastore) GetProducts(productsID string) (products []models.Product, err error) {
	query := fmt.Sprintf(`SELECT * FROM cartichka.get_products(%s);`, productsID)
	rows, err := p.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	product := models.Product{}
	for rows.Next() {

		err = rows.Scan(
			&product.ProductID,
			&product.ArtistName,
			&product.Categories,
			&product.Currency,
			&product.Description,
			&product.Price,
			&product.Size,
			&product.FamilyID,
			&product.IsAvailable,
			&product.ProductType)
		if err != nil {
			return nil, err
		}

		products = append(products, product)
	}
	return
}

// GetProductByID ..
func (p *PostgresDatastore) GetProductByID(productID string) (product *models.Product, err error) {
	query := fmt.Sprintf(`Cartichka.GetProductByID @product_id="%s";`, productID)
	err = p.QueryRow(query).Scan(product)
	if err != nil {
		return nil, err
	}

	return product, nil
}

// CloseDB ..
func (p *PostgresDatastore) CloseDB() {
	p.DB.Close()
}
