import * as fs from 'fs';
import {makeHtml} from 'showdown-forms';

let html = makeHtml(fs.readFileSync(`${__dirname}/web/index2.md`,'utf8'));
fs.writeFileSync(`${__dirname}/web/index.html`, html);

