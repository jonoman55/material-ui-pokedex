import React, { useContext } from 'react';
import { PokeCard, NoResultsCard, LoadingCard } from '../index';
import { makeStyles, Grid } from '@material-ui/core';
import AppContext from '../../contexts/AppContext';

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

// TODO : Figure out if there is a hook that allows me to memorize all current filteredPokeList cards so I don't have to rerender them
export default function PokeContainer({ searchOnClick, history }) {
    const { isLoading, filter, filteredPokeList } = useContext(AppContext);
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
            {!isLoading && filteredPokeList.length !== 0 ? filteredPokeList?.map(p => getPokemonCard(p))
                : filter !== '' && filteredPokeList.length === 0 ? <NoResultsCard onClick={searchOnClick} />
                    : <LoadingCard />
            }
        </Grid>
    );
};