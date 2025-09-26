import React from 'react';
import navImg from "../../assets/logo.png"
import dollarImg from "../../assets/dollar.jpg"


const Navbar = ({availableBalance}) => {
    return (
        <div className="navbar max-w-[1280px] mx-auto">
            <div className="flex-1">
                <a className="text-xl">
                    <img className='w-[60px] h-[60px]' src={navImg} />
                </a>
            </div>
            <div className="flex items-center">
                <span className="ml-1 font-bold text-xl">${availableBalance}</span>
                <span className="ml-1 font-bold text-xl">Coin</span>
                <img className='ml-1 h-8 w-12' src={dollarImg} />
            </div>
        </div>
    );
};

export default Navbar;