import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeState = (props) => {
    const [theme, setTheme] = useState(true);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeState;