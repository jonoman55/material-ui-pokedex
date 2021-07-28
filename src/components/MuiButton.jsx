import React from 'react';
import { makeStyles, Button } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '10rem',
        borderRadius: '1.5rem',
        fontSize: '0.75rem',
        margin: theme.spacing(2),
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.pokeRed,
        '&:hover': {
            color: theme.palette.primary.pokeRed,
            backgroundColor: theme.palette.primary.dark,
            transition: '0.3s',
            textDecoration: 'none',
        },
        '& .MuiButton-label': {
            margin: '2px',
            padding: '2px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
        },
        '& .MuiButton-startIcon': {
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