import { useState } from 'react';

const useApiRequest = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async (url, method, data) => {
        setIsLoading(true);

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            setIsLoading(false);

            return responseData;
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
            throw error;
        }
    };

    return { sendRequest, isLoading, error };
};

export default useApiRequest;