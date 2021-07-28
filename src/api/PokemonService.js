import ApiService from './ApiService';
import { formatGen, formatDesc, isEnglish } from '../helpers/text';

export const getData = async (url) => {
    try {
        let res = await ApiService.get(url);
        return res;
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
        console.log('fetching pokemon...');
        let pokemons = await getPokemonByGen(offset, limit);
        let pokemonPromises = pokemons.map((p) => getData(p.url));
        return await Promise.all(pokemonPromises);
    } catch (err) {
        throw err;
    }
};

export const getPokemonById = async (id) => {
    try {
        console.log(`fetching pokemon ${id}...`);
        let res = await getData(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    } catch (err) {
        throw err;
    }
};

export const getGenOptions = async () => {
    try {
        console.log('fetching gen options...');
        let generations = await getData('https://pokeapi.co/api/v2/generation/');
        return generations.results.map((g, i) => {
            let num = i++;
            if (num !== 0 && num <= 7) {
                return formatGen(g.name) + ' ' + num;
            } else {
                return undefined;
            }
        }).filter((g) => g !== undefined);
    } catch (err) {
        throw err;
    }
};

export const getPokeDesc = async (pokemon) => {
    try {
        console.log('fetching pokemon description...');
        let descriptions = await getData(pokemon.species.url);
        return descriptions.flavor_text_entries.map((f) => {
            if (f.language.name === 'en') {
                return formatDesc(f.flavor_text);
            } else {
                return undefined;
            }
        }).filter(f => !isEnglish(f) && f !== undefined).shift();
    } catch (err) {
        throw err;
    }
};

export const getPokeDescFromData = async (pokemon) => {
    try {
        console.log('fetching pokemon description from model...');
        const { url } = pokemon;
        let descriptions = await getData(url);
        return descriptions.flavor_text_entries.map((f) => {
            if (f.language.name === 'en') {
                return formatDesc(f.flavor_text);
            } else {
                return undefined;
            }
        }).filter(f => !isEnglish(f) && f !== undefined).shift();
    } catch (err) {
        throw err;
    }
};

export const getPokeDescFromUrl = async (url) => {
    try {
        console.log('fetching pokemon description from url...');
        let descriptions = await getData(url);
        return descriptions.flavor_text_entries.map((f) => {
            if (f.language.name === 'en') {
                return formatDesc(f.flavor_text);
            } else {
                return undefined;
            }
        }).filter(f => !isEnglish(f) && f !== undefined).shift();
    } catch (err) {
        throw err;
    }
};