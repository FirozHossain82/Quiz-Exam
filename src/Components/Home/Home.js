import React from 'react';
// import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Topics from '../Topics/Topics';

const Home = () => {
    // const topics = useLoaderData();
    return (
        <div className=''>
                <Banner></Banner>
                <Topics></Topics>
                 {/*   <div className="topics-container">
                   {
                        topics.map(topic => <Topics
                            key={topic.id}
                            topic={topic}
                        ></Topics>)
                    }
                   </div> */}        
        </div>
        
    );
};

export default Home;