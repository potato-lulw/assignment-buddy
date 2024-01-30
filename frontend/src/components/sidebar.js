// sidebar.js

import React, { useState } from 'react';
// Import statements...
import { FaAngleDown } from "react-icons/fa6";

import useSubjects from '../hooks/useSubjects';
import { useSubjectContext } from '../context/subjectContextProvider';
import { useCategoryContext } from '../context/categoryContextProvider';

const Sidebar = ({onCategoryClick}) => {
  const { subjects } = useSubjects();
  const { selectedSubject, updateSelectedSubject } = useSubjectContext();
  const { selectedCategory, updateSelectedCategory } = useCategoryContext();
  const [expandedSubject, setExpandedSubject] = useState(null);

  console.log(selectedSubject, selectedCategory)

  const handleSubjectClick = (subjectKey) => {
    setExpandedSubject((prev) => (prev === subjectKey ? null : subjectKey));
    updateSelectedSubject(subjectKey);
  };

  const handleCategoryClick = (categoryType) => {
    updateSelectedCategory(categoryType);
    onCategoryClick();

  };

  return (
    <>
      <div className='flex flex-col p-10 bg-primary rounded-md  min-w-[250px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <ul className='flex flex-col w-full gap-4'>
          {subjects.map((subject) => (
            <li
              className={`w-full bg-secondary px-6 py-4 flex flex-col border border-dark gap-2 align-middle justify-center cursor-pointer transition rounded-md font-medium shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${
                selectedSubject === subject.key ? 'bg-selected' : ''
              }`}
              key={subject.key}
              onClick={() => handleSubjectClick(subject.key)}
            >
              <div className='flex gap-2 z-0'>
                {subject.name}
                <FaAngleDown className={`self-center ${expandedSubject === subject.key ? 'rotate-180 transition' : 'rotate-0 transition'}`} />
              </div>
              {expandedSubject === subject.key && (
                <div className='flex flex-col gap-2 text-center text-sm'>
                  {subject.categories.map((category, index) => (
                    <div
                      key={index}
                      className={`hover:bg-primary px-2 py-1 rounded-sm ${
                        selectedCategory === category.name ? 'bg-selected' : ''
                      }`}
                      onClick={() => handleCategoryClick(category.name)}
                    >
                      {category.name}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
