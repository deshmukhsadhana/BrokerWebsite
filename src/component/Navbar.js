import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {AppBar,Box,Toolbar,Container,Button} from '@mui/material';
import LogoImg from '../Assets/images/nvlogo.jpeg'

const pages = ['Home', 'AboutUs', 'ContactUs'];


function Navbar() {
  const navigate = useNavigate() //this the re-direct api
  const handleRedirect = (page) => {
    navigate(`/${page.toLowerCase()}`);
  };

  return (
    <AppBar position="fixed" >
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          <Box flexGrow={1} sx={{mt:'2', mb:'2'}}>
          <img src={LogoImg} alt=''  height={80}/>      
          </Box>

          <Box sx={{ display: { xs: '', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={() => handleRedirect(page)}
              >
                {page}
              </Button>
            ))}
          </Box>
    
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
