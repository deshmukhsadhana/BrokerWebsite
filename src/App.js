import React from "react";
// import { makeStyles } from "@mui/material";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/HomePage';
import AboutUs from "./pages/About";
import ContactUs from "./pages/ContactUs";
import './Assets/css/styles.css'
import Lead from "./Admin/Lead";
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}> </Route>
        <Route path="/aboutus" element={<AboutUs/>}> </Route>
        <Route path="/contactus" element={<ContactUs/>}> </Route>
        <Route path="/lead" element={<Lead/>}> </Route>
      </Routes>
    </BrowserRouter>

   </>
  );
}

export default App;
