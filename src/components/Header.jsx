import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { LocalCafe } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        textAlign: 'center',
        backgroundColor: '#424242'
    },
    text: {
        flex: 1,
        paddingLeft: '25px',
        paddingRight: '25px',
    }
});

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <LocalCafe />
                <Typography className={classes.text}>
                    React With Material UI
                </Typography>
                <LocalCafe />
            </Toolbar>
        </AppBar>
    );
}

export default Header;
