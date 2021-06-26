import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { Layout } from './components/index';
import muiTheme from './theme/muiTheme';

export default function App() {
    return (
        <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <Layout />
        </ThemeProvider>
    );
}