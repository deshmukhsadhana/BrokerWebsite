import React from "react";
import { Grid, Typography, Link } from "@mui/material";
import HouseImg from "../Assets/images/house.jpg";
import { Box } from "@mui/system";

const Contact = () => {
  return (
    <>
      <Grid container alignItems="center" pt={11}>
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
          <Typography variant="h3" ml={3} fontWeight='bold'  >Contact Us</Typography>
        <Grid component='div' ml={4} fontSize={20}>
          <Link href="/home" underline="none" >
            Home
          </Link>
          <Link href="/contactus" underline="none">
           /Contact
          </Link>
          </Grid>
        </Grid>

        <Grid container item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
          <Box component="img" src={HouseImg} alt="" height={410} />
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
