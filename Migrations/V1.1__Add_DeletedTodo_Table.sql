

  ----------------------------------------------------------------------------------------

/*
                                   DELETED TODOS TABLE
*/

  ----------------------------------------------------------------------------------------


CREATE SEQUENCE IF NOT EXISTS public.deletedtodos_id_seq;
CREATE TABLE IF NOT EXISTS public.deletedtodos
(
    id integer NOT NULL DEFAULT nextval('deletedtodos_id_seq'::regclass),
    title character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT deletedtodos_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER SEQUENCE deletedtodos_id_seq
    OWNED BY deletedtodos.id;

  ----------------------------------------------------------------------------------------