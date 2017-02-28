var views_path = __dirname + '/src/views/';
var views_engine = 'pug';
var landing_view = 'home';
// var css_path = __dirname + '/src/styles/css/';
var css_request_base = '/css';
var less_path = __dirname + '/src/styles/less/';

var express = require('express');
var expressLess = require('express-less');
var compression = require('compression');

var app = express();
app.use(compression());

app.use('/css', expressLess(less_path));

app.set('views', views_path);
app.set('view engine', views_engine);

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render(landing_view, {
    title: 'Sound Waves Memphis | Welcome to the World of Sound Waves! For Quality Without Compromise and Service Without Question, Look No Further.'
  });
});

app.listen(3000);
