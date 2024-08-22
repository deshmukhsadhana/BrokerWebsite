import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import img1 from "../../Assets/images/Nature.jpg";
import img2 from "../../Assets/images/R.jpg";
import img3 from "../../Assets/images/home.jpg";
import img4 from "../../Assets/images/urban-house-vietnam.jpg";
import img5 from "../../Assets/images/house.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import CopyrightIcon from '@mui/icons-material/Copyright';
// import { fontSize } from "@mui/system";
const Footer = () => {
  const itemData = [
    { title: img1 },
    { title: img2 },
    { title: img3 },
    { title: img4 },
    { title: img5 },
    { title: img1 },
    { title: img2 },
    { title: img3 },
  ];
  return (
    <>
      <Grid
        container
        mt={3}
        p={10}
        sx={{ backgroundColor: "#210d42", color: "white" }}
      >
        <Grid item xs={12} sm={6} pl={16}>
          <Typography variant="h6" mb={3}>
            Get In Touch
          </Typography>
          <Typography variant="subTitle" component="div">
            <Typography variant="subtitle">
              <LocationOnIcon />
            </Typography>{" "}
            om Shanti Homes, Ambegaon Bk, Pune 411046
          </Typography>
          <Typography variant="subTitle" component="div">
            <Typography variant="subtitle">
              <PhoneIcon />
            </Typography>{" "}
            8007060102
          </Typography>
          <Typography variant="subTitle" component="div">
            <Typography variant="subtitle">
              <PhoneIcon />
            </Typography>{" "}
            9822808045
          </Typography>
          <Typography variant="subTitle" component="div">
            <Typography variant="subtitle">
              <EmailIcon />
            </Typography>
            nakshatravastu15@gmail.com
          </Typography>
          <Typography component='div' mt={2} display='flex'>
            <Typography component='p' p={1} border='2px solid white' sx={{borderRadius:'25px',height:'25px',width:'25px'}}>
            <FacebookRoundedIcon/>
            </Typography>
            <Typography component='p' ml={1} p={1} border='2px solid white' sx={{borderRadius:'25px',height:'25px',width:'25px'}}>
            <SubscriptionsRoundedIcon/>
              </Typography>
             
              
          </Typography>
         
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" mb={3}>
            Photo Gallery
          </Typography>
          <Box sx={{ width: 500, height: 350, overflowY: "auto" }}>
            <ImageList variant="masonry" cols={3} gap={8}>
              {itemData.map((item,index) => (
                <ImageListItem key={index}>
                  <img src={item.title} alt={item.title} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Grid>

        
      </Grid>
      <Grid container  sx={{ backgroundColor:"#210d42", color:"white"  }}>
      
       <Typography sx={{fontSize:'10px'}} variant="p" mb={2} pl={16}>
       <CopyrightIcon/>
        All rights Reservers Nakshtra vastu
        </Typography>
      </Grid>
    </>
  );
};

export default Footer;
