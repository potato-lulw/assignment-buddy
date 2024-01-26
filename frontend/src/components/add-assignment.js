import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import useSubjects from '../hooks/useSubjects';
import useApiRequest from '../hooks/useApiRequest';




const AddAssignment = () => {
    const { subjects } = useSubjects();
    const [subject, setSubject] = useState('nlp');
    const [assignmentNumber, setAssignmentNumber] = useState('');
    const [questions, setQuestions] = useState([]);
    const [droppedFiles, setDroppedFiles] = useState([]);
    const [isDownloaded, setIsDownloaded] = useState(false);
    const { sendRequest, isLoading, error } = useApiRequest();

    const onDrop = useCallback(async (acceptedFiles) => {
        setDroppedFiles(acceptedFiles);

    }, []);

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleAssignmentNumberChange = (event) => {
        setAssignmentNumber(event.target.value);
    };

    const handleQuestionsChange = (event) => {
        setQuestions(event.target.value.split('\n'));
    };

    const generateAssignment = async (event) => {
        event.preventDefault();
        console.log(subject);
        console.log(assignmentNumber);
        console.log(questions);

        try {
            // Make a POST request to generate the assignment
            const generateResponse = await sendRequest('http://65.0.14.141:4000/api/generate', 'POST', {
                subject: subject,
                number: assignmentNumber,
                qs: questions,

            });

            if (generateResponse.success) {
                console.log('Success generating assignment:', generateResponse.data);

                
                setIsDownloaded(true);

               
            } else {
                console.error('Error generating assignment:', generateResponse.data);
            }
        } catch (err) {
            console.error('Error:', err);
            console.error(error);
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: true,
    });


    const handleDownloadClick = (e) => {
        // e.preventDefault();
        setIsDownloaded(false);
    }

    return (
        <form className='flex flex-col  justify-center align-middle gap-4 items-center mt-4 w-[80%] mx-auto'>
            <label htmlFor='subject'>Subject</label>
            <select
                className='w-[80%] bg-primary px-8 py-4 rounded-lg'
                value={subject}
                onChange={handleSubjectChange}
                id='subject'
                required
            >
                {subjects.map((subject) => (
                    <option value={subject.key} key={subject.key}>
                        {subject.name}
                    </option>
                ))}
            </select>
            <label htmlFor='number'>Assignment Number</label>
            <input
                type='number'
                id='number'
                className='w-[80%] bg-primary px-8 py-4 rounded-lg'
                value={assignmentNumber}
                onChange={handleAssignmentNumberChange}
                required
            />
            <label className='text-primary ' htmlFor='questions'>Type it out</label>
            <textarea
                className='w-[80%] h-[200px] bg-primary text-secondary border-dark px-8 py-4 rounded-lg'
                placeholder='1) What is the meaning of life?'
                value={questions.join('\n')}
                onChange={handleQuestionsChange}
                id='questions'
                required
            ></textarea>

            <label className='text-primary' htmlFor='btn'>Drop 'Em All!</label>
            <div
                {...getRootProps()}
                className={`w-[80%] h-[200px] bg-primary rounded-lg text-secondary  flex justify-center items-center cursor-pointer border-dashed border-2 border-gray-650 ${isDragActive ? 'active' : ''
                    }`}

            >
                <input {...getInputProps()} id='btn' />
                {droppedFiles.length > 0 ? (
                    <div>
                        {droppedFiles.map((file) => (
                            <div key={file.name}>{file.name}</div>
                        ))}
                    </div>
                ) : isDragActive ? (
                    <p>Drop the files here ...</p>
                ) : (
                    <div className='text-primary text-center p-8'>Drop files (.pdf)</div>
                )}
            </div>

            {
                !isDownloaded ? (<button className='w-[80%] border-gray-650 border-2 p-4 rounded-lg mb-4' onClick={generateAssignment}>
                    {isLoading ? 'Sending...' : 'SEND ITT'}
                </button>) : (
                    <a href= {`http://65.0.14.141:4000/api/view/${subject}/${assignmentNumber}`} className='w-[80%] border-dark border-2 p-4 rounded-lg mb-4 bg-blue-500 text-center' onClick={handleDownloadClick}>
                        Download
                    </a>
                )
            }

        </form>
    );
};

export default AddAssignment;
