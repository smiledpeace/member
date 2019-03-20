var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/queryData', localHandle, function(req, res, next) {
    res.send('respond with a resource');
});

function localHandle(req, res) {
    var args = [...arguments];
    console.log(args);
    return res.send({
        result: 'TRUE',
        code: 200,
        data: {
            token: 'uuids'
        }
    });
}
module.exports = router;
