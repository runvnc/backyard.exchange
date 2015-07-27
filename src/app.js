import 'better-log/install';
import {addYard, query} from './by.js';

import express from 'shortrest';

var app = express();
app.use(express.static('web'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(8099);

app.post('/yards', (req, res) => {          
  addYard(req.params);
  res.json({ok:true});  
});

app.get('/yards', (req, res) => {
  console.log('query');
  query(req.params);
  res.json({ok:true});   
});

console.info('Port 8099');
