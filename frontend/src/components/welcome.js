import React from 'react';

const Welcome = ({ userName }) => {
  return (
    <div className="text-center p-4 padding-container flex flex-col align-middle justify-center md:mt-[10%] mt-8 gap-2">
      <h1 className="md:text-8xl text-6xl font-bold mb-3">Hi <span className='text-blue-500'>{userName}!</span></h1>
      <div className='flex flex-col '>
        <p className="text-secondary font-medium italic md:text-base text-sm">
          Struggling with <strong className="text-lg md:text-base">assignments</strong> when the submission is just around the corner?
        </p>
        <p className="text-secondary font-medium italic md:text-base text-sm">
          Feeling lost about upcoming <span className="text-blue-500 text-lg md:text-base">lab experiments</span> or unsure about what to study for the upcoming <span className="text-blue-500 text-lg md:text-base">exam</span>?
        </p>
        <p className="text-primary md:text-base text-sm">
          Fret not! At <span className="text-accent">BIAS</span>, we've got your back!
        </p>
      </div>

      <p className="text-sm mt-2">Please select a subject and category to get started.</p>
    </div>
  );
};

export default Welcome;
