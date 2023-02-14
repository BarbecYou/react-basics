import React, { useContext } from 'react'
import UserContext from '../UserContext';
import '../styles/app.css'

const AppBar = () => {
    const user = useContext(UserContext);
    const isLoggedIn = user ? true : false;

    return (
        <div className="appBar">
            {
                isLoggedIn ? (
                    <>
                        <h3>{user!.name}</h3>
                        <button>Log out</button>
                    </>
                ) : (
                    <button>Log in</button>
                )
            }
        </div>
    )
}

export default AppBar;