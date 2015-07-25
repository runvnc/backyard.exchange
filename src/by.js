import * as r from 'rethinkdb';
import 'better-log/install';
import {inspect} from 'util';

var cn;

r.connect({port:28015}, (e, conn) => {
  console.log(e);
  cn = conn;
});

export function addYard(yard) {
  return r.table('yards').insert(yard).run(cn);
}

export async function query(opts, page) {
  var rql = r.table('yards');
  console.log('opts',opts);
  let {flags} = opts;
  console.log('flags', flags);
  for (let key in flags) {
    rql = rql.filter(r.row(key).eq(flags[key]));
  }
  let cursor = await rql.run(cn);
  let arr = await cursor.toArray();
  console.log(inspect(arr));
  return arr;
}

export function initDB() {
  r.tableCreate('yards').run(cn);  
};
