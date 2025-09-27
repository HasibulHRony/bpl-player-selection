import React from 'react';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const SelectedPlayers = ({purchasedPlayers, handleRemoveSelected}) => {
    return (
        <div className='max-w-[1280px] mx-auto mt-2'>
            {
                purchasedPlayers.map((purchasedPlayer, index)=>{
                    return(
                        <SelectedPlayer handleRemoveSelected={handleRemoveSelected} key={index} purchasedPlayer={purchasedPlayer}></SelectedPlayer>
                    )
                })
            }
        </div>
    );
};

export default SelectedPlayers;