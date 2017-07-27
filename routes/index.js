var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.json({ title:'Express',ver:2.0 });
});

router.post('/add', function(req, res, next) {
  console.log(JSON.stringify(req.body));
  res.send(JSON.stringify(req.body));
});


router.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
  	 console.log(JSON.stringify(req.body));
     res.send(JSON.stringify(req.body));
     //res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });

module.exports = router;
