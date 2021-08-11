import React, { useContext } from 'react';
import { makeStyles, AppBar, Button, Box, Container, Toolbar, Tooltip, Switch, IconButton } from '@material-ui/core';
import { Gamepad, GitHub } from '@material-ui/icons';
import ThemeContext from '../../contexts/ThemeContext';

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

// TODO : ThemeContext needed here to switch theme from dark to light
export default function ApiCredit() {
    const { theme, setTheme  } = useContext(ThemeContext);
    const classes = useStyles();
    const themeTitle = 'Switch To ' + (theme ? 'Dark' : 'Light') + ' Theme';
    return (
        <AppBar className={classes.root} position='static'>
            <Toolbar>
                <Container className={classes.container} maxWidth='xl'>
                    <Box component='div'>
                        <Tooltip title='GitHub Repo' placement='bottom'>
                            <IconButton onClick={() => window.open('https://github.com/jonoman55/material-ui-pokedex', '_blank')}>
                                <GitHub className={classes.icon} />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Box component='div'>
                        <Tooltip title='PokeApi' placement='bottom' arrow>
                            <Button
                                className={classes.link}
                                component='button'
                                size='large'
                                startIcon={<Gamepad className={classes.icon} />}
                                onClick={() => window.open('https://pokeapi.co/', '_blank')}
                            >
                                PokeApi
                            </Button>
                        </Tooltip>
                    </Box>
                    <Box component='div'>
                        <Tooltip title={themeTitle} placement='bottom'>
                            <Switch checked={theme} onChange={() => setTheme(!theme)} />
                        </Tooltip>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
};