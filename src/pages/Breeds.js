import React, {useState, useEffect} from 'react';
import axios from "axios";
import Spinner from "../components/Spinner";
import BreedCard from "../components/BreedCard";

const Breeds = () => {
    const [breeds, setBreeds] = useState([])
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const filteredBreeds = breeds.filter(el => el.name.includes(search))

    useEffect(() => {
        axios('https://api.thecatapi.com/v1/breeds')
            .then(res => {
                setBreeds(res.data)
                setIsLoading(false)
            })
    }, [])

    if(isLoading) return <Spinner/>

    return (
        <div className='container mx-auto my-16 px-3'>
            <div className="pt-2 relative mx-auto text-gray-600">
                <input
                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full mb-6"
                    type="search" name="search" placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}/>
                    <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                    </button>
            </div>
                    <div className='flex flex-wrap -mx-3'>
                        {filteredBreeds.map(breed => <BreedCard breed={breed}/>)}
                    </div>
        </div>
    );
};

export default Breeds;
