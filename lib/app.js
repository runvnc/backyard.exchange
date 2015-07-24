'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

require('better-log/install');

var _byJs = require('./by.js');

var _shortrest = require('shortrest');

var _shortrest2 = _interopRequireDefault(_shortrest);

var web = (0, _shortrest2['default'])(8099);

web.post('/yards', function (req, res) {
  (0, _byJs.addYard)(req.params);
  res.json({ ok: true });
});

console.info('Port 8099');