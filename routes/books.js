var express = require('express');
var router = express.Router();

/* 도서검색페이지 출력 */
router.get('/', function(req, res, next) {
  res.render('index', { title: '도서 검색',pageName:'books/search.ejs' });
});

module.exports = router;
