import React from 'react';
import { makeStyles, Button } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '2rem',
        fontSize: '0.85rem',
        color: theme.palette.black.main,
        '&:hover, &.MuiButton-label': {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.secondary.main,
            transition: '0.3s',
        },
    },
}));

export default function MuiButton(props) {
    const classes = useStyles();
    const { text, variant, color, onClick, ...other } = props;
    return (
        <Button
            className={classes.root}
            variant={variant}
            color={color}
            onClick={onClick}
            {...other}
        >
            {text}
        </Button>
    );
}