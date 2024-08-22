import {Grid,Typography,Button,Link} from '@mui/material';

import React from 'react';
import HouseAboutImg from '../Assets/images/urban-house-vietnam.jpg';
// import CheckIcon from '@mui/icons-material/Check';
import { Box } from '@mui/system';
// import LayOut from './layOut';

const AboutHeroSection = () => {
    const ParaList =[
        {para:'Free door step Welcome to Nakshatra Vastu ! We are a team of experienced real estate professionals dedicated to helping you buy, sell, or rent properties. Our mission is to provide our clients with exceptional service and help them achieve their real estate goals.'},
        {para:'Whether you are looking to buy your first home, upgrade to a larger property, or invest in real estate, we have the expertise and knowledge to guide you through the process. We understand that buying or selling a property can be stressful and overwhelming, and thats why we are committed to making the experience as smooth and stress-free as possible.'},
        {para:'Nakshatra Vastu offers a user-friendly platform where you can List your own properties, view our listings, and connect with our team of professionals. We are constantly updating our database to ensure that you have access to the most up-to-date and accurate information.'},
        {para:'In addition to our extensive knowledge of the local real estate market, we also offer a range of services to help you make informed decisions. From property valuations and market analysis to financing and legal support, we are here to provide you with the resources you need to make the right choices.'},
        {para:'At our real estate firm, we value integrity, honesty, and transparency. We believe in building long-term relationships with our clients and are committed to providing them with the best possible service. Contact us today to learn more about how we can help you achieve your real estate goals!'}
      ];
  return (
    <>
      <Grid container  sx={{ml:12,mt:5}}  >
        <Grid item xs={12} sm={6} order={{xs:2,sm:1}} >
          <Typography variant='h4' sx={{fontWeight:'bold'}}>
            About Us
            </Typography>
            {
                ParaList.map((list,index)=>{
                    return(
                        <Typography key={index} component='p' sx={{mt:2}} variant='subTitle1'>
                            {list.para}
                        </Typography>
                    );
                })
            }
          <Button component={Link} size='large' color='success' variant='text'sx={{ml:-2}} >show more</Button>
        </Grid>

        <Grid item xs={12} sm={6} order={{xs:1,sm:2}} sx={{mt:8}}  >
            <Box component="img" src={HouseAboutImg} alt="" height={500} width={500}  />
        </Grid>
      </Grid>
    </>
  )
}

export default AboutHeroSection;
