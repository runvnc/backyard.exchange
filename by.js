import * as r from 'rethinkdb';
import 'better-log/install';

var cn;

r.connect({host:'localhost', port:28105}, conn => {
  cn = conn;
})

export function addYard(yard) {
  return r.table('yards').insert(yard).run(cn);
}

export function query(opts, page) {
  var rql = r.table('yards');
  for (flag of opts.flags) {
    rql = rql.filter(r.row(flag.field).eq(flag.value))
  }
  console.log(rql);
}

export function initDB() {
  r.tableCreate('yards');  
}
