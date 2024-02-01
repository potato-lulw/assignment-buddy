import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Welcome = ({ userName }) => {
  return (
    <div className="text-center p-4 padding-container flex flex-col align-middle justify-center md:mt-[10%] mt-8 gap-2">
      <h1 className="md:text-8xl text-6xl font-bold mb-3">Hi <span className='text-tertiary'>{userName}!</span></h1>

      <p className="text-sm mt-2 text-secondary">Please select a subject and category to get started.</p>
      <p>OR</p>
      <Link to={'/add-assignment'} className='justify-center flex'>
      <button className="group flex justify-center bg-primary border border-dark px-4 py-2 mt-2 text-secondary hover:text-primary transition w-[80%] self-center hover:shadow-[5px_5px_0px_0px_rgba(102,252,241)]">
        Generate Assignments 
        <FaAngleRight className='self-center group-hover:translate-x-[5px] transition' />
      </button>
      </Link>
      
    </div>
  );
};

export default Welcome;
