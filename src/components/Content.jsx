import React from 'react';
import CoffeeCard from './CoffeeCard';
import { makeStyles, Grid, CssBaseline } from '@material-ui/core';
import coffeeMakerList from '../constants/products';

const useStyles = makeStyles({
    root: {
        paddingLeft: '25px',
        paddingTop: '25px',
        paddingBottom: '25px',
    }
});

const Content = () => {
    const classes = useStyles();
    const getCoffeeMakerCard = coffeeMakerObj => {
        return (
            <Grid item xs={12} sm={4}>
                <CoffeeCard {...coffeeMakerObj} />
            </Grid>
        );
    };

    return (
        <Grid container spacing={3} xs={12} sm={12} className={classes.root}>
            {coffeeMakerList.map(coffeeMakerObj => getCoffeeMakerCard(coffeeMakerObj))}
            <CssBaseline />
        </Grid>
    );
};

export default Content;