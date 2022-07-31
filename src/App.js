import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import ProfileTopBar from './components/profileTopBar/ProfileTopBar';
import LandingPage from './components/landingPage/LandingPage'
import Profile from './components/profile/Profile';

function App() {

  const playerData = useSelector(state => state.playerData.value)

  return (
     <div className="App">
    {JSON.stringify(playerData) != '{}' ?
      <>
      <Profile></Profile>
      </> 
      :
      <>
      <LandingPage></LandingPage>
      </>
      }
   </div>
  );
}

export default App;
