import React from 'react';
import { makeStyles, Avatar, Button, Card, CardMedia, CardActions, CardContent, CardActionArea, CardHeader, Typography, IconButton } from '@material-ui/core';
import { Share, ShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    content: {
        display: 'block',
        flex: '1 0 auto',
    },
    btn: {
        display: 'flex',
    },
    media: {
        height: '350px',
        objectFit: 'contain',
    },
    text: {
        display: 'flex',
        marginTop: '10px'
    }
});

const CoffeeCard = (props) => {
    const classes = useStyles();
    const { avatarUrl, title, subtitle, description, imageUrl } = props;
    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={<Avatar src={avatarUrl} />}
                action={
                    <IconButton aria-label='settings'>
                        <Share />
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
            />
            <CardActionArea className={classes.content}>
                <CardMedia className={classes.media} component='img' image={imageUrl} />
            </CardActionArea>
            <CardContent component='div'>
                <Typography className={classes.text} variant='body2' component='p'>
                    {description}
                </Typography>
            </CardContent>
            <CardActions className={classes.btn}>
                <Button
                    size='small'
                    startIcon={<ShoppingCart />}
                >
                    BUY NOW
                </Button>
            </CardActions>
        </Card>
    );
}

export default CoffeeCard;
