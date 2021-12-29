const router = require('express').Router()
const listeningCtrl = require('../controllers/listeningController')

router.route('/listeing')
    .get(listeningCtrl.getdata)

module.exports = router