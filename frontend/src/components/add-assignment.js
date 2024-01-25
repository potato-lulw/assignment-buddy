import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import useSubjects from '../hooks/useSubjects';

const AddAssignment = () => {

    const {subjects, setSubjects} = useSubjects();
    const [droppedFiles, setDroppedFiles] = useState([]);
    const onDrop = useCallback((acceptedFiles) => {
        setDroppedFiles(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: true });

    return (
        <form className='flex flex-col padding-container justify-center align-middle gap-4 items-center mt-4 w-[80%] mx-auto'>
            <label>Subject</label>
            <select className='w-[80%] bg-primary px-8 py-4 rounded-lg'>
                {
                    subjects.map(subject => (
                        <option value={subject.name} key={subject.key}>{subject.name}</option>
                    ))
                }
                
            </select>
            <label className='text-primary '>Type it out</label>
            <textarea className='w-[80%] h-[200px] bg-primary text-secondary border-dark px-8 py-4 rounded-lg' placeholder='1) What is the meaning of life?'></textarea>

            <label className='text-primary'>Drop 'Em All!</label>
            <div
                {...getRootProps()}
                className={`w-[80%] h-[200px] bg-primary rounded-lg text-secondary  flex justify-center items-center cursor-pointer border-dashed border-2 border-gray-650 ${isDragActive ? 'active' : ''}`}
            >
                <input {...getInputProps()} />
                {droppedFiles.length > 0 ? (
                    <div>
                        {droppedFiles.map((file) => (
                            <div key={file.name}>{file.name}</div>
                        ))}
                    </div>
                ) : (
                    isDragActive ? (
                        <p>Drop the files here ...</p>
                    ) : (
                        <div className='text-primary text-center p-8'>Drop files (.pdf)</div>
                    )
                )}
            </div>
            <button className='w-[80%] border-gray-650 border-2 p-4 rounded-lg mb-4'>SEND ITT</button>
        </form>
    );
};

export default AddAssignment;
