const Pool = require("pg").Pool;

const pool = new Pool({
    user: "bharat",
    password: "bharat2002",
    host: "localhost",
    database: "railway"
});

module.exports = pool;
