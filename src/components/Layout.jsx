import React, { useState, useEffect } from 'react';
import {  makeStyles, Grid, Box } from '@material-ui/core';
import { Header, ApiCredit, PokeExplorer, PokeContainer, Footer, ScrollToTop } from './index';
import pokemonList from '../constants/pokemon';

const useStyles = makeStyles((theme) => ({
    root: {
        flex: '1 0 auto',
    },
    explorer: {
        display: 'flex',
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    container: {
        display: 'flex',
    }
}));

// TODO : Add PokeApi Utils once the layout is finished
// TODO : Add a component for selected pokemon 
const Layout = () => {
    const classes = useStyles();
    const [pokeList, setPokeList] = useState([]);
    const [filteredPokeList, setFilteredPokeList] = useState([]);
    const [filter, setFilter] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    };

    const fetchPokemon = async () => {
        setFilteredPokeList(pokemonList);
        setPokeList(pokemonList);
        await sleep(2000); // Simulate Load Time
        setIsLoading(false);
    };

    useEffect(() => {
        fetchPokemon();
        // eslint-disable-next-line
    }, []);

    const updateFilter = input => {
        setFilter(input);
        setFilteredPokeList(pokeList.filter(p => {
            return p.name.toLowerCase().includes(input.toLowerCase());
        }));
    };

    const clearFilter = () => {
        if (filter) {
            setFilter('');
            setFilteredPokeList(pokeList);
        }
    };

    return (
        <Box className={classes.root} component='div'>
            <Grid container direction='column'>
                <Grid item>
                    <Header />
                </Grid>
                <Grid item>
                    <ApiCredit />
                </Grid>
                <Box className={classes.explorer} component='div'>
                    <Grid item>
                        <PokeExplorer input={filter} onChange={updateFilter} onClick={clearFilter} />
                    </Grid>
                </Box>
                <Grid className={classes.container} container item spacing={2}>
                    <Grid item >
                        <PokeContainer pokemonList={filteredPokeList} isLoading={isLoading} onClick={clearFilter} />
                        <ScrollToTop showBelow={250} />
                    </Grid>
                </Grid>
                <Box>
                    <Footer />
                </Box>
            </Grid>
        </Box>
    );
}

export default Layout;