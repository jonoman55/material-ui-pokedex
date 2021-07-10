import React from 'react';
import { makeStyles, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0.5),
        width: '100%',
        '& .MuiInputBase-root': {
            color: theme.palette.black.main,
        },
        '& .MuiSelect-nativeInput': {
            color: theme.palette.primary.main,
        },
        '& .MuiSelect-iconOutlined': {
            color: theme.palette.black.main,
        },
    },
}));
export default function MuiSelect(props) {
    const classes = useStyles();
    const { name, label, value, options, onChange, ...other } = props;
    return (
        <FormControl className={classes.root} variant='outlined'>
            <InputLabel>{label}</InputLabel>
            <Select
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                {...other}
            >
                {options.map((item) => (
                    <MenuItem key={item} value={item}>{item}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}