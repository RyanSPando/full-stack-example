  var contacts = require('./src/server/lib/contacts').all;

  const pgp = require('pg-promise')();
  const connection  = {
    host: 'localhost',
    port: 5432,
    database: 'userinfo'
  };

  const db = pgp(connection);

  db.query('')
  contacts.forEach((value) => {
    db.query(`INSERT INTO contacts(first_name, last_name, date_of_birth, eye_color, telephone_number)
    VALUES ( ${value.first_name}, ${value.last_name}, ${value.date_of_birth}, ${value.eye_color}, ${value.telephone_number}`);
  });
