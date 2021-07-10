import React from 'react';
import { Header, ApiCredit, Pokedex, Footer, ScrollToTop } from './index';

// TODO : Finish implementing this - Idea! Use HomeCard, add explore button to it and have it go to Pokedex
const Home = (props) => {
    return (
        <>
            <Header />
            <ApiCredit />
            <Pokedex props={props} />
            <ScrollToTop showBelow={250} />
            <Footer />
        </>
    );
}

export default Home;