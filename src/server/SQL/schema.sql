DROP DATABASE IF EXISTS userinfo;
CREATE DATABASE userinfo;

\c userinfo;
CREATE TABLE contacts (
  id serial PRIMARY KEY,
  first_name text NOT NULL,
  last_name text NOT NULL,
  date_of_birth date NOT NULL,
  eye_color text NOT NULL,
  telephone_number varchar NOT NULL
);
