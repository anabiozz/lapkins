package datastore

import (
	"database/sql"
	"fmt"
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

// GetAllProducts ..
func (p *PostgresDatastore) GetAllProducts() {

}

// CloseDB ..
func (p *PostgresDatastore) CloseDB() {
	p.DB.Close()
}
