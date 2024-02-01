import React from 'react';

const AssignmentCard = ({ assignments }) => {
  return (
    <div className="flex flex-wrap ">
      {Object.values(assignments).map((assignment) => (
        <div key={assignment.number} className="mb-4  p-8 rounded-md bg-secondary text-secondary w-full md:w-1/2 lg:w-1/2 xl:w-1/3 gap-2 flex flex-col transition ">
          <h3 className="text-xl font-bold text-primary border-b-2 border-gray-550 pb-2">{`Assignment ${assignment.number}`}</h3>
          
          <p className="text-secondary">{`Unit: ${assignment.number}`}</p>
          <p className="text-secondary">{`Given on: ${assignment.givenOn}`}</p>
          <p className="text-secondary">{`Submission date: ${assignment.submission}`}</p>
          <div className='flex md:flex-col flex-row  gap-2 justify-between'>

          <button className=" text-secondary md:px-4 py-2 px-10 rounded md:w-full w-1/2 bg-secondary border-2 border-dark  mt-2 text-secondary hover:text-primary transition hover:shadow-[5px_5px_0px_0px_rgba(102,252,241)]">
            <a href={`http://65.0.14.141:4000/api/view/${assignment.subjectPrefix}/${assignment.number}`} target="_blank" rel="noopener noreferrer">
              View 
            </a>
          </button>
          <button className=" text-secondary md:px-4 md:py-2 px-10 rounded md:w-full w-1/2 bg-secondary border-2 border-dark  mt-2 text-secondary hover:text-primary transition hover:shadow-[5px_5px_0px_0px_rgba(102,252,241)]">
            <a href={`http://65.0.14.141:4000/api/viewmd/${assignment.subjectPrefix}/${assignment.number}`} target="_blank" rel="noopener noreferrer">
              Edit 
            </a>
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssignmentCard;
