class Usuario {
    constructor(nombre, apellido, nombreLibro, autor, mascota) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = [{
        nombreLibro: nombreLibro, 
        autor: autor,}
      ];
      this.mascotas=[mascota];
    }
  
    getFullname() {
      return this.nombre + " " + this.apellido;
    }

    addMascotas(nombreMascota){
        return this.mascotas.push(nombreMascota)
    }

    conutMascotas() {
        return ` ${this.nombre} tiene ${this.mascotas.length} mascotas`;
    }


    addBook(nombre, autor) {
        let nuevoLibro = {
            nombreLibro: nombre,
            autor: autor
        }
        this.libros.push(nuevoLibro)

    }

    getBookName() {
        let valores = Object.values(this.libros);
            for(let i=0; i< valores.length; i++){
                console.log(valores[i].nombreLibro);
                
                   
            }
            return valores
    }
        
  }
  
  const Usuario1 = new Usuario("pepe", "suarez", 'El Caballa Blanco', 'Pedro Cerrano', 'Oliver');
 
  console.log(Usuario1);
  console.log(typeof(Usuario1.libros));

  const resultado = Usuario1.getFullname();
  console.log(resultado);
  
  Usuario1.addMascotas('Tomy');
  
  const resultado2 = Usuario1.mascotas;
  console.table(resultado2);
 
  const resultado3 =Usuario1.conutMascotas();
  console.table(resultado3);

  Usuario1.addBook('Aprenda Backend', 'Pepe Mugica');
  const resultado4 = Usuario1.libros
  console.table(resultado4);

  Usuario1.getBookName()