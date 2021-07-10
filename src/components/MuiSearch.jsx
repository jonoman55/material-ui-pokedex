import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0.5),
        width: '100%',
    },
}));

export default function MuiSearch(props) {
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
