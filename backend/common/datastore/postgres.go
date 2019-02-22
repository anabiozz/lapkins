package datastore

import (
	"database/sql"
	"fmt"
	"strconv"

	"github.com/anabiozz/lapkin-project/lapkin/backend/models"
)

const (
	dbHost     = "localhost"
	dbPort     = 5432
	dbUser     = "postgres"
	dbPassword = "postgres"
	dbName     = "cartichka"
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
func (p *PostgresDatastore) GetProducts(productsID string, paths models.Paths) (products []models.Product, err error) {
	id, err := strconv.Atoi(productsID)
	query := fmt.Sprintf(`SELECT * FROM cartichka.get_products(%d);`, id)
	rows, err := p.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	product := models.Product{}
	for rows.Next() {

		err = rows.Scan(
			&product.ID,
			&product.Name,
			&product.Categories,
			&product.Currency,
			&product.Description,
			&product.Price,
			&product.IsAvailable,
			&product.ProductsType,
			&product.Ext)
		if err != nil {
			return nil, err
		}

		products = append(products, product)
	}

	return products, nil
}

// GetProductByID ..
func (p *PostgresDatastore) GetProductByID(productID string) (product *models.Product, err error) {
	id, err := strconv.Atoi(productID)
	query := fmt.Sprintf(`SELECT * FROM cartichka.get_product_by_id(%d);`, id)

	product = &models.Product{}

	err = p.QueryRow(query).Scan(
		&product.ID,
		&product.Name,
		&product.Categories,
		&product.Currency,
		&product.Description,
		&product.Price,
		&product.IsAvailable,
		&product.ProductsType,
		&product.Ext)
	if err != nil {
		return nil, err
	}

	return product, nil
}

// CloseDB ..
func (p *PostgresDatastore) CloseDB() {
	p.DB.Close()
}
