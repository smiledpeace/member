var express = require('express');
var router = express.Router();
var QRCode = require('qrcode')
var fs = require('fs')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('web/common/index', { title: 'Hello World' });
});
router.get('/qrcode', function (req, res, next) {
  var time = req.query.time || 10000, width = req.query.width || 540, text =  req.query.text;
  QRCode.toDataURL(text || 'I am a pony!', { type: 'terminal', margin: 1, width: width }, function (err, url) {
    if (err) {return res.send(error)}
    var base64Data = url.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64');
    res.writeHead(200, {'Content-Type': 'image/png'});
    res.end(dataBuffer);
  })
});
module.exports = router;
