import React from 'react';
import CoffeeCard from './CoffeeCard';
import { makeStyles, Grid } from '@material-ui/core';
import coffeeMakerList from '../constants/products';

const useStyles = makeStyles({
    root: {
        paddingLeft: '20px',
        paddingTop: '25px',
        paddingBottom: '25px',
    }
});

const Content = () => {
    const classes = useStyles();
    const getCoffeeMakerCard = coffeeMakerObj => {
        const { id } = coffeeMakerObj;
        return (
            <Grid item key={id} xs={12} sm={4}>
                <CoffeeCard {...coffeeMakerObj} />
            </Grid>
        );
    };

    return (
        <Grid container spacing={2} xs={12} sm={12} className={classes.root}>
            {coffeeMakerList.map(coffeeMakerObj => getCoffeeMakerCard(coffeeMakerObj))}
        </Grid>
    );
};

export default Content;