import React, { useState, useEffect, useContext } from 'react';
import { makeStyles, Grid, Box } from '@material-ui/core';
import { Header, ApiCredit, PokeExplorer, PokeContainer, HomeCard, Footer, ScrollToTop } from '../components';
import { sanitizeGenNum } from '../helpers/text';
import { getGenData } from '../api/PokemonCounts';
import AppContext from '../contexts/AppContext';
import useMountedState from '../helpers/mounted';
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

// TODO : Implement filters -> by type, id and name
const Pokedex = ({ history }) => {
    const isMounted = useMountedState();
    const {
        genNumber, setGenNumber,
        genValue, setGenValue,
        genList, setGenList,
        setIsLoading,
        pokeList, setPokeList,
        setFilteredPokeList,
        filter, setFilter
    } = useContext(AppContext);
    // const [pokeList, setPokeList] = useState([]);
    // const [filteredPokeList, setFilteredPokeList] = useState([]);
    // const [filter, setFilter] = useState('');
    const classes = useStyles();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const onResize = () => {
            setWidth(document.body.clientWidth);
        }
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [width]);

    useEffect(() => {
        api.getGenOptions()
            .then(gens => {
                if (isMounted()) {
                    setGenList(gens);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [setGenList, isMounted]);

    useEffect(() => {
        setIsLoading(true);
        setFilter('');
        setGenNumber(genNumber);
        let gen = getGenData(genNumber);
        api.getPokemon(gen.offset, gen.limit)
            .then(pokemons => {
                if (isMounted()) {
                    setFilteredPokeList(pokemons);
                    setPokeList(pokemons);
                    setIsLoading(false);
                    api.sleep(1000); // half second delay to help render cards more smoothly
                }
            }).catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    }, [genNumber, setGenNumber, genValue, setIsLoading, setFilter, setFilteredPokeList, setPokeList, isMounted]);

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
                        <ApiCredit />
                    </Grid>
                    <Grid className={classes.explorer} container item>
                        {genList !== undefined &&
                            <PokeExplorer
                                onStartSearch={updateFilter}
                                onSearchClick={clearFilter}
                                onGenSelect={updateGen}
                                onRefreshClick={clearFilter}
                            />}
                    </Grid>
                    <Grid className={classes.items} container item spacing={2}>
                        <Grid item>
                            {genValue === ''
                                ? <HomeCard />
                                : <PokeContainer searchOnClick={clearFilter} history={history} />
                            }
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