import './App.css';
import { Routes, Route } from "react-router-dom";
import UserLogin from './Pages/UserLogin/UserLogin';
import { CreateUser } from './Pages/CreateUser/CreateUser';
import HomeUserContainer from './Pages/HomeUser/HomeUserContainer';
import NoMatch from './Pages/404Page/404Page';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<UserLogin/>} />
      <Route exact path="/create-user" element={<CreateUser/>} />
      <Route exact path="/home" element={<HomeUserContainer/>} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
