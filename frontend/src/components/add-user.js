// AddUser.jsx
import React, { useState, useContext} from 'react';
import { UserContext } from '../context/userContextProvider';

import { useNavigate } from 'react-router-dom';


const AddUser = () => {
  const { setUserName } = useContext(UserContext);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const handleAddUser = () => {
    if (name.trim() !== '') {
      setUserName(name);
      
      setName('');
      navigate('/home')
    }
  };

  return (
    <div className='flex flex-col min-h-[80vh] justify-center align-middle'>
      
      <form className='flex-col flex w-[40%] self-center gap-4'>
      <label className='text-left'>Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        className='bg-primary px-8 py-4 rounded-xl'
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddUser} className='bg-secondary border-2 border-gray-950 p-2 rounded-md'>Enter</button>
      </form>
      
    </div>
  );
};

export default AddUser;