var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    // Load from JSON file and send to front end
    res.render('index', {});
});

module.exports = router;
