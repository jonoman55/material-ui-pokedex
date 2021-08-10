import { padId } from './text';

export const dreamWorldUrl = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
export const officialArtworkUrl = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
export const pokedexUrl = id => `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padId(id)}.png`;

export default function createDescImgUrl(pokemon, gen) {
    switch (gen) {
        case 1:
            return dreamWorldUrl(pokemon.id);
        case 2:
            return dreamWorldUrl(pokemon.id);
        case 3:
            return dreamWorldUrl(pokemon.id);
        case 4:
            return dreamWorldUrl(pokemon.id);
        case 5:
            return dreamWorldUrl(pokemon.id);
        case 6:
            return officialArtworkUrl(pokemon.id);
        case 7:
            return officialArtworkUrl(pokemon.id);
        default:
            return pokedexUrl(pokemon.id);
    };
};