import { makeStyles, AppBar, Toolbar, Tooltip, Button, Container } from '@material-ui/core';
import { Copyright } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        bottom: 0,
        backgroundColor: theme.palette.primary.pokeRed,
    },
    container: {
        display: 'flex',
        width: '100%',
        alignContent: 'center',
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
                <Container className={classes.container}>
                    <Tooltip title='Visit My GitHub Page' position='top'>
                        <Button
                            className={classes.link}
                            component='button'
                            startIcon={<Copyright />}
                            onClick={() => window.open('https://github.com/jonoman55/material-ui-pokedex', '_blank')}
                        >
                            John Chiappetta {new Date().getFullYear()}
                        </Button>
                    </Tooltip>
                </Container>
            </Toolbar>
        </AppBar>
    );
};