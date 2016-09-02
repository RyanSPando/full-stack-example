(function () {

  const pgp = require('pg-promise')();
  const connection  = {
    host: 'localhost',
    port: 5432,
    database: 'userinfo'
  };

  const db = pgp(connection);

  module.exports = db;
})();
