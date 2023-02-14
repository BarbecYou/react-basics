import React from 'react'

export interface User {
    name: string;
    age: number;
}
export interface UserContextValue {
    user: User | null,
    login: () => void,
    logout: () => void
}
const UserContext = React.createContext<UserContextValue>(null as any);
export default UserContext;