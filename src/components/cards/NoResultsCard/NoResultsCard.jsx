import React from 'react';
import { Avatar, Card, CardActions, CardActionArea, CardContent, CardMedia, CardHeader, Divider, Typography, IconButton } from '@material-ui/core';
import { Clear, Error, PageviewOutlined } from '@material-ui/icons';
import { MuiButton as ClearButton } from '../../';
import pokeball from '../../../images/pokeball.gif';
import useStyles from './styles';

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
                            <PageviewOutlined />
                        </Avatar>
                    }
                    action={
                        <IconButton className={classes.errorContainer} disableRipple>
                            <Error className={classes.errorIcon} />
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
