var express = require('express');
var session = require('express-session');
var app = express();
app.use(session({
  secret:'jsdfgt123',
  //dung de ma hoa session
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge:2000}
}));
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));
app.listen(3000,() => console.log('server run'));
app.get('/',(req,res) =>res.render('home'));
app.get('/muave',(req,res) =>{
  req.session.daMuaVe = 1;
  res.send('Ban da mua ve');
});
app.get('/vaorap',(req,res) =>{
  if(req.session.daMuaVe){
    req.session.daMuaVe++;
    return res.send('welcome');
  }
  res.send('Ban hay di mua ve');
});
