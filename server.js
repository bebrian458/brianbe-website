const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// paths
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.render('index.html'));
  
// listen on port
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));