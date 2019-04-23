//. app.js
var bodyParser = require( 'body-parser' );
var express = require( 'express' );
var uuidv1 = require( 'uuid/v1' );
var app = express();

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
app.use( express.Router() );
app.use( express.static( __dirname + '/public' ) );

var items = [];

app.post( '/item', function( req, res ){
  res.contentType( 'application/json; charset=utf-8' );

  if( !req.body._id ){
    req.body._id = uuidv1();
  }
  req.body.timestamp = ( new Date() ).getTime();
  items.push( req.body );

  res.write( JSON.stringify( req.body ) );
  res.end();
});

app.get( '/items', function( req, res ){
  res.contentType( 'application/json; charset=utf-8' );
  var limit = 0;
  var offset = 0;
  if( req.query.limit ){ limit = parseInt( req.query.limit ); }
  if( req.query.offset ){ offset = parseInt( req.query.offset ); }

  var _items = JSON.parse( JSON.stringify( items ) );
  if( limit || offset ){
    _items = _items.slice( offset, offset + limit );
  }

  res.write( JSON.stringify( _items ) );
  res.end();
});

app.delete( '/item/:_id', function( req, res ){
  res.contentType( 'application/json; charset=utf-8' );

  var _id = req.params._id;
  for( var i = 0; i < items.length; i ++ ){
    if( items[i]._id == _id ){
      items.splice( i, 1 );
    }
  }
  
  res.write( JSON.stringify( { status: true } ) );
  res.end();
});

var port = 3010;
app.listen( port );
console.log( 'Server starting on ' + port + '...' );

