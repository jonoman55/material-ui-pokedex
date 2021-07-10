import React, { useState, useEffect, useRef } from 'react';
import { makeStyles, Grid, Box } from '@material-ui/core';
import { Header, ApiCredit, PokeExplorer, PokeContainer, StartCard, Footer, ScrollToTop } from './index';
import { formatGen, sanitizeGen } from '../helpers/text';
import { getPokemon, getData } from '../api/PokemonService';
import { getGeneration } from '../api/PokemonCounts';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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
    }
}));

// TODO : Add a scroll to bottom button
// TODO : Add genId for history
const Pokedex = (props) => {
    const classes = useStyles();
    const { history } = props;
    const [genNumber, setGenNumber] = useState(8);
    const [genList, setGenList] = useState([]);
    const [genValue, setGenValue] = useState('');
    const [pokeList, setPokeList] = useState([]);
    const [filteredPokeList, setFilteredPokeList] = useState([]);
    const [filter, setFilter] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const unmounted = useRef(false);

    // const sleep = (milliseconds) => {
    //     return new Promise(resolve => setTimeout(resolve, milliseconds))
    // };

    const fetchGens = async () => {
        try {
            setIsLoading(true);
            const generations = await getData('https://pokeapi.co/api/v2/generation/');
            setGenList(generations.results.map((g, i) => {
                let num = i++;
                if (num !== 0 && num <= 7) {
                    return formatGen(g.name) + ' ' + num;
                } else {
                    return undefined;
                }
            }).filter((g) => g !== undefined));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (genNumber === 8) {
            fetchGens();
        }
    });

    const fetchPokemon = async () => {
        try {
            setIsLoading(true);
            setFilter('');
            setGenNumber(genNumber);
            let gen = getGeneration(genNumber);
            const pokemons = await getPokemon(gen.offset, gen.limit);
            setFilteredPokeList(pokemons);
            setPokeList(pokemons);
            // await sleep(200000000);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
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
        let gen = event.target.value;
        setGenValue(gen);
        setGenNumber(sanitizeGen(Number(gen.split(' ')[1].trim())));
    };

    return (
        <>
            <Box className={classes.root} component='div'>
                <Grid className={classes.grid} container>
                    <Grid item>
                        <Header />
                    </Grid>
                    <Grid item>
                        <ApiCredit />
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
                            {genValue === '' ? (<StartCard />) : (
                                <PokeContainer
                                    pokemons={filteredPokeList}
                                    isLoading={isLoading}
                                    searchOnClick={clearFilter}
                                    history={history}
                                />)}
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