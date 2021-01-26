import { obtenerChiste, obtenerUsuarios } from './js/http-provider.js';
// import { init } from './js/chistes-page.js'; // OJO: en el fichero usuarios-page.js hay otra funcion init(). Hay que descomentar el import del init() que queramos probar
// import { init } from './js/usuarios-page.js'; // Para llamar al init() que pinta https://reqres.in/api/users?page=2
import * as CRUD from './js/crud-provider.js'; // lo importo todo de ese fichero JS. Luego tendré que llamar a las diferentes funciones con CRUD.funcion()
import { init } from './js/archivos-page.js'

init();

// Ejemplo de uso de las llamadas al crud (obtener usuario, crear usuario, actualizar usuario y borrar usuario)
// CRUD.getUsuario( 1 ).then( console.log );
// CRUD.getUsuario( 5 ).then( console.log );
// CRUD.getUsuario( 10 ).then( console.log );

// CRUD.crearUsuario(
//     {
//         "name": "Fernando",
//         "job": "Carpintero"
//     }
// ).then( console.log );

// CRUD.actualizarUsuario( 2, 
//     {
//         "name": "Melissa",
//         "job": "Developer"
//     }
// ).then( console.log );

// CRUD.borrarUsuario( 5 ).then( console.log );

// Ejemplo de uso de la recuperación y maquetado de los usuarios devueltos por https://reqres.in/api/users?page=2
// init();

// Ejemplo de uso del generador y pintado de chistesde Chuck Norris
// init();


// Ejemplo de uso de la funcion obtenerChiste()
// obtenerChiste().then( console.log );  

/* Ejemplo básico uso FETCH()
// const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// Formato largo de llamada a fetch y json
// fetch( jokeUrl ).then( resp => { 
 
//     console.log( resp ) 

//     resp.json().then( ( { id, value } ) => {
//         console.log( id );
//         console.log( value );
//     })

// });


fetch( jokeUrl )
    .then( resp => resp.json() )
    .then( ( {id, value} ) => console.log( id, value ) );
*/