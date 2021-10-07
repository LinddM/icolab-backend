const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors())

function execShellCommand(cmd) {
  const exec = require("child_process").exec;
  return new Promise((resolve, reject) => {
    exec(cmd, { maxBuffer: 1024 * 500 }, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        console.warn(error);
      } else if (stdout) {
        console.log(stdout);
      } else {
        console.log(stderr);
      }
      let addresses = stdout.split('contract address:').map(x => x.split('\n')[0].trim()) 
      let newStr = addresses[addresses.length - 1]
      resolve(newStr);
    });
  });
}

app.get('/', function (_, res) {
  execShellCommand('npm run deploy:development').then((resp) => {
    res.send(resp);
  })
  .catch(() => {
    res.send('Deploy faileddd');
  });
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});