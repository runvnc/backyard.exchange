'use strict';

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

var cn;

r.connect({ port: 28015 }, function (e, conn) {
  console.log(e);
  cn = conn;
});

function addYard(yard) {
  return r.table('yards').insert(yard).run(cn);
}

function query(opts, page) {
  var rql = r.table('yards');
  var flags = opts.flags;

  for (var key in flags) {
    rql = rql.filter(r.row(key).eq(flags[key]));
  }
  console.log(rql);
}

function initDB() {
  r.tableCreate('yards').run(cn);
}