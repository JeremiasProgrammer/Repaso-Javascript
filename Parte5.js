// objetos

const mascota = {
    nombre: "Tom",
    edad: 10,
    vivo: true,
    color: ["naranjo", "negro", "blanco"]
  };
  
  const nombreMascota = mascota.nombre;
  
  const {edad, nombre, vivo, color} = mascota
  console.log(color[1]);