import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar';
import { FaAngleRight } from "react-icons/fa6";
import Cards from '../components/cards';
import Welcome from '../components/welcome';

import { useSubjectContext } from '../context/subjectContextProvider';
import { useCategoryContext } from '../context/categoryContextProvider';

const Home = () => {
  const [hidden, setHidden] = useState(true);
  const { selectedSubject } = useSubjectContext();
  const { selectedCategory } = useCategoryContext();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    setUserName(storedUserName);
  }, []);

  const toggleSidebar = () => {
    setHidden(!hidden);
  };

  const handleCategoryClick = () => {
    // Hide the sidebar when a category is clicked
    setHidden(true);
  };

  return (
    <div className="home flex md:flex-row flex-col flex-wrap md:padding-container">
      {/* Button for toggling sidebar on small screens */}
      <button
        className="md:hidden p-2 bg-secondary  text-primary flex align-middle min-w-0 items-center justify-center gap-2 w-full"
        onClick={toggleSidebar}
      >
        Subjects <FaAngleRight className={`${hidden ? 'rotate-0 transition' : 'rotate-90 transition'} `} />
      </button>

      <div className={`w-full md:w-1/4 md:mx-4 mt-4 md:block ${hidden ? 'hidden' : ''}`}>
        <Sidebar onCategoryClick={handleCategoryClick} />
      </div>

      <div className="w-[100%] flex-1 overflow-hidden md:ml-2 ">
        {(selectedSubject === null) ? (
          <Welcome userName={userName} />
        ) : (
          <Cards selectedSubject={selectedSubject} selectedCategory={selectedCategory} />
        )}
      </div>
    </div>
  );
};

export default Home;
