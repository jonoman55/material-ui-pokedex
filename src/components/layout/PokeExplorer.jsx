import React, { useContext } from 'react';
import { makeStyles, InputAdornment, Box, Card, CardContent, CardHeader, CardActions } from '@material-ui/core';
import { Clear, Refresh, Search } from '@material-ui/icons';
import {
    MuiSearch as SearchBar,
    MuiButton as ClearButton,
    MuiSelect as GenSelect,
    MuiButton as RefreshButton,
    Favorites
} from '../';
import AppContext from '../../contexts/AppContext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'center',
        width: '100%',
    },
    card: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.light,
        border: 'solid',
        borderWidth: '1px',
        borderRadius: '1rem',
        borderColor: theme.palette.primary.main,
    },
    boxItem: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(0.5),
        margin: theme.spacing(0.5),
    },
    favsItem: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },
    favIco: {
        color: theme.palette.warning.main,
    },
    title: {
        color: theme.palette.primary.contrastText,
    },
    searchIcon: {
        color: theme.palette.primary.contrastText,
    }
}));

// TODO : Finish implementing the favorites list
// TODO : Add MuiSelects for filtering Pokemon by type, name and id
// TODO : Figure out how to make the search faster
// TODO : Figure out how to make the clear function faster
export default function PokeExplorer({ onStartSearch, onSearchClick, onGenSelect, onRefreshClick }) {
    const { filter, genValue, genList } = useContext(AppContext);
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    <CardHeader className={classes.title} title='PokéExplorer' />
                </CardContent>
                <CardActions>
                    <Box component='div'>
                        <Box className={classes.favsItem} component='div'>
                            <Favorites />
                        </Box>
                        <Box className={classes.boxItem} component='div'>
                            <GenSelect
                                name='GenSelect'
                                label='Select Generation'
                                value={genValue}
                                options={genList}
                                onChange={onGenSelect}
                            />
                            <RefreshButton
                                text='Refresh'
                                variant='contained'
                                color='primary'
                                onClick={onRefreshClick}
                                startIcon={<Refresh />}
                            />
                        </Box>
                        <Box className={classes.boxItem} component='div'>
                            <SearchBar
                                placeholder='Search Pokémon'
                                label={filter ? 'Search Pokémon' : ''}
                                value={filter}
                                variant='outlined'
                                autoComplete='off'
                                type='text'
                                onChange={(event) => onStartSearch(event.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <Search className={classes.searchIcon} />
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <ClearButton
                                text='Clear'
                                variant='contained'
                                color='primary'
                                onClick={onSearchClick}
                                startIcon={<Clear />}
                            />
                        </Box>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    );
}