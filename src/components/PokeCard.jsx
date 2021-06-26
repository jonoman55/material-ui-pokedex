import React from 'react';
import { makeStyles, Avatar, Box, Button, Card, CardActions, CardActionArea, CardContent, CardMedia, CardHeader, Typography, IconButton } from '@material-ui/core';
import { Star, Info } from '@material-ui/icons';
import { TypeBadge } from './index';
import getTypeStyle from '../styles/typeStyles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        alignContent: 'space-between',
        height: '40rem', // Needed to make the cards the same height
        borderColor: theme.palette.secondary.dark,
        borderRadius: '1rem',
        border: 'solid',
        borderWidth: '2px',
        backgroundColor: theme.palette.secondary.light,
        '& .MuiCardContent-root': {
            paddingTop: '8px',
            paddingBottom: '16px',
            paddingRight: '16px',
            paddingLeft: '16px',
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
            marginLeft: '-8px',
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
        height: '350px',
        maxHeight: '350px',
        objectFit: 'contain',
        textTransform: 'capitalize',
        cursor: 'default',
        borderColor: theme.palette.secondary.dark,
        borderRadius: '2rem',
        border: 'solid',
        borderWidth: '1px',
        backgroundColor: theme.palette.background.default,
    },
    title: {
        display: 'flex',
        padding: '8px',
        alignItems: 'center',
        paddingBottom: '10px',
        '& .MuiTypography-displayBlock': {
            display: 'flex',
            textAlign: 'center',
            fontSize: '1.5rem',
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
        alignItems: 'stretch',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'space-between',
        justifyContent: 'space-evenly',
        fontWeight: 500,
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    info: {
        display: 'flex',
        width: 'max-content',
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            transition: '0.2s',
            borderRadius: '1.75rem',
            textDecoration: 'none',
        },
        '& .MuiButton-label': {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            padding: theme.spacing(0.5),
        }
    },
    types: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    starContainer: {
        display: 'flex',
        flex: '0 0 auto',
        width: '100%',
        height: '100%',
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        },
    },
    star: {
        color: theme.palette.warning.main,
    },
}));

export default function PokeCard(props) {
    const classes = useStyles();
    const { avatarUrl, name, description, imageUrl, types } = props;
    return (
        <Card className={classes.root}>
            <CardContent className={classes.header}>
                <CardHeader
                    className={classes.title}
                    title={name}
                    avatar={<Avatar className={classes.avatar} src={avatarUrl} />}
                    action={
                        <IconButton className={classes.starContainer} aria-label='favorites'>
                            <Star className={classes.star} />
                        </IconButton>
                    }
                />
                <CardActionArea className={classes.content} disableRipple>
                    <CardMedia
                        className={classes.image}
                        component='img'
                        image={imageUrl}
                    />
                </CardActionArea>
                <Typography className={classes.text} component='p'>
                    {description}
                </Typography>
            </CardContent>
            <CardActions className={classes.btnContainer} component='div'>
                <Box component='div'>
                    <Button
                        className={classes.info}
                        startIcon={<Info />}
                    >
                        See More
                    </Button>
                </Box>
                <Box className={classes.types} component='div'>
                    {types.length > 0 && types.map(t => (
                        <TypeBadge key={t} text={t} color={getTypeStyle(t)} />
                    ))}
                </Box>
            </CardActions>
        </Card>
    );
}