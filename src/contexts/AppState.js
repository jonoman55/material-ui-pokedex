import React, { useState } from 'react';
import AppContext from './AppContext';

const AppState = (props) => {
    const [genNumber, setGenNumber] = useState(9);
    const [genValue, setGenValue] = useState('');
    const [genList, setGenList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pokeList, setPokeList] = useState([]);
    const [filteredPokeList, setFilteredPokeList] = useState([]);
    const [filter, setFilter] = useState('');
    return (
        <AppContext.Provider value={{
            genNumber, setGenNumber,
            genValue, setGenValue,
            genList, setGenList,
            isLoading, setIsLoading,
            pokeList, setPokeList,
            filteredPokeList, setFilteredPokeList,
            filter, setFilter,
        }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;