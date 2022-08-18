class Usuario {

    constructor(nombre, apellido, libros, mascotas) {
       this.nombre = nombre;
       this.apellido = apellido;
       this.libros = libros;
       this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;

    };

    addMascotas(mascotas) {
        this.mascotas.push(mascotas)
    };

    countMascotas() {
        return this.mascotas.length

    };

    addBook(titulo,autor) {
        this.libros.push({titulo:titulo, autor:autor})
    };

    getBookNames() {
        return this.libros.map(e=>e.titulo)
    }
}


const usuario1 = new Usuario ("Víctor", "Aguilar",[{titulo:"El conde de montecristo", autor:"Alexander Dumas"}, {titulo:"Los tres mosqueteros", autor:"Alexander Dumas"}], ["Dhoko", "Frankie", "Kandy"]);


console.log(usuario1.getFullName());
usuario1.addMascotas("Chester");
console.log(usuario1.mascotas);
console.log(usuario1.countMascotas());
usuario1.addBook("El Tulipan Negro", "Alexander Dumas");
console.log(usuario1.libros);
console.log(usuario1.getBookNames());