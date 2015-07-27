'use strict';

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

var _showdownForms = require('showdown-forms');

var html = (0, _showdownForms.makeHtml)(fs.readFileSync(__dirname + '/web/index2.md', 'utf8'));
fs.writeFileSync(__dirname + '/web/index.html', html);