import React from 'react';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const SelectedPlayers = ({purchasedPlayers}) => {
    return (
        <div className='max-w-[1280px] mx-auto mt-2'>
            {
                purchasedPlayers.map((purchasedPlayer, index)=>{
                    return(
                        <SelectedPlayer key={index} purchasedPlayer={purchasedPlayer}></SelectedPlayer>
                    )
                })
            }
        </div>
    );
};

export default SelectedPlayers;