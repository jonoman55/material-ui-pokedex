import React from 'react';
import { makeStyles, Avatar, Card, CardActions, CardActionArea, CardContent, CardMedia, CardHeader, Divider, Typography, IconButton } from '@material-ui/core';
import { Language, VideogameAsset } from '@material-ui/icons';
import pokemon from '../../src/images/pokemon2.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        alignContent: 'center',     
    },
    card: {
        borderRadius: '1rem',
        border: 'solid',
        borderWidth: '2px',
        backgroundColor: theme.palette.secondary.light,
    },
    content: {
        display: 'block',
        flex: '1 0 auto',
        '& .MuiCardActionArea-focusHighlight': {
            backgroundColor: theme.palette.secondary.dark,
        },
        '& .MuiCardHeader-avatar': {
            flex: '0 0 auto',
            marginLeft: '-12px',
            marginTop: '-12px',
        },
    },
    title: {
        display: 'flex',
        padding: '8px',
        alignItems: 'center',
        paddingBottom: '10px',
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
        borderColor: theme.palette.secondary.dark,
        backgroundColor: theme.palette.background.default,
        '& .MuiAvatar-img': {
            display: 'flex',
            color: theme.palette.secondary.main,
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
        borderColor: theme.palette.secondary.dark,
        borderRadius: '1rem',
        border: 'solid',
        borderWidth: '1px',
        backgroundColor: theme.palette.background.default,
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        alignContent: 'stretch',
        justifyContent: 'center',
        justifyItems: 'center',
    },
    text: {
        display: 'flex',
        margin: '15px',
        alignItems: 'stretch',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        fontWeight: 500,
        textAlign: 'center',
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
    icon: {
        height: '32px',
        width: '32px',
        color: theme.palette.black.main,
    },
    divider: {
        margin: '15px',
        backgroundColor: theme.palette.secondary.dark,
    },
}));

// TODO : Go through styling and remove any unnecessary code
export default function HomeCard() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <CardHeader
                        className={classes.title}
                        title='Welcome to the Online Pokédex'
                        avatar={
                            <Avatar className={classes.avatar}>
                                <VideogameAsset />
                            </Avatar>
                        }
                        action={
                            <IconButton className={classes.iconContainer} disableRipple>
                                <Language className={classes.icon} />
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
                    <Divider className={classes.divider} />
                </CardActions>
            </Card>
        </div>
    );
}
