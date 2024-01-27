// SubjectContext.js
import React, { createContext, useState, useContext } from 'react';

const SubjectContext = createContext();

export const SubjectContextProvider = ({ children }) => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const updateSelectedSubject = (subjectKey) => {
    setSelectedSubject(subjectKey);
  };

  return (
    <SubjectContext.Provider value={{ selectedSubject, updateSelectedSubject }}>
      {children}
    </SubjectContext.Provider>
  );
};

export const useSubjectContext = () => {
  return useContext(SubjectContext);
};
