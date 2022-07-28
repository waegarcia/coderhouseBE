class Usuario {
    constructor (nombre, apellido) {
            this.nombre = nombre,
            this.apellido = apellido,
            this.libros = [],
            this.mascotas = []
    }

    getFullName() {
        console.log(`${this.nombre} ${this.apellido}`)
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
    }

    countMascotas(){
        console.log(this.mascotas.length)
    }

    addBook(nombreLibro, autorLibro){
        this.libros.push({nombre:nombreLibro, autor:autorLibro})
    }

    getBookNames(){
        console.log(this.libros.map(libro => libro.nombre))
    }
}


// Prueba
const usuario = new Usuario('Elon', 'Musk')

usuario.getFullName()

usuario.addMascota('perro')
usuario.addMascota('gato')
usuario.countMascotas()

usuario.addBook('El señor de las moscas', 'William Golding')
usuario.addBook('Fundacion', 'Isaac Asimov')
usuario.getBookNames()
