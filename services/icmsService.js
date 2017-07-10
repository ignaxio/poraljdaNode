var http = require('http');
var querystring = require('querystring');
/**
 * Carga de los parámetros genéricos del servicio RESTful
 */
var host = 'localhost';
var port = '80';
var PROXY_HOST = "proxy.indra.es"; // Proxy server address
var PROXY_PORT = "8080"; // Proxy server port
var PROXY_USER = "ifarre"; // Username
var PROXY_PASS = "ClaveV1-"; // Password

var colecionICMS = 'http://icms-v2-0-des.junta-andalucia.es/rest/datasets/jda_novedades.json';
var coleccionIgnacio = 'http://drupal.ignaciofarre.com/rest/ignacio-farre/get-experiencias';
var postData = querystring.stringify({
  'msg': 'Hello World!'
});
/**
 * Función encargada de recuperar todos los usuarios.
 */
exports.getData = function (next) {
//  request(coleccionIgnacio, function(error, response, body) {
  console.log('body');
//  });
//  var options = {
//    hostname: 'icms-v2-0-des.junta-andalucia.es',
//    port: 80,
//    path: '/rest/datasets/jda_novedades.json',
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json',
//      'Content-Length': Buffer.byteLength(postData)
//    }
////  host: PROXY_HOST,
////  port: PROXY_PORT,
////  path: colecionICMS,
////  headers: {
////    'Proxy-Authorization': 'Basic ' + new Buffer(PROXY_USER + ':' + PROXY_PASS).toString('base64')
////  }
//  };
//  var req = http.request(options, function (res) {
//    console.log(res.statusCode);
//    console.log(JSON.stringify(res.headers));
//    res.setEncoding('utf8');
//    res.on('data', function (chunk) {
//      console.log(chunk);
//    });
//    res.on('end', function () {
//      console.log('No more data in response.');
//    });
//  });
//  req.on('error', function (e) {
//    console.log(e.message);
//  });
//// write data to request body
//  req.write(postData);
//  req.end();
//                // Se invoca el servicio RESTful con las opciones configuradas previamente y sin objeto JSON.
//                invocarServicio(options, null, function (data, err) {
//                if (err) {
//                next(null, err);
//                } else {
//                next(data, null);
//                }
//                });
};
/**
 * Función encargada de invocar los servicios RESTful y devolver
 * el objeto JSON correspondiente.
 */
function invocarServicio(options, jsonObject, next) {
  var req = http.request(options, function (res) {
    var contentType = res.headers['content-type'];
    /**
     * Variable para guardar los datos del servicio RESTfull.
     */
    var data = '';
    res.on('data', function (chunk) {
      // Cada vez que se recojan datos se agregan a la variable
      data += chunk;
    }).on('end', function () {
      // Al terminar de recibir datos los procesamos
      var response = null;
      // Nos aseguramos de que sea tipo JSON antes de convertirlo.
      if (contentType.indexOf('application/json') != -1) {
        response = JSON.parse(data);
      }

      // Invocamos el next con los datos de respuesta
      next(response, null);
    })
            .on('error', function (err) {
              // Si hay errores los sacamos por consola
              console.error('Error al procesar el mensaje: ' + err)
            })
            .on('uncaughtException', function (err) {
              // Si hay alguna excepción no capturada la sacamos por consola
              console.error(err);
            });
  }).on('error', function (err) {
    // Si hay errores los sacamos por consola y le pasamos los errores a next.
    console.error('HTTP request failed: ' + err);
    next(null, err);
  });
  // Si la petición tiene datos estos se envían con la request
  if (jsonObject) {
    req.write(jsonObject);
  }

  req.end();
}
;