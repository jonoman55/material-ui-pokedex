import React, { useState, useEffect } from 'react';
import { Avatar, Box, Button, Card, CardActions, CardActionArea, CardContent, CardMedia, CardHeader, Divider, Typography, Tooltip, IconButton } from '@material-ui/core';
import { Star, Info } from '@material-ui/icons';
import { TypeButton } from '../../';
import * as api from '../../../api/PokemonService';
import useMountedState from '../../../helpers/mounted';
import { pokedexUrl } from '../../../helpers/imgs';
import getTypeStyle from '../../../helpers/types';
import useStyles from './styles';

// TODO : Figure out why 404's are being thrown when using dream_world .svg images
export default function PokeCard({ pokemon, history }) {
    const isMounted = useMountedState();
    const [description, setDescription] = useState('');
    const imgUrl = pokedexUrl(pokemon.id)
    const fetchTypeStyle = type => getTypeStyle(type);
    const classes = useStyles();

    useEffect(() => {
        api.getPokeDesc(pokemon).then(desc => {
            if (isMounted()) {
                setDescription(desc);
            }
        }).catch((err) => {
            console.log(err);
            setDescription('');
        });
    }, [pokemon, isMounted]);

    return (
        <Card className={classes.root}>
            <CardContent className={classes.header}>
                <CardHeader
                    className={classes.title}
                    title={`${pokemon.name}`}
                    subheader={`N.º ${pokemon.id}`}
                    avatar={<Avatar className={classes.avatar} src={pokemon.sprites.front_default} alt='Not Found' />}
                    action={
                        <IconButton className={classes.starContainer} aria-label='favorites'>
                            <Tooltip title='Add To Favorites'>
                                <Star className={classes.star} />
                            </Tooltip>
                        </IconButton>
                    }
                />
                <CardActionArea className={classes.content} disableRipple>
                    <CardMedia
                        className={classes.image}
                        component='img'
                        src={imgUrl}
                        alt='Not Found'
                    />
                </CardActionArea>
                <Divider className={classes.divider} />
                <Typography className={classes.text} component='p'>
                    {description}
                </Typography>
                <Divider className={classes.divider} />
            </CardContent>
            <CardActions className={classes.btnContainer} component='div'>
                <Box component='div'>
                    <Button
                        className={classes.info}
                        startIcon={<Info />}
                        onClick={() => history.push(`/${pokemon.id}`,  { from: 'Pokedex' })}
                    >
                        See More
                    </Button>
                </Box>
                <Box className={classes.types} component='div'>
                    {pokemon.types.length > 0 &&
                        pokemon.types.map((t, id) => (
                            <TypeButton
                                key={id}
                                text={t.type.name}
                                color={fetchTypeStyle(t.type.name)}
                            >
                                {t.type.name}
                            </TypeButton>
                        ))}
                </Box>
            </CardActions>
        </Card>
    );
}