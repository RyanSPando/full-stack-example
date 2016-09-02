const express = require('express');
const router = express.Router();
const db = require('../config/db-config');

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Welcome to Express!';
  indexController.sum(1, 2, (error, results) => {
    if (error) return next(error);
    if (results) {
      renderObject.sum = results;
      res.render('index', renderObject);
    }
  });
});

router.get('/contacts', (req, res, next) => {
  const renderObject = {};
  db.any('SELECT * FROM contacts').then((data) => {
    renderObject.contactsObject = data;
    res.render('contacts', renderObject);
  }).catch((err) => {
    res.render('contacts', err);
  });
});

module.exports = router;
