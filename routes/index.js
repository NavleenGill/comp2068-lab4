var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Family Members' });
});

/* GET Nirankar*/
router.get('/Nirankar', function(req, res, next){
  res.render('Nirankar');
});

/* GET Harjit*/
router.get('/Harjit', function(req, res, next){
    res.render('Harjit');
});

/* GET Navleen*/
router.get('/Navleen', function(req, res, next){
    res.render('Navleen');
});

/* GET Amitoje*/
router.get('/Amitoje', function(req, res, next){
    res.render('Amitoje');
});

/* GET Nobel*/
router.get('/Nobel', function(req, res, next){
    res.render('Nobel');
});
module.exports = router;
