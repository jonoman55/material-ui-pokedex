import React, { useState, useEffect, useRef } from 'react';
import { makeStyles, Grid, Box } from '@material-ui/core';
import { Header, ApiCredit, PokeExplorer, PokeContainer, HomeCard, Footer, ScrollToTop } from '../components';
import { sanitizeGenNum } from '../helpers/text';
import { getGenData } from '../api/PokemonCounts';
import * as api from '../api/PokemonService';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.primary.main,
    },
    grid: {
        display: 'flex',
        flexDirection: 'column',
    },
    explorer: {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(1),
    },
    items: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        alignContent: 'center',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        '&.MuiGrid-spacing-xs-2': { 
            margin: 0, // fixes horizontal scroll bar issue
            width: 'auto',
        },
    },
}));

// TODO : Remove the sleep function when site is finished
const Pokedex = (props) => {
    const classes = useStyles();
    const { history, theme, handleThemeChange } = props;
    const [genNumber, setGenNumber] = useState(8);
    const [genList, setGenList] = useState([]);
    const [genValue, setGenValue] = useState('');
    const [pokeList, setPokeList] = useState([]);
    const [filteredPokeList, setFilteredPokeList] = useState([]);
    const [filter, setFilter] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const unmounted = useRef(false);

    const fetchGens = async () => {
        try {
            setIsLoading(true);
            const generations = await api.getGenOptions();
            if (generations !== genList) setGenList(generations);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    // eslint-disable-next-line
    useEffect(() => { fetchGens(); }, []);

    const fetchPokemon = async () => {
        try {
            setIsLoading(true);
            setFilter('');
            setGenNumber(genNumber);
            let gen = getGenData(genNumber);
            const pokemons = await api.getPokemon(gen.offset, gen.limit);
            setFilteredPokeList(pokemons);
            setPokeList(pokemons);
            await api.sleep(1000);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (unmounted.current) {
            fetchPokemon();
        };
        return () => unmounted.current = true;
        // eslint-disable-next-line
    }, [genNumber]);

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

    const updateGen = async event => {
        let { value } = event.target;
        setGenValue(value);
        setGenNumber(sanitizeGenNum(Number(value.split(' ')[1].trim())));
    };

    return (
        <>
            <Box className={classes.root} component='div'>
                <Grid className={classes.grid} container>
                    <Grid item>
                        <Header />
                    </Grid>
                    <Grid item>
                        <ApiCredit theme={theme} handleThemeChange={handleThemeChange} />
                    </Grid>
                    <Grid className={classes.explorer} container item>
                        <PokeExplorer
                            //Search
                            input={filter}
                            onStartSearch={updateFilter}
                            onSearchClick={clearFilter}
                            //Dropdown
                            genValue={genValue}
                            genOptions={genList}
                            onGenSelect={updateGen}
                            //Refresh
                            onRefreshClick={clearFilter}
                        />
                    </Grid>
                    <Grid className={classes.items} container item spacing={2}>
                        <Grid item>
                            {genValue === '' ? <HomeCard theme={theme} /> :
                            <PokeContainer
                                pokemons={filteredPokeList}
                                isLoading={isLoading}
                                searchOnClick={clearFilter}
                                history={history}
                            />}
                            <ScrollToTop showBelow={250} />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box component='div'>
                <Footer />
            </Box>
        </>
    );
}

export default Pokedex;