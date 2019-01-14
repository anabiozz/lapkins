CREATE TABLE products (
  product_id INTEGER PRIMARY KEY,
  artist_name TEXT,
  categories JSONB,
  currency INTEGER REFERENCES currencies (currency_id),
  description TEXT,
  price INTEGER,
  size INTEGER REFERENCES sizes (size_id),
  family_id INTEGER,
  is_available BIT,
)

CREATE TABLE currencies (
  currency_id INTEGER PRIMARY KEY,
  currency TEXT
)

CREATE TABLE sizes (
  size_id INTEGER PRIMARY KEY,
  size TEXT
)

CREATE TABLE families (
  family_id INTEGER PRIMARY KEY,
  family INTEGER
)