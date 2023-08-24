let btn = document.getElementById('btnPokemon');
let numPokemon = document.getElementById('numPokemon')
let namePokemon = document.getElementById('namePokemon');
let photoPokemon = document.getElementById('photoPokemon');
let weightPokemon = document.getElementById('weigthPokemon');
let heightPokemon = document.getElementById('heightPokemon');
let abilityPokemon = document.getElementById('abilityPokemon');

btn.addEventListener('click', () =>{

    let id = Math.ceil(Math.random()*1008);
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch(url)
    .then(data => data.json())
    .then(pokemons =>{
        namePokemon.textContent = pokemons.species.name;
        numPokemon.textContent = '#' + pokemons.id;
        photoPokemon.src = pokemons.sprites.front_default;

        abilityPokemon.textContent = pokemons.abilities[0].ability.name;
        if(pokemons.abilities[1] === undefined){
            abilityPokemon.textContent = pokemons.abilities[0].ability.name;
        }else if(pokemons.abilities[2] === undefined){
            abilityPokemon.textContent = pokemons.abilities[0].ability.name + ' / ' + pokemons.abilities[1].ability.name;
        }else{
            abilityPokemon.textContent = pokemons.abilities[0].ability.name + ' / ' + pokemons.abilities[1].ability.name + ' / ' + pokemons.abilities[2].ability.name;
        }

        heightPokemon.textContent = 'Height: ' + pokemons.height;
        weightPokemon.textContent = 'Weight: ' + pokemons.weight;
    });
});