const Tarea = require("./tarea");
const ArtTheme = require("./artTheme");

class Tareas {

    _list = {};

    // Getter para retornar un nuevo arreglo
    get listArr() {

        const listado = [];

        // Arreglo se llena con los ids de listado
        Object.keys(this._list).forEach(key => {
            // Llena el arreglo con tareas.
            // Crea una tarea, extrayendola de listado donde su id sea el mismo que se esta mandando
            const tarea = this._list[key]

            listado.push(tarea)
        })

        // Retorna el listado nuevo
        return listado;
    }

    constructor(){
        this._list = {};
    }

    // Recibe tareas
    cargarTareasFromArray(tareas = []){

        tareas.forEach(tarea => {
            this._list[tarea.id] = tarea;
        });

    }


    completeList(){

        this.listArr.forEach((tarea, i) => {
            const idx = `${i + 1}.`.magenta
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                ? 'Completada'.green
                : 'Pendiente'.red
            
            console.log(`${idx} ${desc} :: ${estado}`)
        })
    }
}

module.exports = Tareas;