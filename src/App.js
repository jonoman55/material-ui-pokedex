import React from 'react';
import { Grid, CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
    return (
        <Grid container direction='column'>
            <Grid item>
                <Header />
            </Grid>
            <Grid item container>
                <Grid item xs={2} sm={2} />
                <Grid item xs={12} sm={12}>
                    <Content />
                </Grid>
                <Grid xs={2} sm={2} />
            </Grid>
            <Grid item>
                <Footer />
            </Grid>
            <CssBaseline />
        </Grid>
    );
}

export default App;