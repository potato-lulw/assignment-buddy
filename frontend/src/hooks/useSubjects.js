import { useState } from 'react';

const useSubjects = () => {
  const subjectsData = [
    { name: "NLP", key: "nlp", assignments: [{ name: 'Assignment 1', href: '/' }, { name: 'Assignment 2', href: '/' }, { name: 'Assignment 3', href: '/' }] },
    { name: "BIS", key: "bis", assignments: [{ name: 'Assignment 1', href: '/' }, { name: 'Assignment 2', href: '/' }, { name: 'Assignment 3', href: '/' }] },
    { name: "QTCV", key: "qtcv", assignments: [{ name: 'Assignment 1', href: '/' }, { name: 'Assignment 2', href: '/' }, { name: 'Assignment 3', href: '/' }] },
    { name: "DT", key: "DT", assignments: [{ name: 'Assignment 1', href: '/' }, { name: 'Assignment 2', href: '/' }, { name: 'Assignment 3', href: '/' }] },
    { name: "CNS", key: "cns", assignments: [{ name: 'Assignment 1', href: '/' }, { name: 'Assignment 2', href: '/' }, { name: 'Assignment 3', href: '/' }] }
  ];

  const [subjects, setSubjects] = useState(subjectsData);

  // You can add functions to update or modify the data if needed

  return { subjects, setSubjects };
};

export default useSubjects;