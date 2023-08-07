import HomePage from './pages/HomePage';
import Following from './pages/Following';
import Header from './components/header';
import Answers from './pages/Answers';
import Rooms from './pages/Rooms';
import Notifications from './pages/Notifications';
import MobileHeader from './components/MobileHeader';
// import { useNavigate } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

function App() {
  
  // const [count, setCount] = useState(0)

  return (
    <>
      <MobileHeader/>
      <Header/>   
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/following" element={<Following/>} />
        <Route path="/answers" element={<Answers/>} />
        <Route path='/spaces' element={<Rooms/>} />
        <Route path='/notifications' element={<Notifications/>}></Route>
      </Routes>
    </>
  )
}

export default App
