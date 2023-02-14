import React, { PropsWithChildren, ReactNode, useState } from 'react'
import UserContext, { User, UserContextValue } from './UserContext'

const UserContextProvider = ({ children }: PropsWithChildren) => {

    const [user, setUser] = useState<User | null>(null);

    const UserContextValue: UserContextValue = {
        user,
        login: (user: User) => {
            setUser(user);
        },
        logout: () => {
            setUser(null);
        }
    }

    return (
        <UserContext.Provider value={UserContextValue} >
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider

