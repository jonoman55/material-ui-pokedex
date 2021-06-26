import React from 'react';
import { makeStyles, Avatar, Card, CardActions, CardActionArea, CardContent, CardMedia, CardHeader, Typography, IconButton } from '@material-ui/core';
import { Clear, Error, Pageview } from '@material-ui/icons';
import { ClearButton } from './index';
import pokeball from '../../src/images/pokeball.gif';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        alignContent: 'center',
        borderColor: theme.palette.secondary.dark,
        borderRadius: '1rem',
        border: 'solid',
        borderWidth: '2px',
        backgroundColor: theme.palette.secondary.light,
        '& .MuiCardContent-root': {
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            flexWrap: 'wrap',
            padding: theme.spacing(2),
        },
        '& .MuiCardActions-spacing > :not(:first-child)': {
            marginLeft: '24px',
        },
        '& .MuiButton-root': {
            transition: 'none',
        },
    },
    content: {
        display: 'block',
        flex: '1 0 auto',
        '& .MuiCardActionArea-focusHighlight': {
            backgroundColor: theme.palette.background.default,
        },
    },
    header: {
        '& .MuiCardHeader-avatar': {
            flex: '0 0 auto',
            marginLeft: '-12px',
            marginTop: '-12px',
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
    text: {
        display: 'flex',
        marginTop: '2rem',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
        fontWeight: 500,
        fontSize: '1rem',
        textAlign: 'center',
    },
    btnContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: '10px',
    },
    errorContainer: {
        display: 'flex',
        flex: '0 0 auto',
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
}));

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
                <Typography className={classes.text} component='p'>
                    No Pokémon Found! Clear your search and try again! 😀
                </Typography>
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
