
CREATE TABLE produtores (
    pk_produtores_id SERIAL PRIMARY KEY,
    nome_produtor VARCHAR(255) NOT NULL
);


CREATE TABLE localidades (
    pk_localidades_id SERIAL PRIMARY KEY,
    cidade VARCHAR(255) NOT NULL,
    estado VARCHAR(255) NOT NULL
);


CREATE TABLE culturas (
    pk_culturas_id SERIAL PRIMARY KEY,
    nome_cultura VARCHAR(255) NOT NULL
);


CREATE TABLE fazendas (
    pk_fazendas_id SERIAL PRIMARY KEY,
    fk_localidades_id INT REFERENCES localidades(pk_localidades_id) ON DELETE SET NULL,
    fk_culturas_id INT REFERENCES culturas(pk_culturas_id) ON DELETE SET NULL,
    fk_produtores_id INT REFERENCES produtores(pk_produtores_id) ON DELETE SET NULL,
    nome_fazenda VARCHAR(255) NOT NULL,
    area_total DECIMAL(10, 2),
    area_agriculturavel DECIMAL(10, 2),
    area_vegetacao DECIMAL(10, 2)
);


CREATE TABLE fazendas_culturas (
    pk_fazendas_culturas_id SERIAL PRIMARY KEY,
    fk_fazendas_id INT REFERENCES fazendas(pk_fazendas_id) ON DELETE CASCADE,
    fk_culturas_id INT REFERENCES culturas(pk_culturas_id) ON DELETE CASCADE
);

CREATE INDEX idx_fazendas_localidades ON fazendas(fk_localidades_id);
CREATE INDEX idx_fazendas_culturas ON fazendas(fk_culturas_id);
CREATE INDEX idx_fazendas_produtores ON fazendas(fk_produtores_id);
CREATE INDEX idx_fazendas_culturas_fazendas ON fazendas_culturas(fk_fazendas_id);
CREATE INDEX idx_fazendas_culturas_culturas ON fazendas_culturas(fk_culturas_id);
