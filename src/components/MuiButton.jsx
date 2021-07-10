import React from 'react';
import { makeStyles, Button } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '10rem',
        borderRadius: '1.5rem',
        fontSize: '0.75rem',
        margin: theme.spacing(2),
        color: theme.palette.black.main,
        '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.secondary.main,
            transition: '0.3s',
        },
        '& .MuiButton-label': {
            margin: '2px',
            padding: '2px',
        },
        '& .MuiButton-startIcon': {
            marginLeft: '0',
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