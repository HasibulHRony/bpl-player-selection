import React from 'react';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const SelectedPlayers = ({ toggle, setToggle, purchasedPlayers, handleRemoveSelected }) => {
    return (
        <div>
            <div className='max-w-[1280px] mx-auto mt-2'>
                {
                    purchasedPlayers.map((purchasedPlayer, index) => {
                        return (
                            <SelectedPlayer handleRemoveSelected={handleRemoveSelected} key={index} purchasedPlayer={purchasedPlayer}></SelectedPlayer>
                        )
                    })
                }
            </div>
            <div className='flex'>
                <button onClick={() => setToggle(true)} className={`cursor-pointer text-xl mx-auto font-semibold border-2 rounded-2xl p-4 text-center my-4 ${toggle ? '' : 'bg-[#E7FE29]'}`}>Add More Player</button>

            </div>
        </div>
    );
};

export default SelectedPlayers;