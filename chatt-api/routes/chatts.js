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
  chatt.create({id : req.body.id, name: req.body.name, content: req.body.content }, (err, chatt) => {
    if (err) res.status(500).json({ err })
    res.status(200).json(chatt)
  }
  )
});

router.put('/:id', function (req, res, next) {
  chatt.findByIdAndUpdate({id : parseInt(req.params.id)},{name: req.body.name, content: req.body.content }, (err, chatt) => {
    if (err) res.status(500).json({ err })
    res.status(200).json(chatt)
  }
  )
});

router.delete('/:id', function(req, res, next) {
  chatt.findOneAndRemove({id: parseInt(req.params.id)}, (err, chatt)=>{
    if(err) return res.status(500).json({err})
    res.status(200).json(chatt)
  })
});


module.exports = router;
