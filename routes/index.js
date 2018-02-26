const express = require('express');
const router = express.Router();

const Ward = require('../models/ward.js');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' , list: [{title: 'item 1'}, {title: 'item 2'}, {title: 'item 3'}, {title: 'item 4'}, {title: 'item 5'}]});
});

router.post('/', (req, res) => {
  console.log("body:", req)
  const newWard = new Ward(req.body);
  newWard.save((err, response) => {
    if(err) {
      console.error("Something went wrong:", err);
      return res.json({error:err});
    };
    console.log(response);
    res.json({payload:response});
  });
});

module.exports = router;
