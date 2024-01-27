import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import { FaAngleRight } from "react-icons/fa6";
import Cards from '../components/cards';

import { useSubjectContext } from '../context/subjectContextProvider';
import { useCategoryContext } from '../context/categoryContextProvider';

const Home = () => {
  const [hidden, setHidden] = useState(true);
  const {selectedSubject} = useSubjectContext();
  const {selectedCategory} = useCategoryContext();

  const toggleSidebar = () => {
    setHidden(!hidden);
  };

  return (
    <div className="home flex md:flex-row flex-col flex-wrap">
      {/* Button for toggling sidebar on small screens */}
      <button
        className="md:hidden p-2 bg-blue-500 text-white flex align-middle min-w-0 items-center justify-center gap-2 w-full"
        onClick={toggleSidebar}
      >
        Subjects <FaAngleRight className={`${hidden ? 'rotate-0 transition': "rotate-90 transition"} `}/>
      </button>

      <div className={`w-full md:w-1/4 md:mx-4 mt-4 md:block ${hidden ? 'hidden' : ''}`}>
        <Sidebar />
      </div>

      <div className="w-[100%] flex-1 overflow-hidden ">
        <Cards selectedSubject = {selectedSubject} selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default Home;
