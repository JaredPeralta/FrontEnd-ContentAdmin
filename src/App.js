import './App.css';
import { Routes, Route } from "react-router-dom";
import UserLogin from './Pages/UserLogin/UserLogin';
import { CreateUser } from './Pages/CreateUser/CreateUser';
import { Home } from './Pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<UserLogin/>} />
      <Route exact path="/create-user" element={<CreateUser/>} />
      <Route exact path="/home" element={<Home/>} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
