// async & await

const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    const element = await data.results.forEach((element) => {
      console.log(element.name);
    });
    console.log(element);
  } catch (error) {
    console.log(error);
  }
};

obtenerPokemones();
