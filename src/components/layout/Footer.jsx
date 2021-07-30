import React from 'react';
import { makeStyles, AppBar, Toolbar, Tooltip, Button, Link, Container } from '@material-ui/core';
import { Copyright } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        bottom: 0,
        backgroundColor: theme.palette.primary.pokeRed,
    },
    href: {
        display: 'flex',
        width: '100%',
        alignContent: "center",
        justifyContent: 'center',
        padding: theme.spacing(0.5),
        '& .MuiButton-root:hover': {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.pokeRed,
            border: 'solid',
            borderWidth: '2px',
            borderColor: theme.palette.primary.contrastText,
        },
        '& .MuiLink-underlineHover': {
            textDecoration: 'none',
        },
    },
    link: {
        color: theme.palette.black.main,
        borderRadius: '2rem',
        textTransform: 'capitalize',
        fontSize: 18,
    },
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar component='footer' disableGutters>
                <Container className={classes.href}>
                    <Link href='https://github.com/jonoman55/' target='_blank'>
                        <Tooltip title='Visit My GitHub Page' position='top'>
                            <Button
                                className={classes.link}
                                component='button'
                                startIcon={<Copyright />}
                            >
                                John Chiappetta {new Date().getFullYear()}
                            </Button>
                        </Tooltip>
                    </Link>
                </Container>
            </Toolbar>
        </AppBar>
    );
}