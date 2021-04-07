import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Spinner from "../components/Spinner";


const RandomKitty = () => {
    const [kitty, setKitty] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const getKitty = () => {
        axios('https://api.thecatapi.com/v1/images/search')
            .then(res => {
                setKitty(res.data[0])
                setIsLoading(false)
            })
    }

    useEffect(() => {
        getKitty()
    }, [])

    if(isLoading) return <Spinner/>

    return (
        <div className='container mx-auto my-16'>
            <img src={kitty.url} alt="" className='h-56 mx-auto'/>
            <button type="button"
                    className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg flex items-center mx-auto mt-10"
                    onClick={getKitty}>
                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                </svg>
                Next
            </button>

        </div>
    );
};

export default RandomKitty;