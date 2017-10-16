const http = require('http');

function express() {
  let funcs = [];
  let app = function(req, res){
    let i = 0;

    function next(){
      let task = funcs[i++];
      if(!task) {
        return;
      }
      task(req, res, next);
    }
    next();
  }

  app.use = function(task) {
    funcs.push(task);
  }

  return app;
}

const app = express();

http.createServer(app).listen('3000', function() {
  console.log('listening 3000...');
});

function middlewareA(req, res, next) {
  console.log('middlewareA before next()');
  next();
  console.log('middlewareA after next()');
}

function middlewareB(req, res, next) {
  console.log('middlewareB before next()');
  next();
  console.log('middlewareB after next()');
}

function middlewareC(req, res, next) {
  console.log('middlewareC before next()');
  next();
  console.log('middlewareC after next()');
}

app.use(middlewareA);
app.use(middlewareB);
app.use(middlewareC);