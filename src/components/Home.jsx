import React from 'react';
import { HomeCard, Header, ApiCredit, Footer } from './index';

// TODO : Remove this component if not needed
const Home = ({ theme, handleThemeChange }) => {
    return (
        <>
            <Header />
            <ApiCredit theme={theme} handleThemeChange={handleThemeChange} />
            <div style={{ marginBottom: '35px', marginTop: '35px', marginLeft: '15px', marginRight: '15px', padding: '15px' }}>
                <HomeCard />
            </div>
            <Footer />
        </>
    );
};

export default Home;