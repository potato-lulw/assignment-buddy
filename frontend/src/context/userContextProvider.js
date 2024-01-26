// UserContext.js
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({
 userName: "",
 setUserName: () => { }
});

export const UserContextProvider = ({ children }) => {
 const [userName, setUserName] = useState(() => {
    const storedUserName = localStorage.getItem('userName');
    return storedUserName !== null ? storedUserName : '';
 });

 useEffect(() => {
    localStorage.setItem('userName', userName);
 }, [userName]);

 return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
 );
};