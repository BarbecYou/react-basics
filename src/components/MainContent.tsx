import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContextProvider';

const MainContent = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <p>This is the main content</p>
        </div >
    )
}
export default MainContent;