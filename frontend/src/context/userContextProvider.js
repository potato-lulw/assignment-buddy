// UserContext.js
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({
    userName: "",
    setUserName: () => {}
});

export const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    localStorage.setItem('userName', userName);
  }, [userName]);

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName') ;
    setUserName((prevUserName) => storedUserName || prevUserName);
  }, []);

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};
