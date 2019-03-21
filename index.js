const express = require('express');

const app = express();

app.set('port', process.env.PORT || 8080);

app.get('/', (req, res) => res.send('Hello World!'));

const port = app.get('port');

const string = { a: `Hello...........           World` };

app.listen(port, () =>
  console.log(`Example app listening on port ${port} ${string}!`),
);
