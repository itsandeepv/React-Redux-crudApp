import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adduser from './page/Adduser';
import Edituser from './page/Edituser';

function App() {
  return (
    <>
    <BrowserRouter>

     <Routes>

          <Route path="/" element={<Home/>}></Route>
          <Route path="/adduser" element={<Adduser/>}></Route>
          <Route path="/edituser/:userid" element={<Edituser/>}></Route>

     </Routes>
    
    
      </BrowserRouter>


    
    
    
    </>
  );
}

export default App;
