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
  product_type INTEGER REFERENCES products_types (products_type_id),
  proportions TEXT
);
INSERT INTO cartichka.sizes (product_type, proportions)
VALUES (1, '105x148');
INSERT INTO cartichka.sizes (product_type, proportions)
VALUES (1, '148x210');

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
INSERT INTO cartichka.products_types (products_type)
VALUES ('плакаты');

-- authors
CREATE TABLE authors (
  author_id SERIAL PRIMARY KEY,
  author TEXT
);
INSERT INTO cartichka.authors (author)
VALUES ('Анастасия Кондратьева');

-- products
CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  name UUID UNIQUE,
  categories JSONB,
  currency INTEGER REFERENCES currencies (currency_id),
  description TEXT,
  price INTEGER,
  products_type INTEGER REFERENCES products_types (products_type_id),
  is_available BOOLEAN
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

-- get_sizes
CREATE OR REPLACE FUNCTION cartichka.get_sizes(INT)
RETURNS TABLE  (
	size_id int,
	proportions text
)
AS $func$
	BEGIN
		RETURN QUERY 
 		SELECT sizes.size_id, sizes.proportions FROM (
	      SELECT sizes.size_id, sizes.proportions 
	      FROM   cartichka.sizes
	      WHERE product_type = $1
     	) sizes;
	END;
$func$ LANGUAGE plpgsql;