import React from 'react';

const AssignmentCard = ({ assignments }) => {
  return (
    <div className="flex flex-wrap ">
      {Object.values(assignments).map((assignment) => (
        <div key={assignment.number} className="mb-4  p-8 rounded-md bg-primary text-secondary w-full md:w-1/2 lg:w-1/3 xl:w-1/4 gap-2 flex flex-col">
          <h3 className="text-xl font-bold text-primary">{`Assignment: ${assignment.number}`}</h3>
          <p className="text-primary">{`Unit: ${assignment.subjectPrefix}`}</p>
          <p className="text-primary">{`Given on: ${assignment.givenOn}`}</p>
          <p className="text-primary">{`Submission date: ${assignment.submission}`}</p>
          <button className="bg-secondary text-primary px-4 py-2 rounded">
            <a href={assignment.path} target="_blank" rel="noopener noreferrer">
              View Assignment
            </a>
          </button>
        </div>
      ))}
    </div>
  );
};

export default AssignmentCard;
