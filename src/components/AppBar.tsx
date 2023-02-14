import React, { useContext } from 'react'
import UserContext from '../UserContext';
import '../styles/app.css'

const AppBar = () => {
    const { user, login, logout } = useContext(UserContext);
    const isLoggedIn = user ? true : false;

    return (
        <div className="appBar">
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
        </div>
    )
}

export default AppBar;