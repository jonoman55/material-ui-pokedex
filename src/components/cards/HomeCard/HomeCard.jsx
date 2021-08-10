import React, { useContext } from 'react';
import { Avatar, Box, Card, CardActions, CardActionArea, CardContent, CardMedia, CardHeader, Divider, Typography, IconButton } from '@material-ui/core';
import { Language, VideogameAsset } from '@material-ui/icons';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { MuiButton as GoToButton } from '../../';
import pokemon from '../../../images/pokemon2.png';
import useStyles from './styles';

export default function HomeCard() {
    const { theme } = useContext(ThemeContext);
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
                            alt='Not Found'
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
