import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Navbar from './Components/Navbar/Navbar'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'



const allPlayersHandler = async () => {
  const fetchAllPlayers = await fetch("/players.json")
  return fetchAllPlayers.json()
}

const allPlayersPromise = allPlayersHandler()


function App() {

  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(600000)
  const [purchasedPlayers, setPurchasedPlayers] = useState([])

  const handleRemoveSelected = (element) => {

    const updatedPurchasedPlayers = purchasedPlayers.filter(
      (plr) => plr.player_name !== element.player_name
    );

    setPurchasedPlayers(updatedPurchasedPlayers);

    const updatedBalance =
      availableBalance + parseInt(element.price.replaceAll(",", ""));

    setAvailableBalance(updatedBalance);
  };


  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      {
        <div className='max-w-[1280px] mx-auto flex justify-between items-center mt-2 mb-4'>
          <div>
            <h3 className="text-xl font-semibold">
              {toggle ? "Available Players" : `Selected Players ${purchasedPlayers.length}/6`}
            </h3>

          </div>
          <div className='flex'>
            <button onClick={() => setToggle(true)} className={`p-1.5 text-xl border-2 rounded-l-2xl border-r-0 cursor-pointer font-bold ${toggle ? 'bg-[#E7FE29]' : ''}`}>Available</button>
            <button onClick={() => setToggle(false)} className={`p-1.5 text-xl border-2 rounded-r-2xl border-l-0 cursor-pointer font-bold ${toggle === false ? 'bg-[#E7FE29]' : ''}`}>Selected {`${purchasedPlayers.length}`}</button>
          </div>
        </div>
      }


      {
        toggle ? <Suspense fallback={<h1 className='text-center'>Loading</h1>}>
          <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} allPlayersPromise={allPlayersPromise}></AvailablePlayers>
        </Suspense> :
          <SelectedPlayers handleRemoveSelected={handleRemoveSelected} purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      }

    </>
  )
}

export default App
