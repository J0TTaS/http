import { obtenerChiste, obtenerUsuarios } from './js/http-provider.js';
// import { init } from './js/chistes-page.js'; // OJO: en el fichero usuarios-page.js hay otra funcion init(). Hay que descomentar el import del init() que queramos probar
import { init } from './js/usuarios-page.js';

// Ejemplo de uso del CRUD
init();

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