import { makeStyles, Avatar, Box, Card, CardActions, CardActionArea, CardContent, CardMedia, CardHeader, Divider, Typography, IconButton } from '@material-ui/core';
import { Language, VideogameAsset } from '@material-ui/icons';
import { MuiButton as GoToButton } from '../';
import pokemon from '../../images/pokemon2.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: theme.spacing(1),
    },
    card: {
        borderRadius: '1rem',
        border: 'solid',
        borderWidth: '1px',
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light,
    },
    content: {
        display: 'block',
        '& .MuiCardHeader-avatar': {
            flex: '0 0 auto',
            marginLeft: '-12px',
            marginTop: '-12px',
        },
        '& .MuiCardActionArea-focusHighlight': {
            backgroundColor: 'inherit',
        },
    },
    title: {
        display: 'flex',
        padding: '8px',
        alignItems: 'center',
        paddingBottom: '10px',
        color: theme.palette.primary.contrastText,
        '& .MuiTypography-displayBlock': {
            display: 'flex',
            textAlign: 'center',
            fontSize: '1.25rem',
            fontWeight: 700,
            flexDirection: 'column',
            textTransform: 'uppercase'
        },
        '& .MuiCardHeader-content': {
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '10px'
        },
        '& .MuiCardHeader-action': {
            flex: '0 0 auto',
            alignSelf: 'baseline',
            marginTop: '-2.5px',
            marginRight: '-12px',
            height: '30px',
            width: '30px',
        },
    },
    avatar: {
        display: 'flex',
        flex: '0 0 auto',
        marginRight: '0px',
        position: 'static',
        width: '50px',
        height: '50px',
        paddingRight: '0px',
        borderRadius: '1rem',
        borderWidth: '1px',
        border: 'solid',
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main,
        '& .MuiAvatar-img': {
            display: 'flex',
            color: theme.palette.primary.main,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            textAlign: 'center',
            textIndent: '10000px'
        },
    },
    image: {
        objectFit: 'cover',
        textTransform: 'capitalize',
        cursor: 'default',
        borderColor: theme.palette.primary.main,
        borderRadius: '1rem',
        border: 'solid',
        borderWidth: '1px',
        backgroundColor: theme.palette.primary.main,
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        alignContent: 'stretch',
        justifyContent: 'center',
        justifyItems: 'center',
        marginBottom: '15px',
    },
    text: {
        display: 'flex',
        margin: '15px',
        alignItems: 'stretch',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
        fontWeight: 500,
        textAlign: 'center',
        color: theme.palette.primary.contrastText,
    },
    iconContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        cursor: 'default',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    globeIcon: {
        height: '32px',
        width: '32px',
        color: theme.palette.primary.pokeRed,
    },
    divider: {
        margin: '15px',
        backgroundColor: theme.palette.primary.contrastText,
    },
    btn: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
    },
    lightIcon: {
        color: theme.palette.primary.pokeRed,
    },
    darkIcon: {
        color: theme.palette.black.main,
    }
}));

export default function HomeCard({ theme }) {
    const classes = useStyles();
    return (
        <Box className={classes.root} component='div'>
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <CardHeader
                        className={classes.title}
                        title='Welcome to the Online Pokédex'
                        avatar={
                            <Avatar className={classes.avatar}>
                                <VideogameAsset className={theme ? classes.darkIcon : classes.lightIcon} />
                            </Avatar>
                        }
                        action={
                            <IconButton className={classes.iconContainer} disableRipple>
                                <Language className={classes.globeIcon} />
                            </IconButton>
                        }
                    />
                    <CardActionArea className={classes.content} disableRipple>
                        <CardMedia
                            className={classes.image}
                            component='img'
                            src={pokemon}
                            alt='Welcome...'
                        />
                    </CardActionArea>
                </CardContent>
                <CardActions className={classes.textContainer} component='div'>
                    <Divider className={classes.divider} />
                    <Typography className={classes.text} component='p'>
                        Search for your favorite Pokémon and add them to your Favorites! ⭐
                    </Typography>
                        <Box className={classes.btn} component='div' onClick={() => window['scrollTo']({ top: 250, behavior: 'smooth' })}>
                            <GoToButton variant='contained' color='primary' text='Go To PokéExplorer' style={{ width: 'auto', textTransform:'none', fontSize: '1rem' }} />
                        </Box>
                    <Divider className={classes.divider} />
                </CardActions>
            </Card>
        </Box>
    );
};
