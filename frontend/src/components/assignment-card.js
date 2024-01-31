import React from 'react';

const AssignmentCard = ({ assignments }) => {
  return (
    <div className="flex flex-wrap ">
      {Object.values(assignments).map((assignment) => (
        <div key={assignment.number} className="mb-4  p-8 rounded-md bg-secondary text-secondary w-full md:w-1/2 lg:w-1/3 xl:w-1/4 gap-2 flex flex-col">
          <h3 className="text-xl font-bold text-primary border-b-2 border-gray-550 pb-2">{`Assignment ${assignment.number}`}</h3>
          
          <p className="text-secondary">{`Unit: ${assignment.number}`}</p>
          <p className="text-secondary">{`Given on: ${assignment.givenOn}`}</p>
          <p className="text-secondary">{`Submission date: ${assignment.submission}`}</p>
          <button className="bg-primary text-secondary px-4 py-2 rounded">
            <a href={`http://65.0.14.141:4000/api/view/${assignment.subjectPrefix}/${assignment.number}`} target="_blank" rel="noopener noreferrer">
              View Assignment
            </a>
          </button>
        </div>
      ))}
    </div>
  );
};

export default AssignmentCard;
