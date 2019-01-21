CREATE SCHEMA Cartichka;

CREATE TABLE Cartichka.products (
  product_id INTEGER PRIMARY KEY,
  artist_name TEXT,
  categories JSONB,
  currency INTEGER REFERENCES currencies (currency_id),
  description TEXT,
  price INTEGER,
  size INTEGER REFERENCES sizes (size_id),
  family_id INTEGER REFERENCES families (family_id),
  is_available BIT,
);

CREATE TABLE Cartichka.currencies (
  currency_id INTEGER PRIMARY KEY,
  currency TEXT
);

CREATE TABLE Cartichka.sizes (
  size_id INTEGER PRIMARY KEY,
  size TEXT
);

CREATE TABLE Cartichka.families (
  family_id INTEGER PRIMARY KEY,
  family TEXT
);

CREATE TABLE Cartichka.products_types (
  products_type_id INTEGER PRIMARY KEY,
  products_type TEXT
);

CREATE OR REPLACE FUNCTION cartichka.get_products(INT)
RETURNS SETOF cartichka.products
AS $$
	BEGIN
	 	RETURN QUERY SELECT * FROM cartichka.products WHERE products_type = $1;
	END;
$$ LANGUAGE plpgsql;