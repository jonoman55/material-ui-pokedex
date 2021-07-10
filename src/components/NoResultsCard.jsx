import React from 'react';
import { makeStyles, Avatar, Card, CardActions, CardActionArea, CardContent, CardMedia, CardHeader, Divider, Typography, IconButton } from '@material-ui/core';
import { Clear, Error, Pageview } from '@material-ui/icons';
import { MuiButton as ClearButton } from './index';
import pokeball from '../../src/images/pokeball.gif';

const useStyles = makeStyles((theme) => ({
    root: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: '1rem',
        border: 'solid',
        borderWidth: '2px',
        borderColor: theme.palette.secondary.dark,
        backgroundColor: theme.palette.secondary.light,
        '& .MuiCardContent-root': {
            width: '100%',
            flexDirection: 'column',
            flexWrap: 'wrap',
        },
        '& .MuiCardActions-spacing > :not(:first-child)': {
            marginLeft: '24px',
        },
        '& .MuiButton-root': {
            transition: 'none',
        },
    },
    content: {
        '& .MuiCardActionArea-focusHighlight': {
            backgroundColor: theme.palette.background.default,
        },
    },
    header: {
        '& .MuiCardHeader-avatar': {
            marginLeft: '-12px',
            marginTop: '-12px',
        },
    },
    avatar: {
        display: 'flex',
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
            color: 'transparent',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            textAlign: 'center',
            textIndent: '10000px'
        },
    },
    image: {
        maxHeight: '38vh',
        maxWidth: '78vw',
        objectFit: 'cover',
        textTransform: 'capitalize',
        cursor: 'default',
        borderColor: theme.palette.secondary.dark,
        borderRadius: '2rem',
        border: 'solid',
        borderWidth: '1px',
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1),
        marginBottom: '10px',
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
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '10px'
        },
        '& .MuiCardHeader-action': {
            alignSelf: 'baseline',
            marginTop: '-2.5px',
            marginRight: '-12px',
            height: '30px',
            width: '30px',
        },
    },
    text: {
        margin: theme.spacing(2),
        padding: theme.spacing(1),
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        fontWeight: 500,
        textAlign: 'center',
    },
    btnContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: '15px',
    },
    errorContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        cursor: 'default',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    error: {
        height: '32px',
        width: '32px',
        color: theme.palette.primary.main,
        borderColor: theme.palette.black.main,
    },
    divider2: {
        marginRight: '10px',
        marginLeft: '10px',
        backgroundColor: theme.palette.secondary.dark,
    },
    divider1: {
        marginTop: '2rem',
        marginBottom: '10px',
        marginRight: '10px',
        marginLeft: '10px',
        backgroundColor: theme.palette.secondary.dark,
    },
}));

// TODO : Go through styling and remove any unnecessary code
export default function NoResultsCard({ onClick }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent className={classes.header}>
                <CardHeader
                    className={classes.title}
                    title='No Pokémon Found'
                    avatar={
                        <Avatar className={classes.avatar}>
                            <Pageview />
                        </Avatar>
                    }
                    action={
                        <IconButton className={classes.errorContainer} disableRipple>
                            <Error className={classes.error} />
                        </IconButton>
                    }
                />
                <CardActionArea className={classes.content}>
                    <CardMedia
                        className={classes.image}
                        component='img'
                        image={pokeball}
                        alt='Nothing Found'
                    />
                </CardActionArea>
                <Divider className={classes.divider1} />
                <Typography className={classes.text} component='p'>
                    No Pokémon Found! Clear your search and try again! 😀
                </Typography>
                <Divider className={classes.divider2} />
            </CardContent>
            <CardActions className={classes.btnContainer} component='div'>
                <ClearButton
                    text='Clear'
                    variant='contained'
                    color='primary'
                    onClick={onClick}
                    startIcon={<Clear />}
                />
            </CardActions>
        </Card>
    );
}
