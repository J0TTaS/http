const urlCRUD = 'https://reqres.in/api/users';  // Parte comun de las URLs de la web ReqRes.in

const getUsuario = async( id ) => {

    const resp = await fetch( `${ urlCRUD }/${ id }` );
    const { data }  = await resp.json(); // Uso de desectructuracion de objetos: mediante el uso de { } en la variable data le decimos al objeto devuelto por await resp.json() que solo queremos el elemento data de dicho objeto. 

    return data;
}

const crearUsuario = async( usuario ) => {

    const resp = await fetch( urlCRUD, {
        method: 'POST',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await resp.json();
}

const actualizarUsuario = async( id, usuario ) => {

    const resp = await fetch( `${ urlCRUD }/${ id }`, {
        method: 'PUT',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await resp.json();
}

const borrarUsuario = async( id ) => {

    const resp = await fetch( `${ urlCRUD }/${ id }`, {
        method: 'DELETE'
    });

    return ( resp.ok ) ? 'Borrado' : 'No se pudo borrar';
}

export {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
};