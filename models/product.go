package models

import "encoding/json"

// Product ..
type Product struct {
	ProductID   uint32
	ArtistName  string
	Categories  json.RawMessage
	Currency    string
	Description string
	Price       uint32
	Size        string
	FamilyID    uint32
	ProductType uint32
	IsAvailable bool
}
