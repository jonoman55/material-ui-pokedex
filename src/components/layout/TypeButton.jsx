import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0.5),
    },
}));

export default function TypeButton({ text, color }) {
    const classes = useStyles();
    return (
        <Button
            style={{
                background: color ? color : '#bcbcbc',
                borderRadius: '3rem',
                border: 0,
                color: '#fff',
                cursor: 'default',
                height: '2rem',
                padding: '0 30px',
                width: '5rem',
            }}
            className={classes.root}
            disableRipple
        >
            {text}
        </Button>
    );
}
