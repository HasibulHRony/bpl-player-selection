import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Navbar from './Components/Navbar/Navbar'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <AvailablePlayers></AvailablePlayers>
      <SelectedPlayers></SelectedPlayers>
    </>
  )
}

export default App
