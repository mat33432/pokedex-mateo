async function obtenerPokemon(nombre = "pikachu") {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

        if (!respuesta.ok) {
            throw new Error("Pokémon no encontrado");
        }

        const datos = await respuesta.json();

        console.log(`
NOMBRE: ${datos.name}
IMAGEN: ${datos.sprites.front_default}
ALTURA: ${datos.height / 10} m
PESO: ${datos.weight / 10} kg
        `);

        document.getElementById("resultado").innerHTML = `
            <div class="card">
                <h2>${datos.name}</h2>
                <img src="${datos.sprites.front_default}" />
                <p class="info">Altura: ${datos.height / 10} m</p>
                <p class="info">Peso: ${datos.weight / 10} kg</p>
            </div>
        `;

    } catch (error) {
        document.getElementById("resultado").innerHTML = `
            <p style="color:red;">Error: ${error.message}</p>
        `;
    }
}
