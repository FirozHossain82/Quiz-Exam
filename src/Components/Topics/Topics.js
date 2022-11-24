import React, { useEffect, useState } from 'react';
import Topic from '../Topic.js/Topic';

const Topics = () => {
    const [topics, setTopics] = useState([]);
    useEffect( ()=>{
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res => res.json())
        .then(data => setTopics(data.data))
    } ,[])
    return (
        <div className='bg-green-100 mt-16 '>
           
           <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  md:px-24 lg:px-8'>
                <div className='text-center'>
                    <h1 className='text-xl md:text-3xl font-bold text-amber-500 pt-6'>Our Quiz Topic</h1>
                </div>
            </div>
           <div className=' px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  md:px-24 lg:px-8 pb-16'>
                <div className='w-5/6  mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
                    {
                        topics.map(topic => <Topic
                         key={topic.id}
                         topic = {topic}
                        ></Topic>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Topics;