import React, { useEffect, useState } from 'react';
import { Box, Typography, Link, CircularProgress, Button, capitalize, styled } from '@material-ui/core';
import { NotFound } from '../pages'
import * as api from '../api/PokemonService';
import { padId } from '../helpers/text';
import useMountedState from '../helpers/mounted';
import getTypeStyle from '../helpers/types';

// TODO : Replace this with makeStyles
const Div = styled('div')({
    fontFamily: 'Roboto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    width: '100%',
    height: '100vh',
    backgroundColor: '#fafafa',
    margin: '0px',
    padding: '15px',
    position: 'fixed',
    top: '0px',
    zIndex: 999,
});

// TODO : Refactor this code for desktop and mobile using material-ui
const Pokemon = (props) => {
    const isMounted = useMountedState();
    const { match, history } = props;
    const { params } = match;
    const { id } = params;
    const [pokemon, setPokemon] = useState(undefined);

    useEffect(() => {
        api.getPokemonById(id)
            .then(res => {
                if (isMounted()) {
                setPokemon(res);
                }
            })
            .catch(() => {
                setPokemon(false);
            });
    }, [id, isMounted]);

    const generatePokemonJSX = (pokemon) => {
        const { name, id, species, height, weight, types, sprites } = pokemon;
        const fullImageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padId(id)}.png`;
        const { front_default } = sprites;
        return (
            <Box component='div' style={{ height: '100%', width: '100%'}}>
                <Typography style={{ fontWeight: 'bold', fontSize: 36 }}>
                    {`${id}.`} {capitalize(name)}
                    <img src={front_default} alt='Not Found' style={{ marginLeft:'10px', marginTop: '10px', width: '65px', height: '65px' }} />
                </Typography>
                <img style={{ width: '300px', height: '300px' }} src={fullImageUrl} alt='Not Found' />
                <Typography style={{ fontWeight: 'bold', fontSize: 28 }}>Pokémon Info</Typography>
                <Typography>
                    {'Species: '}
                    <Link style={{ color: '#FF0000' }} href={species.url} target='_blank'>
                        {capitalize(species.name)}
                    </Link>
                </Typography>
                <Typography>Height: {height} </Typography>
                <Typography>Weight: {weight} </Typography>
                <Typography style={{ fontSize: 18, fontWeight: 'bold' }}> Types:</Typography>
                {types.map((typeInfo) => {
                    const { type } = typeInfo;
                    const { name } = type;
                    return <Typography key={name} style={{ color: getTypeStyle(name)}}> {`${capitalize(name)}`}</Typography>;
                })}
                <Button variant='contained' onClick={() => history.push('/')} style={{ marginLeft:'10px', marginTop: '10px', width: '200px', textAlign: 'center' }}>
                    Back To Pokédex
                </Button>
            </Box>
        );
    };

    return (
        <Div>
            {pokemon === undefined && <CircularProgress />}
            {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
            {pokemon === false && <NotFound />}
        </Div>
    );
};

export default Pokemon;