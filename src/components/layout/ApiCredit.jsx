import React from 'react';
import { makeStyles, AppBar, Button, Box, Container, Toolbar, Tooltip, Link, Switch, IconButton } from '@material-ui/core';
import { Gamepad, GitHub } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        borderBottomLeftRadius: '2rem',
        borderBottomRightRadius: '2rem',
        backgroundColor: theme.palette.primary.light,
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        alignContent: 'space-around',
        width: '100%',
        padding: theme.spacing(0.5),
        '& .MuiButton-root:hover': {
            backgroundColor: 'transparent',
            textDecoration: 'none',
            color: theme.palette.primary.pokeRed,
        },
    },
    link: {
        textTransform: 'capitalize',
        fontSize: 20,
        color: theme.palette.primary.contrastText,
    },
    icon: {
        color: theme.palette.primary.contrastText,
    },
}));

export default function ApiCredit({ theme, handleThemeChange }) {
    const classes = useStyles();
    return (
        <AppBar className={classes.root} position='static'>
            <Toolbar>
                <Container className={classes.container} maxWidth='xl'>
                    <Box component='div'>
                        <Link href='https://github.com/jonoman55/material-ui-pokedex' target='_blank'>
                            <Tooltip title='GitHub Repo' placement='bottom'>
                                <IconButton>
                                    <GitHub className={classes.icon} />
                                </IconButton>
                            </Tooltip>
                        </Link>
                    </Box>
                    <Box component='div'>
                        <Link href='https://pokeapi.co/' target='_blank' style={{ textDecoration: 'none' }}>
                            <Tooltip title='PokeApi' placement='bottom' arrow>
                                <Button
                                    className={classes.link}
                                    component='button'
                                    size='large'
                                    startIcon={<Gamepad className={classes.icon} />}
                                >
                                    PokeApi
                                </Button>
                            </Tooltip>
                        </Link>
                    </Box>
                    <Box component='div'>
                        <Tooltip title={'Switch To ' + (theme ? 'Dark': 'Light') + ' Theme'} placement='bottom'>
                            <Switch checked={theme} onChange={handleThemeChange} />
                        </Tooltip>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
};