import React from 'react'
import Header from "./Header/Header";
import Footer from "./footer/Footer";
// import { Grid } from '@mui/material';
 
const LayOut = ({children}) => {
  
  return (
    <>
    
      <Header />
      <div> {children}</div>
      <Footer />
     
      
    </>

  );
}

export default LayOut;
