import React from 'react';
import { PokeCard, NoResultsCard, LoadingCard } from './index';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        justifyItems: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    card: {
        minWidth: '25vw',
        minHeight: '15vh',
    }
}));

export default function PokeContainer({ pokemons, isLoading, searchOnClick, history }) {
    const classes = useStyles();
    const getPokemonCard = pokemon => {
        return (
            <Grid className={classes.card} key={pokemon.id} item sm={6} md={6} lg={4}>
                <PokeCard pokemon={pokemon} history={history} />
            </Grid>
        );
    };
    return (
        <Grid className={classes.root} container item spacing={2} sm md lg>
            {isLoading ? <LoadingCard /> : pokemons.length === 0 ? <NoResultsCard onClick={searchOnClick} /> : pokemons.map(p => getPokemonCard(p))}
        </Grid>
    );
};