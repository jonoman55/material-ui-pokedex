import React, { useContext } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { history } from './history/history';
import { Pokedex, Pokemon } from './pages';
import { light, dark } from './theme/muiTheme';
import ThemeContext from './contexts/ThemeContext';
import AppState from './contexts/AppState';
import './styles/App.css'

// TODO : Go through project and move large makeStyles to separate styles.js files
// TODO : Finish implementing ThemeContext
// TODO : Finish implementing PokedexContext
export default function App() {
    const { theme } = useContext(ThemeContext);
    return (
        <ThemeProvider theme={createTheme(theme ? light : dark)}>
            <CssBaseline />
            <AppState>
                <Router history={history} forceRefresh={true}>
                    <Switch>
                        <Route exact path='/' component={Pokedex} />
                        <Route exact path='/:id' component={Pokemon} />
                    </Switch>
                </Router>
            </AppState>
        </ThemeProvider>
    );
};