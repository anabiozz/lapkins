CREATE SCHEMA cartichka;

-- currencies
CREATE TABLE currencies (
  currency_id SERIAL PRIMARY KEY,
  currency TEXT
);
INSERT INTO cartichka.currencies (currency)
VALUES ('RU');

-- sizes
CREATE TABLE sizes (
  size_id SERIAL PRIMARY KEY,
  width TEXT,
  hight TEXT
);
INSERT INTO cartichka.sizes (width, hight)
VALUES ('105', '148');
INSERT INTO cartichka.sizes (width, hight)
VALUES ('148', '210');

-- families
CREATE TABLE families (
  family_id SERIAL PRIMARY KEY,
  family TEXT
);

-- products_types
CREATE TABLE products_types (
  products_type_id SERIAL PRIMARY KEY,
  products_type TEXT
);
INSERT INTO cartichka.products_types (products_type)
VALUES ('открытки');

-- authors
CREATE TABLE authors (
  author_id SERIAL PRIMARY KEY,
  author TEXT
);
INSERT INTO cartichka.products_types (author)
VALUES ('Анастасия Кондратьева');

-- products
CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  name UUID,
  categories JSONB,
  currency INTEGER REFERENCES currencies (currency_id),
  description TEXT,
  price INTEGER,
  products_type INTEGER REFERENCES products_types (products_type_id),
  is_available BIT
);

-- get_products
CREATE OR REPLACE FUNCTION cartichka.get_products(INT)
RETURNS SETOF cartichka.products
AS $$
	BEGIN
	 	RETURN QUERY SELECT * FROM cartichka.products WHERE products_type = $1;
	END;
$$ LANGUAGE plpgsql;

-- get_authors
CREATE OR REPLACE FUNCTION cartichka.get_authors()
RETURNS SETOF cartichka.authors
AS $$
	BEGIN
	 	RETURN QUERY SELECT * FROM cartichka.authors;
	END;
$$ LANGUAGE plpgsql;

-- get_products_types
CREATE OR REPLACE FUNCTION cartichka.get_products_types()
RETURNS SETOF cartichka.products_types
AS $$
	BEGIN
	 	RETURN QUERY SELECT * FROM cartichka.products_types;
	END;
$$ LANGUAGE plpgsql;