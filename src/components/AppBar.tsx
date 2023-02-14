import React, { useContext } from 'react'
import UserContext from '../UserContext';
import '../styles/app.css'
import { ThemeContext } from '../ThemeContextProvider';

const AppBar = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext)
    const { user, login, logout } = useContext(UserContext);
    const isLoggedIn = user ? true : false;

    return (
        <div className={darkMode ? 'dark appBar' : 'appBar'}>
            {
                isLoggedIn ? (
                    <>
                        <h3>{user!.name}</h3>
                        <button onClick={logout}>Log out</button>
                    </>
                ) : (
                    <button onClick={() => login({ name: 'Zoli', age: 20 })}>Log in</button>
                )
            }
            <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Light mode' : 'Dark mode'}</button>
        </div>
    )
}

export default AppBar;