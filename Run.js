var PythonShell = require('python-shell');

setInterval(function(){
 PythonShell.run('Scratchcoin.py', function (err) {
  if (err) throw err;
  console.log('finished');
 });
},1000);
