import React from 'react';

const SelectedPlayers = ({purchasedPlayers}) => {
    return (
        <div>
            <h1>Selected{purchasedPlayers.length}</h1>
        </div>
    );
};

export default SelectedPlayers;