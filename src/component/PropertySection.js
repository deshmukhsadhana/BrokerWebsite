import { Grid, Typography,Card,CardContent,CardMedia  } from '@mui/material';
import { Stack} from '@mui/system';
import React from 'react'
import Image1 from '../Assets/images/Nature.jpg';
import Image2 from '../Assets/images/home.jpg';
const PropertySection = () => {
    const propertyImages =[
        {title:'Apartment', Image:Image1},
        {title:'Office', Image:Image2},
        {title:'Villa', Image:Image1},
        {title:'Home', Image:Image2},
        {title:'Building', Image:Image1},
        {title:'TownHouse', Image:Image2},
        {title:'Village', Image:Image1},
        {title:'Garege', Image:Image2},
    ];

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Typography variant='h3' fontWeight='bold' mt={3}>
        Property Types
        </Typography>
        <Typography variant='p' mt={3} mb={0}>
            Nakshatra Vastu will help you to list your property on our website to get genuine and quick buyer
            </Typography>
        <Stack sx={{ml:10}} display='flex' direction="row" justifyContent="space-around" flexWrap="wrap" >
        {propertyImages.map((image,index)=>{
            return(
                <Card key={index}  sx={{ maxWidth: 345,mt:4 }}  >
                <CardMedia
                  component="img"
                  height="140"
                  image={image.Image}
                  alt="green iguana"
                />
                <CardContent sx={{justifyContent:'center'}}>
                  <Typography variant="h5" component="div" >
                    {image.title}
                  </Typography>
                  
                </CardContent>
             
            </Card>
            );
        })
    }
        </Stack>
      
      </Grid>
    </>
  )
}

export default PropertySection;
