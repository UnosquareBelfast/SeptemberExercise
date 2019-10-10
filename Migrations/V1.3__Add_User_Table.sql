----------------------------------------------------------------------------------------
/*
                                  USERS TABLE
*/
 ----------------------------------------------------------------------------------------
CREATE SEQUENCE IF NOT EXISTS public.user_id_seq;
CREATE TABLE IF NOT EXISTS public.users
(
   id integer NOT NULL DEFAULT nextval('user_id_seq'::regclass),
   username character varying(255) COLLATE pg_catalog."default",
   email character varying(255) COLLATE pg_catalog."default",
   password character varying(255) COLLATE pg_catalog."default",
   CONSTRAINT users_pkey PRIMARY KEY (id)
)
WITH (
   OIDS = FALSE
)
TABLESPACE pg_default;
ALTER SEQUENCE user_id_seq
   OWNED BY users.id;
 ----------------------------------------------------------------------------------------
