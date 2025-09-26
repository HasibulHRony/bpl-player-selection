import React, { use } from 'react';
import Player from '../Player/Player';

const AvailablePlayers = ({allPlayersPromise}) => {
    const allPlayers = use(allPlayersPromise)
    // console.log(allPlayers)
    return (
        <div className='max-w-[1280px] mx-auto grid grid-cols-3 gap-3'>
            {
                allPlayers.map((player, index)=>{
                    return(
                        <Player key={index} player={player}></Player>
                    )
                })
            }
        </div>
    );
};

export default AvailablePlayers;