/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Typography, Link, CircularProgress, Button } from "@material-ui/core";
import { toFirstCharUppercase } from '../helpers/text';
import axios from "axios";

// TODO : Refactor this code - make it into a popup modal instead of being pushed to browser history
const Pokemon = (props) => {
    const { match, history } = props;
    const { params } = match;
    const { id } = params;
    const [pokemon, setPokemon] = useState(undefined);

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => {
                const { data } = res;
                setPokemon(data);
            })
            .catch(() => {
                setPokemon(false);
            });
    }, [id]);

    const generatePokemonJSX = (pokemon) => {
        const { name, id, species, height, weight, types, sprites } = pokemon;
        const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        const { front_default } = sprites;
        return (
            <>
                <Typography variant="h1">
                    {`${id}.`} {toFirstCharUppercase(name)}
                    <img src={front_default} />
                </Typography>
                <img style={{ width: "300px", height: "300px" }} src={fullImageUrl} />
                <Typography variant="h3">Pokemon Info</Typography>
                <Typography>
                    {"Species: "}
                    <Link href={species.url} target='_blank'>{species.name} </Link>
                </Typography>
                <Typography>Height: {height} </Typography>
                <Typography>Weight: {weight} </Typography>
                <Typography variant="h6"> Types:</Typography>
                {types.map((typeInfo) => {
                    const { type } = typeInfo;
                    const { name } = type;
                    return <Typography key={name}> {`${name}`}</Typography>;
                })}
            </>
        );
    };

    return (
        <>
            {pokemon === undefined && <CircularProgress />}
            {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
            {pokemon === false && <Typography> Pokemon not found</Typography>}
            {pokemon !== undefined && (
                <Button variant="contained" onClick={() => history.goBack()}>
                    Back To Pokedex
                </Button>
            )}
        </>
    );
};

export default Pokemon;