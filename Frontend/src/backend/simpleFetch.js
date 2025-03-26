const simpleFetch = async ({ url, data, headers = {}, method = 'GET' }) => {
    try {
        const defaultHeaders = {
            "Content-Type": 'application/json',
            ...headers
        };

        const fetchOptions = {
            method,
            headers: defaultHeaders ,
            // credentials: 'include',
        };

        // Only add body for methods that can have a body
        if (data && ['POST', 'PUT', 'PATCH', 'DELETE'].includes(method.toUpperCase())) {
            fetchOptions.body = JSON.stringify(data);
        }

        const response = await fetch(url, fetchOptions);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}, message: ${response.statusText}`);
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await response.json();
        } else {
            return await response.text();
        }

    } catch (error) {
        console.error('Fetch error oops:', error.message);
        throw error;
    }
};

export { simpleFetch };