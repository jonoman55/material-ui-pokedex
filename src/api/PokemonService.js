import ApiService from './ApiService';

export const getData = async (url) => {
    try {
        let response = await ApiService.get(url);
        return response;
    } catch (err) {
        throw err;
    }
};

export const getPokemonByGen = async (offset, limit) => {
    try {
        let response = await ApiService.get(`https://pokeapi.co/api/v2/pokemon`, {
            offset,
            limit,
        });
        return response.results;
    } catch (err) {
        throw err;
    }
};

export const getPokemon = async (offset, limit) => {
    try {
        //get pokemon list
        let pokemons = await getPokemonByGen(offset, limit);

        //get promises to obtain data for all pokemon in the list
        let pokemonPromises = pokemons.map((p) => getData(p.url));

        //return all the pokemon data
        return await Promise.all(pokemonPromises);
    } catch (err) {
        throw err;
    }
};