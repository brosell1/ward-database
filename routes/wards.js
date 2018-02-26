const express = require('express');
const router = express.Router();

const Ward = require('../models/ward.js');

/* GET home page. */
router.get('/', (req, res) => {
  console.log(req.query);
  Ward.find(req.query, (err, response) => {
    if(err) {
      console.error("Something went wrong:", err);
      res.json(err);
    }
    //console.log("res:", response);
    res.render('wards', { title: 'Wards' , list: response});
  });
});

router.get('/admin', (req, res) => {
  console.log(req.query);
  Ward.find(req.query, (err, response) => {
    if(err) {
      console.error("Something went wrong:", err);
      res.json(err);
    }
    //console.log("res:", response);
    res.render('admin', { title: 'Wards' , list: response});
  });
});

router.post('/admin', (req,res) => {
  let status = false;
  const {
    wardNumber,
    timeDelay
  } = req.body;

  console.log(timeDelay);
  if(timeDelay == 0) {
    status = true;
  }

  Ward.findOneAndUpdate({wardNumber: wardNumber}, {timeDelay: timeDelay, status: status}, (err, response) => {
    if(err) {
      console.error("Something went wrong:", err);
      res.json(err);
    }
    console.log("res:", response);
    res.redirect('/wards/admin');
  });
});
module.exports = router;
