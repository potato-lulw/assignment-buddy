import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContextProvider } from './context/userContextProvider';
import { SubjectContextProvider } from './context/subjectContextProvider';
import { CategoryProvider } from './context/categoryContextProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <SubjectContextProvider>
        <CategoryProvider>
          <App />
        </CategoryProvider>
      </SubjectContextProvider>
    </UserContextProvider>



  </React.StrictMode>
);


