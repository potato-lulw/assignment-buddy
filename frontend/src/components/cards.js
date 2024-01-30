import React, { useState, useEffect } from 'react';
import QuestionbankCard from './questionbank-card';
import ExperimentCard from './experiment-card';
import AssignmentCard from './assignment-card';

const Cards = ({ selectedSubject, selectedCategory }) => {
  const [assignments, setAssignments] = useState({});
  const [experiments, setExperiments] = useState({});
  const [questionbanks, setQuestionbanks] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedSubject !== null) {
          const response = await fetch(`http://65.0.14.141:4000/api/details/${selectedSubject}`);
          const data = await response.json();

          if (data.success) {
            setAssignments(data.data.assignments);
            setExperiments(data.data.experiments);
            setQuestionbanks(data.data.questionbanks);
            setLoading(false);
          } else {
            console.error('Failed to fetch data');
          }
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedSubject]); // Run the effect only once when the component mounts

  const renderContent = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    switch (selectedCategory) {
      case 'Assignments':
        return <AssignmentCard assignments={assignments} />;
      case 'Experiments':
        return <ExperimentCard experiments={experiments} />;
      case 'QuestionBank':
        return <QuestionbankCard questionbanks={questionbanks} />;
      default:
        return <div>Select a category type from the sidebar</div>;
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{`${selectedSubject.toUpperCase()}`}</h2>
      {renderContent()}
    </div>
  );
};

export default Cards;
