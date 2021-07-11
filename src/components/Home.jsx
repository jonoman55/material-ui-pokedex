import React from 'react';
import { HomeCard, Header, ApiCredit, Footer } from './index';

// TODO : Finish implementing this - Idea! Use HomeCard, add explore button to it and have it go to Pokedex
const Home = (props) => {

    return (
        <>
            <Header />
            <ApiCredit />
            <HomeCard props={props} />
            <Footer />
        </>
    );
}

export default Home;