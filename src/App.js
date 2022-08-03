import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import ProfileTopBar from './components/profileTopBar/ProfileTopBar';
import LandingPage from './components/landingPage/LandingPage'
import Profile from './components/profile/Profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  const playerData = useSelector(state => state.playerData.value)

  return (
     <div className="App">
      <Routes>
          <Route path='/' element={<LandingPage/>}>
          </Route>
          <Route path='/profile' element={<Profile/>}>
          </Route>
      </Routes>
   </div>
  );
}

export default App;
