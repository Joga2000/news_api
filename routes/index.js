var express = require('express');
var router = express.Router();
var database = require('../config/db_connection');

router.get('/testconnection', function(request, response, next){
  if(database != null){
    response.send('connect succesfully!');
  } else {
    response.send('connection is failed');
  }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  var people = [
    {
      id: 101,
      name: 'Lutfor Rahman',
      email: 'contact.lutforrahman@gmail.com'
    },

    {
      id: 102,
      name: 'Vrushang',
      email: 'infor@vrushang.com'
    },

    {
      id: 103,
      name: 'Frank',
      email: 'info@frank.com'
    },

    {
      id: 104,
      name: 'Felix',
      email: 'info@felix.com'
    }
  ]
  res.render('index', { title: 'my Universe', people : people });
});

router.post('/post-form', function(req, res, next){
  res.res('Hello')
});

module.exports = router;
