var express = require('express');
var router = express.Router();
var chatt = require('../models/chatt');

/* GET users listing. */
router.get('/', function (req, res, next) {
  chatt.find({}, (err, chatt) => {
    if (err) res.status(500).json({ err })
    res.status(200).json(chatt)
  }
  )
});

router.post('/', function (req, res, next) {
  chatt.create({ name: req.body.name, content: req.body.content }, (err, chatt) => {
    if (err) res.status(500).json({ err })
    res.status(200).json(chatt)
  }
  )
});

router.put('/:id', function (req, res, next) {
  chatt.findByIdAndUpdate(req.params.id,{ name: req.body.name, content: req.body.content }, (err, chatt) => {
    if (err) res.status(500).json({ err })
    res.status(200).json(chatt)
  }
  )
});

router.delete('/:id', function (req, res, next) {
  chatt.findByIdAndDelete(req.params.id, { name: req.body.name, content: req.body.content }, (err, chatt) => {
    if (err) res.status(500).json({ err })
    res.status(200).json(chatt)
  }
  )
});


module.exports = router;
