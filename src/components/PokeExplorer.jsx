// eslint-disable-next-line 
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line 
import { makeStyles, Grid, Paper, Toolbar, InputAdornment, IconButton, Tooltip } from '@material-ui/core';
// eslint-disable-next-line 
import { Clear, Star, Search, Refresh, ArrowDropDown } from '@material-ui/icons';
import { PokeSearch, ClearButton, GenSelect } from './index';
import generations from '../constants/generations';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flex: 'auto',
        flexGrow: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '15px',
        padding: theme.spacing(0.5),
        borderRadius: '10px',
        backgroundColor: theme.palette.background.default,
        '& .MuiGrid-container.MuiGrid-spacing-xs-2': {
            display: 'flex',
            width: '100%',
            margin: 'auto',
        },
    },
    gird: {
        display: 'flex',
        width: '100%',
    },
    genSelect: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    fav: {
        color: theme.palette.warning.main,
    },
    searchBar: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
    },
    searchInput: {
        width: '100%'
    },
    refresh: {
        display: 'flex',
    },
}));

// TODO : Finish implementing the gen selector and touch ups to css and layout in general
// TODO : Add a favorites section or a sidebar that contains the pokemon favorites list
export default function PokeExplorer({ input, onChange, onClick }) {
    const classes = useStyles();
    const [gen, setGen] = useState(0);

    // eslint-disable-next-line 
    const handleChange = e => {
        let { value } = e.target;
        setGen(value);
    };

    return (
        <Paper className={classes.root} position='static' elevation={2}>
            <Toolbar disableGutters>
                <Grid className={classes.grid} container spacing={2} xs sm md>
                    <Grid className={classes.genSelect} container item spacing={2}>
                        <Grid item>
                            <GenSelect
                                name='Select Gen'
                                value={gen ? gen : 0}
                                options={generations}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid className={classes.refresh} item>
                            <Tooltip title="Refresh">
                                <IconButton aria-label='refresh'>
                                    <Refresh />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Star className={classes.fav} />
                    </Grid>
                    <Grid className={classes.searchBar} container item spacing={2}>
                        <Grid item>
                            <PokeSearch
                                placeholder='Search Pokémon'
                                label={input ? 'Search Pokémon' : ''}
                                value={input}
                                variant='outlined'
                                onChange={(e) => onChange(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Search />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <ClearButton
                                text='Clear'
                                variant='contained'
                                color='primary'
                                onClick={onClick}
                                startIcon={<Clear />}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </Paper>
    );
}