'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.addYard = addYard;
exports.query = query;
exports.initDB = initDB;

var _rethinkdb = require('rethinkdb');

var r = _interopRequireWildcard(_rethinkdb);

require('better-log/install');

var _util = require('util');

var _schema = require('./schema');

var cn;

r.connect({ port: 28015 }, function (e, conn) {
  console.log(e);
  cn = conn;
});

function addYard(yard) {
  return r.table('yards').insert(yard).run(cn);
}

function query(opts, page) {
  var rql, key, cursor, arr;
  return _regeneratorRuntime.async(function query$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        rql = r.table('yards');

        console.log('opts', opts);
        console.log('flags', _schema.flags);
        for (key in _schema.flags) {
          rql = rql.filter(r.row(key).eq(opts[key]));
        }
        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(rql.run(cn));

      case 6:
        cursor = context$1$0.sent;
        context$1$0.next = 9;
        return _regeneratorRuntime.awrap(cursor.toArray());

      case 9:
        arr = context$1$0.sent;

        console.log((0, _util.inspect)(arr));
        return context$1$0.abrupt('return', arr);

      case 12:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

function initDB() {
  r.tableCreate('yards').run(cn);
}

;