import React from 'react';
import { Avatar, Card, CardActions, CardActionArea, CardContent, CardMedia, CardHeader, Typography, IconButton, Divider } from '@material-ui/core';
import { Error, RotateLeft } from '@material-ui/icons';
import spinner from '../../../images/spinner.gif';
import useStyles from './styles';

export default function LoadingCard() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent className={classes.header}>
                <CardHeader
                    className={classes.title}
                    title='Loading'
                    avatar={
                        <Avatar className={classes.avatar}>
                            <RotateLeft className={classes.icon} />
                        </Avatar>
                    }
                    action={
                        <IconButton className={classes.errorContainer} disableRipple>
                            <Error className={classes.error} />
                        </IconButton>
                    }
                />
                <CardActionArea className={classes.content} disableRipple>
                    <CardMedia
                        className={classes.spinner}
                        component='img'
                        src={spinner}
                        alt='Loading...'
                    />
                </CardActionArea>
            </CardContent>
            <CardActions className={classes.btnContainer} component='div'>
                <Divider className={classes.divider} />
                <Typography className={classes.text} component='p'>
                    Please wait while we load the Pokémon! 😀
                </Typography>
                <Divider className={classes.divider} />
            </CardActions>
        </Card>
    );
}