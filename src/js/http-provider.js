const jokeUrl = 'https://api.chucknorris.io/jokes/random';
// const jokeUrl = 'https://api.chucknorris.io/jokes/random12345'; // FAKE
const urlUsuarios = 'https://reqres.in/api/users?page=2';


const obtenerChiste = async() => {

    // Metemos en un try y, si queremos forzar el catch, podemos usar el jokeUrl fake
    try {

        const resp = await fetch( jokeUrl );

        if( !resp.ok )  throw 'No se pudo realizar la petición'; // En caso de querer manejar el error en el .catch()
    
        const { icon_url, id, value } = await resp.json();
        
        return { icon_url, id, value };

        // El return anterior también puede verse de la siguiente manera:
        //
        // return { 
        //     icon_url: icon_url,
        //     id: id,
        //     value: value
        // }

    } catch( err ) {

        console.log( "Lanzo el error en el bloque catch" );
        throw err;
    }
}

const obtenerUsuarios = async() => {

    const resp = await fetch( urlUsuarios );
    const { data:usuarios } = await resp.json();

    // console.log(usuarios);

    return usuarios;
};

export {
    obtenerChiste,
    obtenerUsuarios
}