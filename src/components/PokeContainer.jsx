import React, { useState, useEffect } from 'react';
import { PokeCard, NoResultsCard, LoadingCard } from './index';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        // minHeight: 'calc(70vh - 1rem)',  // needed to make the footer stay at the bottom
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        
    },
    card: {
        display: 'flex',
    }
}));

export default function PokeContainer({ pokemonList, isLoading, onClick }) {
    const classes = useStyles();
    const [pokemons, setPokemons] = useState([]);
    
    useEffect(() => {
        setPokemons(pokemonList);
    }, [pokemonList]);

    const getPokemonCard = pokemon => {
        const { id } = pokemon;
        return (
            <Grid className={classes.card} item key={id} sm={6} md={4}>
                <PokeCard {...pokemon} />
            </Grid>
        );
    };

    return (isLoading ? (<Grid className={classes.root} ><LoadingCard /></Grid>) :
        (<Grid className={classes.root} container item spacing={2} xs sm md>
            {pokemons.length === 0 ? (<NoResultsCard onClick={onClick} />) : (pokemons.map(pokemon => getPokemonCard(pokemon)))}
        </Grid>)
    );
};