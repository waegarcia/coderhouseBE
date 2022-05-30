class Usuario {
    constructor (nombre, apellido) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.libros = [];
            this.mascotas = []
    }

    getFullName() {
        console.log(`${this.nombre} ${this.apellido}`)
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
    }

    countMascotas(){
        console.log(this.mascotas.length);
    }

    addBook(nombreLibro, autor){
        this.libros.push({nombre:nombreLibro, autor:autor})
    }

    getBookNames(){
        console.log(this.libros.map(l => l.nombre));
    }
}

// Prueba
const u = new Usuario('Elio', 'Hongo')

u.getFullName()

u.addMascota('perro')
u.addMascota('gato')
u.countMascotas()

u.addBook('El señor de las moscas', 'William Golding')
u.addBook('Fundacion', 'Isaac Asimov')
u.getBookNames()