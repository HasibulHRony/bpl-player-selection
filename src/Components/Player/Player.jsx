import React from 'react';
import groupImg from "../../assets/Group.png"
import reportImg from "../../assets/report.png"
const Player = ({ player }) => {
    console.log(player)
    return (
        <div key={player.player_name} className="card bg-gray-300 shadow-sm">
            <figure className='p-4'>
                <img
                    className='h-[300px] object-cover'
                    src={player.player_img}
                    alt="Players Img" />
            </figure>
            <div className="card-body font-bold">
                <div className='flex gap-2 items-center my-2'><img src={groupImg} className='w-[20px] h-[20px]' /><span>Name</span></div>

                <div className='border-b pb-2 mb-2 border-gray-400 flex justify-between items-center'><div className='flex items-center gap-2'><img className='w-[20px] h-[20px]' src={reportImg} /><span>{player.country}</span></div><button>{player.play_role}</button></div>

                <div className='flex items-center justify-between mb-2'><span>Rating</span> <span>rating</span></div>

                <div className='flex items-center justify-between mb-2'><span>{player.batting_style}</span><span>{player.bowling_style}</span></div>

                <div className="flex items-center mb-2 justify-between">
                    <p>Price: <span>{player.price}</span></p>
                    <button className="btn">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;