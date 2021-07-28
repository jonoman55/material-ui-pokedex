import React, { useState } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { Pokedex, Pokemon } from './components/index';
import { light, dark } from './theme/muiTheme';
import './styles/App.css'

// TODO : Remove browser router and create popup modals for each pokemon instead
const history = createBrowserHistory();
export default function App() {
    const [theme, setTheme] = useState(true);
    const appliedTheme = createTheme(theme ? light : dark);
    return (
        <ThemeProvider theme={appliedTheme}>
            <CssBaseline />
            <Router history={history} forceRefresh={true}>
                <Switch>
                    <Route exact path='/'><Pokedex theme={theme} handleThemeChange={() => setTheme(!theme)} history={history} /></Route>
                    <Route exact path='/:id' component={Pokemon} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};