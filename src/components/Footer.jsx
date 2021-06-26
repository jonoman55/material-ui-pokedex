import React from 'react';
import { makeStyles, AppBar, Toolbar, Button, Link, Container } from '@material-ui/core';
import { Copyright } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        bottom: 0,
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
    },
    href: {
        display: 'flex',
        width: '100%',
        alignContent: "center",
        justifyContent: 'center',
        padding: theme.spacing(0.5),
        '& .MuiButton-root:hover': {
            backgroundColor: theme.palette.primary.light,
        },
        '& .MuiLink-underlineHover': {
            textDecoration: 'none',
        }
    },
    link: {
        color: '#000000',
        borderRadius: '2rem',
        textTransform: 'capitalize',
        fontSize: 18,
    },
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <AppBar position='static' color='primary' className={classes.root}>
            <Toolbar component='footer' disableGutters>
                <Container className={classes.href}>
                    <Link href='https://github.com/jonoman55/' target="_blank">
                        <Button
                            className={classes.link}
                            component='button'
                            startIcon={<Copyright />}
                        >
                            John Chiappetta {new Date().getFullYear()}
                        </Button>
                    </Link>
                </Container>
            </Toolbar>
        </AppBar>
    );
}