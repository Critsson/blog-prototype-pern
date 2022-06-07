const {Pool} = require("pg")

const pool = new Pool({
    database: "blogprototype",
    user: "postgres",
    password: "janusmcbeast321",
    port: "5432",
    host: "localhost",
})

module.exports = pool;

