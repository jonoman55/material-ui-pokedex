import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0.5),
        width: '100%',
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.pokeRed,
        },
        '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
            color: theme.palette.primary.contrastText,
        },
        '& .MuiOutlinedInput-input': {
            color: theme.palette.primary.contrastText,
        },
        '& .MuiInputBase-input:focus': {
            color: theme.palette.primary.contrastText,
            borderColor: theme.palette.primary.pokeRed,
        },
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
