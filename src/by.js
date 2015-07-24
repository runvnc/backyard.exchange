import * as r from 'rethinkdb';
import 'better-log/install';

var cn;

r.connect({port:28015}, (e, conn) => {
  console.log(e);
  cn = conn;
});

export function addYard(yard) {
  return r.table('yards').insert(yard).run(cn);
}

export function query(opts, page) {
  var rql = r.table('yards');
  let {flags} = opts;
  for (let key in flags) {
    rql = rql.filter(r.row(key).eq(flags[key]));
  }
  console.log(rql);
}

export function initDB() {
  r.tableCreate('yards').run(cn);  
}
