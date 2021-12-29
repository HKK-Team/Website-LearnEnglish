const router = require('express').Router()
const readingsCtrl = require('../controllers/readingController')

router.route('/reading')
    .get(readingsCtrl.getdata)

module.exports = router