const { v4: uuidv4 } = require('uuid');

class ArtTheme {

    title = '';
    description = '';
    subthemes = [];
    resources = [];
    
    constructor( title ){
        // Lo que se ejecute cuando creamos una nueva instancia de ArtTheme

        this.id = uuidv4(); // Genera un id único
        this.title = title;
    }

}

module.exports = ArtTheme;