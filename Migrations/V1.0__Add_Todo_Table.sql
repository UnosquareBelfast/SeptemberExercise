-- -- Database: September
--  DROP DATABASE "September";
--
-- CREATE DATABASE "September"
-- WITH
-- OWNER = postgres
-- ENCODING = 'UTF8'
-- LC_COLLATE = 'English_United Kingdom.1252'
-- LC_CTYPE = 'English_United Kingdom.1252'
-- TABLESPACE = pg_default
-- CONNECTION LIMIT = -1;

  ----------------------------------------------------------------------------------------

/*
                                   TODOS TABLE
*/

  ----------------------------------------------------------------------------------------


CREATE SEQUENCE IF NOT EXISTS public.todos_id_seq;
CREATE TABLE IF NOT EXISTS public.todos
(
    id integer NOT NULL DEFAULT nextval('todos_id_seq'::regclass),
    title character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT todos_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER SEQUENCE todos_id_seq
    OWNED BY todos.id;

  ----------------------------------------------------------------------------------------
  