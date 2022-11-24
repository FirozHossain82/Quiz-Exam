import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { NavLink } from 'react-router-dom';

const Topic = ({topic}) => {
    const {id, name, logo, total} = topic
    return (
        <div>
            <div className="card card-compact w-fit mx-auto bg-blue-200 shadow-xl">
                    <figure><img className='bg-violet-500 w-[400px] h-[350px]' src={logo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-rose-600">{name}</h2>
                        <div className="card-actions justify-center">
                            <NavLink to={`/quizDetails/${id}`}>
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-2xl pr-4'><FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>{total}</h1>
                                    <button className="btn btn-warning">Start Quiz</button>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Topic;