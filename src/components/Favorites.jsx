import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { Star } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'space-around',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: theme.palette.primary.contrastText,
    },
    favIco: {
        color: theme.palette.warning.main,
    },
}));

export default function Favorites() {
    const classes = useStyles();
    return (
        <Grid className={classes.root} container item xs={8}>
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
