import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
       <header>
           <nav className="flex items-center justify-between flex-wrap bg-red-400 p-6">
               <div className="flex items-center flex-no-shrink text-white mr-6">
                   <span className="font-semibold text-xl tracking-tight">Hello Kitty</span>
               </div>
               <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                   <div className="text-sm lg:flex-grow">
                       <Link to="/"
                          className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                           Home
                       </Link>
                       <Link to="/breeds"
                          className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                           Breeds
                       </Link>
                       <Link to="/random"
                          className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
                           Random Kitty
                       </Link>
                   </div>
                   <div>
                       <a href="#"
                          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-black mt-4 lg:mt-0">Download</a>
                   </div>
               </div>
           </nav>
       </header>
    );
};

export default Header;