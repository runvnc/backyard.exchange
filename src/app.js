import 'better-log/install';
import {addYard, query} from './by.js';

import sr from 'shortrest';
var web = sr(8099);                 

web.post('/yards', (req, res) => {          
  addYard(req.params);
  res.json({ok:true});  
});

console.info('Port 8099');
