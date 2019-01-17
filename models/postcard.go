package models

type Postcard struct {
	ProductID   uint32
	ArtistName  string
	Currency    models.currency
	Description string
	Price       string
	Size        string
	FamilyID    uint32
	IsAvailable bool
}
