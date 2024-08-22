
import {Grid,Typography,Button} from '@mui/material';
import React from 'react';
import CallActionImg from '../Assets/images/call-to-action-man.jpg';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Box } from '@mui/system';
// import LayOut from './layOut';

const CallToAction = () => {
  return (
    <>
      <Grid container direction="row" alignItems="center" mt={5} ml={10} sx={{ boxShadow: 15,}} >
      <Grid container item xs={12} sm={6} order={{xs:1,sm:1}} p={5}  >
            <Box component="img" src={CallActionImg} alt="" height={350}  />
        </Grid>
        <Grid item xs={12} sm={6} order={{xs:2,sm:2}} justifyContent='center'  >
          <Typography variant='h3' ml={5} sx={{fontWeight:'bold'}}>
            Contact With Our Certified Agent
          </Typography>
          <Typography variant='h6' ml={5}>
          Get hassle free consultation from our experienced real estate advisors
          </Typography >
          <Grid container direction='row' ml={5}>
          <Button size='large' variant='contained'sx={{borderRadius:2,mt:2}} ><PhoneIcon /> Make a Call</Button>
          <Button size='large' variant='contained'sx={{borderRadius:2,mt:2,ml:3}} > <CalendarMonthIcon/> Get Appoitment</Button>
          </Grid>
          
        </Grid>
      </Grid>

      <Grid container  alignItems="center"   >
      
        <Grid item xs={12} sm={12} order={{xs:2,sm:2}} justifyContent='center' height={200} p={10} >
          <Typography variant='h4' ml={55} sx={{fontWeight:'bold'}} >
          Our Clients Say!
          </Typography>
          <Typography variant='h6' mt={1} ml={35}>
          "Nakshatra Vastu" the place to end your search for your dream home
          </Typography >
         
          </Grid>
          
        </Grid>
      
    </>
  )
}

export default CallToAction
