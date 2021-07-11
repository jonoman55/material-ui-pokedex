import React from 'react';
import { HomeCard, Header, ApiCredit, Footer } from './index';

// TODO : Add styling to here
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