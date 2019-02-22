--CREATE SCHEMA cartichka;

-- currencies
CREATE TABLE currencies (
  currency_id SERIAL PRIMARY KEY,
  currency TEXT
);

-- product_types
CREATE TABLE product_types (
  product_type_id SERIAL PRIMARY KEY,
  product_type TEXT
);
INSERT INTO cartichka.product_types (product_type)
VALUES ('postcards');
INSERT INTO cartichka.product_types (product_type)
VALUES ('posters');

-- sizes
CREATE TABLE sizes (
  size_id SERIAL PRIMARY KEY,
  product_type INTEGER REFERENCES product_types (product_type_id),
  proportions TEXT
);

-- families
CREATE TABLE families (
  family_id SERIAL PRIMARY KEY,
  family TEXT
);

-- authors
CREATE TABLE authors (
  author_id SERIAL PRIMARY KEY,
  author TEXT
);

-- products
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name UUID UNIQUE,
  categories JSONB,
  currency INTEGER REFERENCES currencies (currency_id),
  description TEXT,
  price INTEGER,
  product_type INTEGER REFERENCES product_types (product_type_id),
  is_available BOOLEAN,
  ext text
);

INSERT INTO cartichka.currencies (currency)
VALUES ('RU');
INSERT INTO cartichka.sizes (product_type, proportions)
VALUES (1, '105x148');
INSERT INTO cartichka.sizes (product_type, proportions)
VALUES (1, '148x210');
INSERT INTO cartichka.authors (author)
VALUES ('Анастасия Кондратьева');
INSERT INTO cartichka.authors (author)
VALUES ('Lolka Lolkina');

-- get_products
CREATE OR REPLACE FUNCTION cartichka.get_products(INT)
RETURNS SETOF cartichka.products
AS $$
	BEGIN
	 	RETURN QUERY SELECT * FROM cartichka.products WHERE product_type = $1;
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

-- get_product_types
CREATE OR REPLACE FUNCTION cartichka.get_product_types()
RETURNS SETOF cartichka.product_types
AS $$
	BEGIN
	 	RETURN QUERY SELECT * FROM cartichka.product_types;
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

-- get_product_by_id
CREATE OR REPLACE FUNCTION cartichka.get_product_by_id(INT)
RETURNS SETOF cartichka.products
AS $$
	BEGIN
	 	RETURN QUERY SELECT * FROM cartichka.products WHERE id = $1;
	END;
$$ LANGUAGE plpgsql;