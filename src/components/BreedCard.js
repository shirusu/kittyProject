import React from 'react';
import {Link} from "react-router-dom";

const BreedCard = ({breed}) => {
    return (
        <div className='w-1/4 px-3 mb-5'>
            <Link to={`/breeds/${breed.id}`}>
                <div className="bg-gray-400 flex justify-center items-center">
                    <div
                        className="flex flex-col justify-between w-72 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer"
                        style={{background:`url(${breed?.image?.url}) no-repeat center/contain`}}>
                        <div className="flex justify-between items-center ml-4 pr-8">
                            <div
                                className="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">Some
                                information
                            </div>
                            <div
                                className="bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full">%
                            </div>
                        </div>
                        <div
                            className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
                            <h3 className="text-xl font-bold pb-2">{breed.name}</h3>
                            <p className="truncate text-gray-500 text-sm">{breed.description}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BreedCard;