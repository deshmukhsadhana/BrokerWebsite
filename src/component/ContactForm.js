import {
  Button,
  TextField,
  Typography,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Box,
  Grid,
} from "@mui/material";
// import { Container } from "@mui/system";
import React, { useState ,useEffect} from "react";
import { CSVLink } from "react-csv";

const ContactForm = () => {
  const [input, setInput] = useState({
    fname: "",
    mobile: "",
    date: "",
    propertyName: "",
    propertyArea: "",
    message: "",
  });
  const clearForm = () => {
    setInput({
      fname: "",
      mobile: "",
      date: "",
      propertyName: "",
      propertyArea: "",
      message: "",
    });
  };

  const headers = [
    {
      label: "First name",
      key: "fname",
    },
    {
      label: "Mobile",
      key: "mobile",
    },
    {
      label: "Date",
      key: "date",
    },
    {
      label: "Property Name",
      key: "propertyName",
    },
    {
      label: "Property Area",
      key: "propertyArea",
    },
    {
      label: "Message",
      key: "message",
    },
  ];
 
  const csvFile = () => {
    const csvData = [input];
    return csvData;
  };
    const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
    console.log(event);
  };
  useEffect(() => {
    if (input.fname === "") {
      // Check if the input is empty, indicating that the form should be reset
      setInput({
        fname: "",
        mobile: "",
        date: "",
        propertyName: "",
        propertyArea: "",
        message: "",
      });
    }
  }, [input.fname]);

  return (
    <Grid container>
      <Typography ml={2} fontWeight="bold">
        Contact Us
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
          <Box>
            <form>
            <Typography component="div" m={2}>
              <TextField
                label="Enter Name"
                name="fname"
                type="text"
                varient="outline"
                sx={{ width: "250px" }}
                onChange={handleChangeInput}
              />
              <TextField
                label="Enter Mobile"
                name="mobile"
                type="number"
                varient="outline"
                sx={{ width: "250px" }}
                onChange={handleChangeInput}
              />
            </Typography>
            <Typography component="div" m={2}>
              <TextField
                type="date"
                name="date"
                onChange={handleChangeInput}
                varient="outline"
                sx={{ width: "250px" }}
              />
              <FormControl sx={{ m: 0, minWidth: 120, width: "250px" }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Property Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  name="propertyName"
                  label="Property Type"
                  value={input.propertyName}
                  onChange={handleChangeInput}
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="10">Ten</MenuItem>
                  <MenuItem value="20">Twenty</MenuItem>
                  <MenuItem value="30">Thirty</MenuItem>
                </Select>
              </FormControl>
            </Typography>
            <Typography component="div" m={2}>
              <FormControl sx={{ m: 0, minWidth: 120, width: "500px" }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Prefered Area
                </InputLabel>
                <Select
                  onChange={handleChangeInput}
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  name="propertyArea"
                  label="Prefered Area"
                  value={input.propertyArea}
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="Ten">Ten</MenuItem>
                  <MenuItem value="Twenty">Twenty</MenuItem>
                  <MenuItem value="Thirty">Thirty</MenuItem>
                </Select>
              </FormControl>
            </Typography>
            <Typography component="div" m={2}>
              <TextField
                label="Enter Name"
                name="message"
                type="text"
                varient="outline"
                multiline
                rows={5}
                sx={{ width: "500px" }}
                onChange={handleChangeInput}
              />
            </Typography>
            <Typography component="div" m={2}>
              <Button variant="contained">
                <CSVLink data={csvFile()} headers={headers} filename="Data.csv" >
                  Send Messages
                </CSVLink>
              </Button>
            </Typography>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} p={3} sm={6} order={{ xs: 1, sm: 2 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.718725301277!2d73.83451314368361!3d18.45107583295564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2953306515665%3A0x12ad3073f025379c!2sOm%20Shanti%20Homes%20Society%2C%20Dalavi%20Nagar%2C%20Ambegaon%20Budruk%2C%20Pune%2C%20Maharashtra%20411046!5e0!3m2!1sen!2sin!4v1693828848478!5m2!1sen!2sin"
            width={650}
            height={350}
            sx={{
              border: 0,
              allowfullscreen: "",
              loading: "lazy",
              referrerpolicy: "no-referrer-when-downgrade",
            }}
          ></iframe>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
