var path = require('path');
var express = require('express');
var app = express();
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

//设置存放模板文件的目录位置
app.set('views', path.join(__dirname, 'views'));
//设置模板引擎为 ejs
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/users', userRouter);

app.listen(8081);

// var express = require('express');
// var app = express();

// app.use(function(req,res,next){
//   console.log('1');
//   next();
// });

// app.use(function(req,res,next){
//   console.log('2');
//   res.status(200).end();
// });

// app.listen(8081);
