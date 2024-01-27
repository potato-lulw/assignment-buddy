import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [position, setPosition] = useState(-100);

    useEffect(() => {
        let id = setInterval(() => {
            setPosition((prevPosition) => prevPosition >= 100 ? -100 : prevPosition + 10);
        }, 50); // adjust speed here

        return () => clearInterval(id);
    }, []);

    return (
        <div className="relative w-full h-2 overflow-hidden">
            <div style={{ backgroundColor: '#3B82F6', position: 'absolute', top: 0, left: `${position}%`, width: '100%', height: '100%', borderRadius: "50%"}}></div>
        </div>
    );
};

export default ProgressBar