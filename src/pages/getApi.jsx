import React, { useState, useEffect } from 'react';

const GetAPI = () => {
    const [loading, setLoading] = useState(true);
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/quotes')
            .then(response => response.json())
            .then(data => {
                setQuotes(data.quotes);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching quotes:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-2xl text-black">Loading...</div>;
    }

    return (
        <div className="p-4 h-screen overflow-y-scroll">
            <h1 className="text-4xl font-bold mb-5 text-black">Quotes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {quotes.map(quote => (
                    <div key={quote.id} className="p-4 bg-white rounded-xl shadow-md">
                        <p className="text-xl text-gray-500 mb-2" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                            "{quote.quote}"
                        </p>
                        <p className="text-base text-black" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                            - {quote.author}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GetAPI;