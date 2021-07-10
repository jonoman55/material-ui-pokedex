import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { Star } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
    },
    favIco: {
        color: theme.palette.warning.main,
    },
}));

export default function Favorites() {
    const classes = useStyles();
    return (
        <Grid className={classes.root} container item>
            <Grid item>
                <Star className={classes.favIco} />
            </Grid>
            <Grid item>
                <Typography component='p'>Favorites</Typography>
            </Grid>
            <Grid item>
                <Typography component='p'>Coming Soon!</Typography>
            </Grid>
        </Grid>
    );
}
