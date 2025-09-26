import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Navbar from './Components/Navbar/Navbar'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'

function App() {
  const allPlayersHandler = async () => {
    const fetchAllPlayers = await fetch("/players.json")
    return fetchAllPlayers.json()
  }

  const allPlayersPromise = allPlayersHandler()

  return (
    <>
      <Navbar></Navbar>
      {
        <div className='max-w-[1280px] mx-auto flex justify-between items-center mt-2 mb-4'>
          <div>
            <h3 className='text-xl font-semibold'>AvailablePlayers</h3>
          </div>
          <div className='flex'>
            <button className='p-1.5 text-xl border-2 rounded-l-2xl border-r-0 bg-[#E7FE29] cursor-pointer'>Available</button>
            <button className='p-1.5 text-xl border-2 rounded-r-2xl border-l-0 cursor-pointer'>Selected</button>
          </div>
        </div>
      }
      <Suspense fallback={<h1 className='text-center'>Loading</h1>}>
        <AvailablePlayers allPlayersPromise={allPlayersPromise}></AvailablePlayers>
      </Suspense>
      <SelectedPlayers></SelectedPlayers>
    </>
  )
}

export default App
