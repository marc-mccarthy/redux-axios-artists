const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    database: 'artists',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000,
});

module.exports = pool;
