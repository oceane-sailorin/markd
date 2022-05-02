const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.send("Hello");
});

app.listen(process.env.port || 3000);
console.log('Web Server is listening at port '+ (process.env.port || 3000));

//showdown makehtml -i test.md -o bar.html
//I=$(curl -s https://raw.githubusercontent.com/indykite/jarvis-sdk-web-sample-app-react/master/README.md)
//echo $I
//showdown makehtml -i $I -o bar.html