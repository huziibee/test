const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3200;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, './dist'), { maxAge : '1y', etag: false}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'));
  });

//start app at localhost:3001
app.listen(port, () => {
    console.log('Running on port : '+ port);
});