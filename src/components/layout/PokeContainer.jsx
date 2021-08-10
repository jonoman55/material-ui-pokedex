import React from 'react';
import { PokeCard, NoResultsCard, LoadingCard } from '../index';
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

export default function PokeContainer({ filter, isLoading, pokemons, searchOnClick, history }) {
    const classes = useStyles();

    const getPokemonCard = pokemon => {
        return (
            <Grid className={classes.card} key={pokemon.id} item sm={6} md={6} lg={4}>
                <PokeCard pokemon={pokemon} history={history} />
            </Grid>
        );
    };

    //isLoading check ->  render pokemon cards -> check for filtered results
    return (
        <Grid className={classes.root} container item spacing={2} sm md lg>
            {!isLoading && pokemons.length !== 0 ? pokemons?.map(p => getPokemonCard(p))
                : filter !== '' && pokemons.length === 0 ? <NoResultsCard onClick={searchOnClick} />
                    : <LoadingCard />
            }
        </Grid>
    );
};