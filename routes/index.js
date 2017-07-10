var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');

router.get('/', indexController.index);

module.exports = router;




//var fs = require("fs");
//var http = require("http");
//var icmsService = require(__dirname + '/../bin/services/icmsService.js');


///**
// * Gets all the users and list them all in screen.
// */
//exports.listUsers = function(req, res) {
//    // Use the method loadUsers form userService to get all the users
//    icmsService.loadUsers(function(users, err) {
//        if (err) {
//            console.error('Error al recuperar los usuarios');
////            res.render('error', {
////                message: 'Se ha producido un error. Contacte con el administrador.',
////                error: null
////            });
//        } else {
//            console.log('Users recuperados:', users);
////            res.render('users', {users: users});
//        }
//    });
//};










////var __dirname = 'http://localhost';
//var PROXY_HOST = "proxy.indra.es"; // Proxy server address
//var PROXY_PORT = "8080";    // Proxy server port
//var PROXY_USER = "ifarre";    // Username
//var PROXY_PASS = "ClaveV1-";   // Password
//
//
//var filename = "/datos-prueba.json";
//var ficheroLocalHost = 'http://localhost:80' + filename;
//var ficheroLocalNode = __dirname + '/../public/datos-prueba.json';
//var obj;
//
//var options = {
//  host: PROXY_HOST,
//  port: PROXY_PORT,
//  path: 'http://drupal.ignaciofarre.com/rest/ignacio-farre/get-experiencias',
//  headers: {
//    'Proxy-Authorization': 'Basic ' + new Buffer(PROXY_USER + ':' + PROXY_PASS).toString('base64')
//  }
//};
//
//var request = http.request(options, function(response) {
//    var chunks = [];
//    response.on('data', function(chunk) {
//        chunks.push(chunk);
//    });
//    response.on('end', function() {
//        console.log('Response', Buffer.concat(chunks).toString());
//    });
//});
//
//request.on('error', function(error) {
//    console.log(error.message);
//});
//
//request.end();




// Read the file and send to the callback
//fs.readFile('http://drupal.ignaciofarre.com/rest/ignacio-farre/get-experiencias', handleFile);
//
//// Write the callback function
//function handleFile(err, data) {
//  if (err) {
//    throw err;
//  }
//  obj = JSON.parse(data);
//  console.log(obj);
//  // You can now play with your datas
//}











//function getFichero(filename) {
//  fs.readFile(filename, function (err, data) {
//    if (err) {
//      console.log('error al pillar los datos.');
//      return 'error al pillar los datos.';
//    } else {
//      console.log(data);
//      return data;
//    }
//  });
//}





//
//
//fs.readFileSync('http://localhost/datos-prueba.json', (err, data) => {
//  if (err) throw err;
//  console.log(data);
//});



// http://localhost/datos-prueba.json
//function readJsonFileSync(filepath, encoding){
//
//    if (typeof (encoding) == 'undefined'){
//        encoding = 'utf8';
//    }
//    var file = fs.readFileSync(filepath, encoding);
//    return JSON.parse(file);
//}
//
//function getConfig(file){
//
//    var filepath = __dirname + '/' + file;
//    return readJsonFileSync(filepath);
//}

//assume that config.json is in application root

//json = getConfig('datos-prueba.json');



























///* GET home page. */
//router.get('/', function (req, res, next) {
////  var data = icmsService.;
////  console.log(exports.listUsers);
//
//  res.render('index', {
//    title: 'Express'
//  });
//});
//
//module.exports = router;
