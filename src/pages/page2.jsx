import React from 'react';

import { useParams } from 'react-router-dom';

const About = () => {
    const { id } = useParams();
    return (
        <div className="text-2xl text-black">
            About {id}
        </div>
    );
};

export default About;