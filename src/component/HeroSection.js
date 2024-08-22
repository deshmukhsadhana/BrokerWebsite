import {Grid,Typography,Button} from '@mui/material';
import React from 'react';
import HouseImg from '../Assets/images/house.jpg';
import CheckIcon from '@mui/icons-material/Check';
import { Box } from '@mui/system';

const HeroSection = () => {
  const showList =[
    {title:'Free door step consultancy'},
    {title:'Free site visits'},
    {title:'Assured gifts on your purchase with Nakshatra Vastu'},
    {title:'Referral bonus on your each referal'}
  ];
  return (
    <>
      <Grid container  alignItems="center" pt={11} >
        <Grid item xs={12} sm={6} order={{xs:2,sm:1}} >
          <Typography variant='h2' sx={{fontWeight:'bold'}}>Find The <Typography variant='h2' sx={{fontWeight:'bold',color:'#ffb111'}} component="span">Perfect Property</Typography>  </Typography>
          <Typography variant='h6'>
          Start your new journy with Nakshartra Vastu & will make sure it ends with Satisfaction & Happiness.
          </Typography>
          <Grid container direction='column'>
          
            {
              showList.map((list,index)=>{
                return(
                  <Typography key={index} variant='p'sx={{p:1}} justifyContent=''>
                  <CheckIcon /> {list.title}
                  </Typography>
                );
              })
            }
         
          </Grid>
          
          <Button size='large' variant='contained'sx={{borderRadius:20,mt:2}} >Contact Now</Button>
        </Grid>

        <Grid container item xs={12} sm={6} order={{xs:1,sm:2}}  >
            <Box component="img" src={HouseImg} alt="" height={410}  />
        </Grid>
      </Grid>
    </>
  )
}

export default HeroSection
