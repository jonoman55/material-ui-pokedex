import React from 'react';
import { makeStyles, AppBar, Toolbar, Link, Tooltip } from '@material-ui/core';
import Pokeball from './svg/pokeball';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        textAlign: 'center',
        cursor: 'default',
        backgroundColor: theme.palette.primary.pokeRed,
        padding: theme.spacing(2),
        '& .MuiToolbar-root': {
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'center',
            backgroundColor: theme.palette.primary.pokeRed,
        },
    },
    text: {
        flex: 1,
        fontSize: '2rem',
        fontWeight: 500,
        paddingLeft: '25px',
        paddingRight: '25px',
        color: theme.palette.black.main,
        '&:hover': {
            backgroundColor: 'transparent',
            textDecoration: 'none',
            color: theme.palette.black.main,
        },
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar className={classes.root} position='static'>
            <Toolbar component='header' disableGutters>
                <Pokeball />
                <Tooltip title='Home'>
                    <Link className={classes.text} href='/'>
                        Welcome To The Online Pokédex
                    </Link>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
}