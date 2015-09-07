var restify = require('restify');
var port = 8080;

server = restify.createServer({
  name: 'Product API Server'
});

server.get('/', function(req, res, next) {
  res.send('product api service is running');
});

server.get('/product', function(req, res, next) {
  res.send(products);
});

server.get('/product/:id', function(req, res, next) {
  var productFound = products.filter(function(product) {
    return product.id == req.params.id;
  });
  res.send(productFound);
});

var products = [
  {"id":"1", "name":"Applle I Phone6", "price":"604"},
  {"id":"2", "name":"Applle I Phone5", "price":"404"},
];

server.listen(port, function() {
  console.log('Listening on port %d', port);
});
