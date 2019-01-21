package models

// Product ..
type Product struct {
	ProductID   uint32
	ArtistName  string
	Currency    string
	Description string
	Price       string
	Size        string
	FamilyID    uint32
	IsAvailable bool
}
