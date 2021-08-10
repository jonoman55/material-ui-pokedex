import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { PokedexContext } from './contexts/PokedexContext';
import { ThemeContext } from './contexts/ThemeContext';
import { Pokedex, Pokemon } from './pages';
import { light, dark } from './theme/muiTheme';
import './styles/App.css'

// TODO : Go through project and move large makeStyles to separate styles.js files
// TODO : Finish implementing ThemeContext
// TODO : Finish implementing PokedexContext
const history = createBrowserHistory();
export default function App() {
    const [theme, setTheme] = useState(true);
    const [genNumber, setGenNumber] = useState(8);
    const [genValue, setGenValue] = useState('');
    const [genList, setGenList] = useState([]);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemeProvider theme={createTheme(theme ? light : dark)}>
                <CssBaseline />
                <PokedexContext.Provider value={{ genNumber, setGenNumber, genValue, setGenValue, genList, setGenList }}>
                    <Router history={history} forceRefresh={true}>
                        <Switch>
                            <Route exact path='/'>
                                <Pokedex history={history} />
                            </Route>
                            <Route exact path='/:id' component={Pokemon} />
                        </Switch>
                    </Router>
                </PokedexContext.Provider>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};