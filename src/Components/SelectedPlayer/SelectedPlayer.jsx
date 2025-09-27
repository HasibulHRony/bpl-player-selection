import React from 'react';
import Vector from '../../assets/Vector.png'
const SelectedPlayer = ({ purchasedPlayer }) => {
    return (
        <div className='flex justify-between items-center px-5 py-3 border border-gray-200 shadow-sm rounded-2xl mt-2'>
            <div className='flex justify-center ml-4 items-center'>
                <img src={purchasedPlayer.player_img} className='w-[64] h-[56px]' />
                <div className='flex flex-col justify-between ml-4'>
                    <h3 className='text-lg font-semibold'>{purchasedPlayer.player_name}</h3>
                    <p  className='text-lg font-semibold'>{purchasedPlayer.play_role}</p>
                </div>
            </div>
            <img className='mr-4' src={Vector} alt="" />
        </div>
    );
};

export default SelectedPlayer;