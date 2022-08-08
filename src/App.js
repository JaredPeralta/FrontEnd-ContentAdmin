import './App.css';
import { Routes, Route } from "react-router-dom";
import UserLogin from './Pages/UserLogin/UserLogin';
import { CreateUser } from './Pages/CreateUser/CreateUser';
import HomeUserContainer from './Pages/HomeUser/HomeUserContainer';
import NosotrosContainer from './Pages/Nosotros/NosotrosContainer';
import ServiciosContainer from './Pages/Servicios/ServiciosContainer';
import NoMatch from './Pages/404Page/404Page';
//import Nosotros from './Pages/Nosotros/Nosotros';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<UserLogin/>} />
      <Route exact path="/create-user" element={<CreateUser/>} />
      <Route exact path="/home" element={<HomeUserContainer/>} />
      <Route exact path="/nosotros" element={<NosotrosContainer/>} />
      <Route exact path="/servicios" element={<ServiciosContainer/>} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
