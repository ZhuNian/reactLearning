var reactDom = require('react-dom');
var react = require('react');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status('200').send('(function(w){' + getModules() + '})(window, document);');
});

module.exports = router;

function getModules() {
  return [
    'w.ReactDOM = ' + JSON.stringify(reactDom, jsonParser),
    'w.React = ' + JSON.stringify(react, jsonParser)
  ].join(';');
}

function jsonParser (key, val) {
  return (typeof val === 'function') ? '' + val : val;
}
