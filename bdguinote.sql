-- Role: guinote_owner
-- DROP ROLE IF EXISTS guinote_owner;

CREATE ROLE guinote_owner WITH
  LOGIN
  SUPERUSER
  INHERIT
  CREATEDB
  CREATEROLE
  REPLICATION
  ENCRYPTED PASSWORD 'SCRAM-SHA-256$4096:DEMmL+kxGWA86iNvdGJ4Iw==$cce7oK/q5Tn1E+wRvxKWQvVMEouistQg5VwgmIg0s0w=:+MoanuNrdxhv/VS6YTIruuf79gLNSIhqGdTbqLWY+EU=';


-- Table: public.usuario

-- DROP TABLE IF EXISTS public.usuario;

CREATE TABLE IF NOT EXISTS public.usuario
(
    id_usuario integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    username character varying COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default" NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    age integer NOT NULL,
    CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.usuario
    OWNER to guinote_owner;