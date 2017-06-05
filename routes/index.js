const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/', (req, res, next) => {

  res.render('index', {
      input: req.body.quantity,
      optionA: req.body.optionA,
      optionB: req.body.optionB
  });
  console.log(req.body.quantity);
  console.log(`optionSelector`+req.body.optionSelector);
  console.log(req.body.optionA);
  console.log(req.body.optionB);


});


module.exports = router;
