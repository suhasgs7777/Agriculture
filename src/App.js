import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import Info from './pages/info';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App()
{
  return(
    <div>
      <BrowserRouter>
      <Navbar />
      <Info/>
      <Routes>
      <Route path='/' element ={<info/>}/>
      <Route path='/FERTILIZERS' element ={<infocategory category = "FERTILIZERS"/>}/>
      <Route path='/TOOLS' element ={<infocategory category = "TOOLS"/>}/>
      <Route path='/SUBSIDY' element ={<infocategory category = "SUBSIDY"/>}/>
      <Route path='/HELP-LINE' element ={<infocategory category = "HELP-LINE"/>}/>
      <Route path='/SUPPORT' element ={<infocategory category = "SUPPORT"/>}/>
      </Routes>
      
      </BrowserRouter>
      </div>
  )
}

export default App;
