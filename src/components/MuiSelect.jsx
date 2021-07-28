import React from 'react';
import { makeStyles, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    form: {
        margin: theme.spacing(0.5),
        width: '100%',
        color: theme.palette.primary.contrastText,
        backGroundColor: theme.palette.primary.main,
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.pokeRed,
            backGroundColor: theme.palette.primary.light,
        },
        '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
            color: theme.palette.primary.contrastText,
            backGroundColor: theme.palette.primary.light,
        },
        '& .MuiSelect-icon': {
            color: theme.palette.primary.contrastText,
        },
        '& .MuiSelect-outlined.MuiSelect-outlined': {
            color: theme.palette.primary.contrastText,
        },
    },
    item: {
        color: theme.palette.black.main,
        '&.MuiListItem-button:hover': {
            color: theme.palette.primary.pokeRed,
            backGroundColor: theme.palette.primary.dark,
        },
    },
}));

export default function MuiSelect(props) {
    const classes = useStyles();
    const { name, label, value, options, onChange, ...other } = props;
    return (
        <FormControl className={classes.form} variant='outlined'>
            <InputLabel>{label}</InputLabel>
            <Select
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                {...other}
            >
                {options.map((item, id) => (
                    <MenuItem key={id} value={item} className={classes.item}>{item}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}