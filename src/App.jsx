import './App.css';
import Shop from './Pages/shop';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Menu from "./Pages/Menu/Menu";
import Home5 from './component/Home5/Home5';
import Home6 from './component/Home6/Home6';
import Gift from "./Pages/Gift/Gift";
import Reward from "./Pages/Rewards/Reward";
import SignIn from './Pages/Sign/SignIn';
import Joinnow from "./Pages/Joinnow/Joinnow";

function Layout() {
  const location = useLocation();

  // Tight layout for specific routes
  const isTight = ['/menu', '/gift', '/signin', '/joinnow'].includes(location.pathname);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reward' element={<Reward />} />
        <Route path='/gift' element={<Gift />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/joinnow' element={<Joinnow />} />
      </Routes>
      <Home5 tight={isTight} />
      <Home6 tight={isTight} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
