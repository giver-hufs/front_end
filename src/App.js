import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Mypage from './pages/Mypage';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route exact path='/*' element={<Main/>} /> */}
        <Route path = '/login' element={<Login/>}></Route>
        <Route path = '/signup' element={<Signup/>}></Route>
        <Route path = '/mypage/*' element={<Mypage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
