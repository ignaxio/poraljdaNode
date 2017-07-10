/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var icmsService = require('../services/icmsService');


/**
 * Gets all the users and list them all in screen.
 */
exports.index = function(req, res) {
	// Use the method loadUsers form userService to get all the users
	var data = icmsService.getData(function(data, err) {
		if (err) {
			console.error('Error al recuperar los usuarios');
      return 'error al coger los datos';
//			res.render('error', {
//				message: 'Se ha producido un error. Contacte con el administrador.',
//				error: null
//			});
		} else {
			console.log('Users recuperados:', data);
      return data;
//			res.render('index', {data: data});
		}
	});
  
  // Renderizamos los datos en la plantilla
  res.render('index', {
    title: 'Express',
    data: data
    
  });
};
