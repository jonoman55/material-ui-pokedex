import React from 'react';
import { makeStyles, AppBar, Button, Container, Toolbar, Link } from '@material-ui/core';
import { Gamepad } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        borderBottomLeftRadius: '2rem',
        borderBottomRightRadius: '2rem',
        backgroundColor: theme.palette.background.default,
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        width: '100%',
        padding: theme.spacing(0.5),
        '& .MuiButton-root:hover': {
            backgroundColor: 'transparent',
            textDecoration: 'underline',
            color: theme.palette.secondary.dark,
        },
    },
    link: {
        textTransform: 'capitalize',
        fontSize: 18,
        color: theme.palette.primary.main,
    },
}));

export default function ApiCredit() {
    const classes = useStyles();
    return (
        <AppBar className={classes.root} position='static'>
            <Toolbar>
                <Container className={classes.container}>
                    <Link href='https://pokeapi.co/' target="_blank">
                        <Button
                            className={classes.link}
                            component='button'
                            size="large"
                            startIcon={<Gamepad />}
                        >
                            ApiCredit
                        </Button>
                    </Link>
                </Container>
            </Toolbar>
        </AppBar>
    );
}