var url = require('url');
var q =  url.parse('http://kstn.com?year=2017&month=february',true);
console.log(q.query);