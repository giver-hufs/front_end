import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/MainPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Finish from './pages/FinishSignup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/*' element={<Main/>} />
        <Route path = '/login' element={<Login/>}></Route>
        <Route path = '/signup' element={<Signup/>}></Route>
        <Route path = '/mypage/*' element={<Mypage/>}></Route>
        <Route path = '/complete' element={<Finish/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
