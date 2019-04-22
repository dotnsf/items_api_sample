//. app.js
var bodyParser = require( 'body-parser' );
var express = require( 'express' );
var uuidv1 = require( 'uuid/v1' );
var app = express();

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
app.use( express.Router() );

var items = [];

app.post( '/item', function( req, res ){
  res.contentType( 'application/json; charset=utf-8' );

  if( !req.body._id ){
    req.body._id = uuidv1();
  }
  items.push( req.body );

  res.write( JSON.stringify( req.body ) );
  res.end();
});

app.get( '/items', function( req, res ){
  res.contentType( 'application/json; charset=utf-8' );

  res.write( JSON.stringify( items ) );
  res.end();
});

app.delete( '/item/:id', function( req, res ){
  res.contentType( 'application/json; charset=utf-8' );

  var _id = req.params.id;
  for( var i = 0; i < items.length; i ++ ){
    if( items[i]._id == _id ){
      items.splice( i, 1 );
    }
  }
  
  res.write( JSON.stringify( { status: true } ) );
  res.end();
});

var port = 3000;
app.listen( port );
console.log( 'Server starting on ' + port + '...' );

