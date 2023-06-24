import "./App.css";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/StartPage";
import Main from "./pages/MainPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import Finish from "./pages/FinishSignup";
import Donation from "./pages/Donation";
import Request from "./pages/RequestPage";
import Myintroduce from "./pages/Myintroduce";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/*" element={<Start />} />
        <Route exact path="/main" element={<Main />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/request" element={<Request />}></Route>
        <Route path="/mypage/*" element={<Mypage />}></Route>
        <Route path="/complete" element={<Finish />}></Route>
        <Route path="/donation" element={<Donation />}></Route>
        <Route path="/introduce" element={<Myintroduce />}></Route>
      </Routes>
    </div>
  );
}

export default App;
