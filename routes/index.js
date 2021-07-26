var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var collection = db.get('test');

  collection.find({},{},function(e,docs){
        res.render('index', {
            "test" : docs
        });
    });
});

/* GET index price history page. */
router.get('/data', function(req, res, next) {
    var db = req.db;
    var collection = db.get('index');

    collection.find({},{ sort: { date:1 }},function(e,docs){
        res.json(docs); //returns the json of items
      });
 });

 /* GET SPY  page. */
router.get('/SPY', function(req, res, next) {
    var db = req.db;
    var collection = db.get('SPY');

    collection.find({},{ sort: { date:1 }},function(e,docs){
        res.json(docs); //returns the json of items
      });
 });

module.exports = router;
