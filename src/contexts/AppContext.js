import { createContext } from 'react';

const AppContext = createContext({
    genNumber: 9,
    genValue: '',
    genList: [],
    isLoading: true,
    pokeList: [],
    filteredPokeList: [],
    filter: '',
});

export default AppContext;