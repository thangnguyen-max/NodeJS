const express = require('express');
const router = express.Router();
const {getHomePage,getABC, getThang} = require('../controllers/homeController');


//khai báo route
router.get('/', getHomePage);

router.get('/abc',getABC)

router.get('/thang',getThang)

module.exports = router;