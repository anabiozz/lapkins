CREATE SCHEMA cartichka;

CREATE TABLE currencies (
  currency_id SERIAL PRIMARY KEY,
  currency TEXT
);

CREATE TABLE sizes (
  size_id SERIAL PRIMARY KEY,
  width TEXT,
  hight TEXT
);

CREATE TABLE families (
  family_id SERIAL PRIMARY KEY,
  family TEXT
);

CREATE TABLE products_types (
  products_type_id SERIAL PRIMARY KEY,
  products_type TEXT
);

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  artist_name TEXT,
  categories JSONB,
  currency INTEGER REFERENCES currencies (currency_id),
  description TEXT,
  price INTEGER,
  size INTEGER REFERENCES sizes (size_id),
  family_id INTEGER REFERENCES families (family_id),
  products_type INTEGER REFERENCES products_types (products_type_id)
  is_available BIT
);

CREATE OR REPLACE FUNCTION cartichka.get_products(INT)
RETURNS SETOF cartichka.products
AS $$
	BEGIN
	 	RETURN QUERY SELECT * FROM cartichka.products WHERE products_type = $1;
	END;
$$ LANGUAGE plpgsql;