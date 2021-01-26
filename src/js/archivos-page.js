import { crearUsuario } from "./crud-provider";
import { subirImagen } from "./http-provider";

const body = document.body;
let inputFile, imgFoto;

const crearInputFileHtml = () => {

    const html = `
        <h1 class="mt-5">Subir archivos</h1>
        <hr>

        <label>Selecciona una fotografía: </label>
        <input type="file" accept="image/png, image/jpeg"></input>

        <br>
        <img id="foto" class="img-thumbnail" src=""></img>
    `;

    const div = document.createElement( 'div' );
    div.innerHTML = html;
    body.append( div );

    inputFile = document.querySelector( 'input' );
    imgFoto = document.querySelector( '#foto' );
}

const eventos = () => {

    inputFile.addEventListener( 'change', ( event ) => {
        
        const file = event.target.files[0];
        console.log( "Paso por aquí: ", file );
        subirImagen( file ).then( url => {
            console.log( "Y también por aquí: ", url );
            imgFoto.src = url
        });
    });
}

export const init = () => {
    crearInputFileHtml();
    eventos();
}