import { useState } from 'react';

const useSubjects = () => {
  const subjectsData = [
    { name: "NLP", key: "nlp", categories: [{ name: 'Assignments', href: '/' }, { name: 'Experiments', href: '/' }, { name: 'QuestionBank', href: '/' }] },
    { name: "BIS", key: "bis", categories: [{ name: 'Assignments', href: '/' }, { name: 'Experiments', href: '/' }, { name: 'QuestionBank', href: '/' }] },
    { name: "QTCV", key: "qtcv", categories: [{ name: 'Assignments', href: '/' }, { name: 'Experiments', href: '/' }, { name: 'QuestionBank', href: '/' }] },
    { name: "DT", key: "dt", categories: [{ name: 'Assignments', href: '/' }, { name: 'Experiments', href: '/' }, { name: 'QuestionBank', href: '/' }] },
    { name: "CNS", key: "cns", categories: [{ name: 'Assignments', href: '/' }, { name: 'Experiments', href: '/' }, { name: 'QuestionBank', href: '/' }] }
  ];

  const [subjects, setSubjects] = useState(subjectsData);


  return { subjects, setSubjects };
};

export default useSubjects;