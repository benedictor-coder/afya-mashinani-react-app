const express = require('express')
const app = express();
const router = express.Router();

router.get('/', function (req, res,  next) {
    res.send("Afya mashinani api is working good")
})

module.exports = router;