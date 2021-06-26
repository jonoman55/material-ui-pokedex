import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        color: theme.palette.black.main,
    },
}));

export default function PokeSearch(props) {
    const classes = useStyles();
    const { name, label, value, variant, onChange, ...other } = props;
    return (
        <TextField
            className={classes.root}
            variant={variant}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
        />
    );
}
