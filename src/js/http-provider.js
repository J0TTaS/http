const jokeUrl = 'https://api.chucknorris.io/jokes/random';
// const jokeUrl = 'https://api.chucknorris.io/jokes/random12345'; // FAKE
const urlUsuarios = 'https://reqres.in/api/users?page=2';

// Variables para Cloudinary
const cloudPreset = 'ml_default';
const cloudUrl = 'https://api.cloudinary.com/v1_1/j0ttas/upload';



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

// archivoSubir :: File
const subirImagen = async( archivoSubir ) => {

    const formData = new FormData();
    formData.append( 'upload_preset', cloudPreset );
    formData.append( 'file', archivoSubir );

    try {

        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( resp.ok ) {
            const cloudResp = await resp.json();
            console.log( "Y por el TRY también: ", cloudResp ); 
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }

    } catch( err ) {
        console.warn( "Algo ha fallado en la petición HTTP!!!!" )
        throw err;
    }
}

export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}