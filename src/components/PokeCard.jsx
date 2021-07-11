import React, { useState, useEffect } from 'react';
import { makeStyles, Avatar, Box, Button, Card, CardActions, CardActionArea, CardContent, CardMedia, CardHeader, Divider, Typography, Tooltip, IconButton } from '@material-ui/core';
import { Star, Info } from '@material-ui/icons';
import { TypeBadge } from './index';
import { getData } from '../api/PokemonService';
import { formatDesc, isEnglish, formatID } from '../helpers/text';
import getTypeStyle from '../styles/typeStyles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        alignContent: 'space-between',
        justifyContent: 'center',
        borderColor: theme.palette.secondary.dark,
        borderRadius: '1rem',
        border: 'solid',
        borderWidth: '2px',
        backgroundColor: theme.palette.secondary.light,
        '& .MuiCardContent-root': {
            paddingTop: '8px',
            paddingBottom: theme.spacing(2),
            paddingRight: theme.spacing(2),
            paddingLeft: theme.spacing(2),
        },
        '& .MuiCardActions-spacing > :not(:first-child)': {
            marginLeft: '24px',
        },
        '& .MuiButton-root': {
            transition: 'none',
        },
    },
    content: {
        '& .MuiCardActionArea-focusHighlight': {
            backgroundColor: theme.palette.background.default,
        },
    },
    header: {
        '& .MuiCardHeader-avatar': {
            marginLeft: '-8px',
        },
    },
    avatar: {
        display: 'flex',
        marginRight: '0px',
        position: 'static',
        width: '50px',
        height: '50px',
        paddingRight: '0px',
        borderRadius: '1rem',
        borderWidth: '1px',
        border: 'solid',
        borderColor: theme.palette.secondary.dark,
        backgroundColor: theme.palette.background.default,
        '& .MuiAvatar-img': {
            display: 'flex',
            color: 'transparent',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            textAlign: 'center',
            textIndent: '10000px'
        },
    },
    image: {
        height: '350px',
        maxHeight: '350px',
        objectFit: 'contain',
        textTransform: 'capitalize',
        cursor: 'default',
        borderColor: theme.palette.secondary.dark,
        borderRadius: '2rem',
        border: 'solid',
        borderWidth: '1px',
        backgroundColor: theme.palette.background.default,
    },
    title: {
        display: 'flex',
        padding: '8px',
        alignItems: 'center',
        paddingBottom: '10px',
        '& .MuiTypography-displayBlock': {
            display: 'flex',
            textAlign: 'center',
            fontSize: '1.25rem',
            fontWeight: 700,
            flexDirection: 'column',
            textTransform: 'uppercase'
        },
        '& .MuiTypography-colorTextSecondary': {
            color: theme.palette.secondary.main,
            fontSize: '1rem',
            marginRight: '10px'
        },
        '& .MuiCardHeader-content': {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '10px'
        },
        '& .MuiCardHeader-action': {
            alignSelf: 'baseline',
            marginTop: '-2.5px',
            marginRight: '-12px',
            height: '30px',
            width: '30px',
        },
    },
    text: {
        display: 'flex',
        padding: theme.spacing(1),
        margin: theme.spacing(2),
        fontSize: '1rem',
        fontWeight: 500,
        minHeight: '5.5rem', // fixes card height issue
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        alignContent: 'center',
    },
    info: {
        display: 'flex',
        width: 'max-content',
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            transition: '0.2s',
            borderRadius: '1.75rem',
            textDecoration: 'none',
        },
        '& .MuiButton-label': {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            padding: theme.spacing(0.5),
        }
    },
    types: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    starContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        },
    },
    star: {
        color: theme.palette.warning.main,
    },
    divider: {
        margin: '15px',
        backgroundColor: theme.palette.secondary.dark,
    },
}));

// TODO : Fix the memory leak - if still present
export default function PokeCard({ pokemon, onClick }) {
    const classes = useStyles();
    const [description, setDescription] = useState('');

    const fetchDesc = async () => {
        const res = await getData(pokemon.species.url);
        const data = res;
        return data.flavor_text_entries.map((f) => {
            if (f.language.name === 'en') {
                return formatDesc(f.flavor_text);
            } else return undefined;
        }).filter(f => !isEnglish(f) && f !== undefined).shift();
    };

    useEffect(() => {
        const getDesc = async () => {
            const desc = await fetchDesc();
            setDescription(desc);
        };
        getDesc();
        // eslint-disable-next-line 
    }, []);

    return (
        <Card className={classes.root}>
            <CardContent className={classes.header}>
                <CardHeader
                    className={classes.title}
                    title={`${pokemon.name}`}
                    subheader={`N.º ${pokemon.id}`}
                    avatar={<Avatar className={classes.avatar} src={pokemon.sprites.front_default} alt='' />}
                    action={
                        <IconButton className={classes.starContainer} aria-label='favorites'>
                            <Tooltip title='Add To Favs'>
                                <Star className={classes.star} />
                            </Tooltip>
                        </IconButton>
                    }
                />
                <CardActionArea className={classes.content} disableRipple>
                    <CardMedia
                        className={classes.image}
                        component='img'
                        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatID(pokemon.id)}.png`}
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
                        onClick={onClick}
                    >
                        See More
                    </Button>
                </Box>
                <Box className={classes.types} component='div'>
                    {pokemon.types.length > 0 &&
                        pokemon.types.map((t, id) => (
                            <TypeBadge
                                key={id}
                                text={t.type.name}
                                color={getTypeStyle(t.type.name)}
                            >
                                {t.type.name}
                            </TypeBadge>
                        ))}
                </Box>
            </CardActions>
        </Card>
    );
}