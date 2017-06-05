const express  = require('express');
const router   = express.Router();
const paginate = require('express-paginate');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
  console.log(option);
});

router.post('/', (req, res, next) => {

  res.render('index', {
      input: req.body.quantity,
      option: req.body.optionSelector,

  });
  console.log(req.body.optionSelector);


});


module.exports = router;
