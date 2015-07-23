import 'better-log/install';
import {addYard, query} from 'by';

import sr from 'shortrest';
var web = sr(8099);                 

web.post('/yards', (req, res) => {          
                      
});

console.info('Port 8099');
