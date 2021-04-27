import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Spinner from "../components/Spinner";

const BreedDetails = () => {
    const {id} = useParams()
    const [breed, setBreed] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios('https://api.thecatapi.com/v1/breeds')
            .then(res => {
                setBreed(res.data.find(el => el.id === id))
                setIsLoading(false)
            })
    }, [])

    if(isLoading) return <Spinner/>

    return (
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                <img alt="ecommerce"
                                     className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                                     src={breed?.image?.url}/>
                                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <h2 className="text-sm title-font text-gray-500 tracking-widest">CAT NAME</h2>
                                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{breed.name}</h1>
                                    <div className="flex mb-4">
                                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
          </span>
                                    </div>
                                    <p className="leading-relaxed">Description:{breed.description}</p>
                                    <p className="leading-relaxed">Origin:{breed.origin}</p>
                                    <p className="leading-relaxed">Temperament:{breed.temperament}</p>
                                    <p className="leading-relaxed">Child-friendly:{breed.child_friendly}</p>
                                    <p className="leading-relaxed">Intelligence:{breed.intelligence}</p>
                                    <p className="leading-relaxed">Dog-friendly:{breed.dog_friendly}</p>
                                </div>
                            </div>
                        </div>
            </section>
    );
};
export default BreedDetails;