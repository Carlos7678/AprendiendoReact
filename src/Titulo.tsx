function Titulo() {

    const nombre = 'Carlos';
    if (nombre) {
      return <h1>Hola {nombre}</h1>; 
    }
  
    return <h1>Hola Mundo</h1>;
  }
  
  export default Titulo;
  