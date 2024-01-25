import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const subjects = [
    { name: "NLP", key: "nlp", assignments: [{ name: 'Assignment 1', href: '/' }, { name: 'Assignment 2', href: '/' }, { name: 'Assignment 3', href: '/' }] },
    { name: "BIS", key: "bis", assignments: [{ name: 'Assignment 1', href: '/' }, { name: 'Assignment 2', href: '/' }, { name: 'Assignment 3', href: '/' }] },
    { name: "QTCV", key: "qtcv", assignments: [{ name: 'Assignment 1', href: '/' }, { name: 'Assignment 2', href: '/' }, { name: 'Assignment 3', href: '/' }] },
    { name: "DT", key: "DT", assignments: [{ name: 'Assignment 1', href: '/' }, { name: 'Assignment 2', href: '/' }, { name: 'Assignment 3', href: '/' }] },
    { name: "CNS", key: "cns", assignments: [{ name: 'Assignment 1', href: '/' }, { name: 'Assignment 2', href: '/' }, { name: 'Assignment 3', href: '/' }] }
  ];

  const [expandedSubject, setExpandedSubject] = useState(null);

  return (
    <>
      <div className='flex flex-col p-10 bg-primary rounded-md  min-w-[250px]'>
        <ul className='flex flex-col w-full gap-4'>
          {subjects.map((subject) => (
            <li
              className='w-full bg-secondary px-6 py-4 flex flex-col border border-dark gap-2 align-middle justify-center cursor-pointer transition rounded-md font-medium'
              key={subject.key}
              onClick={() => setExpandedSubject((prev) => (prev === subject.key ? null : subject.key))}
            >
              <div className='flex gap-2'>
                {subject.name}
                <FaAngleDown className={`self-center ${expandedSubject === subject.key ? 'rotate-180 transition' : 'rotate-0 transition'}`} />
              </div>
              {expandedSubject === subject.key && (
                <div className='flex flex-col gap-2 text-center text-sm'>
                  {subject.assignments.map((assignment, index) => (
                    <div key={index} className='hover:bg-primary px-2 py-1 rounded-sm'>
                      <Link to={assignment.href} />
                      {assignment.name}
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
