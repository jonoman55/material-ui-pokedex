import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core';
import Pokeball from './svg/pokeball';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        textAlign: 'center',
        cursor: 'default',
        padding: theme.spacing(2),
        '& .MuiToolbar-root': {
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
    },
    text: {
        flex: 1,
        fontSize: '2rem',
        fontWeight: 500,
        paddingLeft: '25px',
        paddingRight: '25px',
        color: '#000000',
    },
}));

// TODO : Add Link that allows you to refresh the page
const Header = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.root} position='static' color='primary'>
            <Toolbar component='header' disableGutters>
                <Pokeball />
                <Typography className={classes.text}>
                    Welcome To The Online Pokédex
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
