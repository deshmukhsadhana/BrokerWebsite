import React from 'react'
import { Container } from "@mui/system";
import LayOut from '../component/LayOut'
import Contact from '../component/Contact'
import ContactForm from '../component/ContactForm';

const ContactUs = () => {
  return (
    <LayOut>
      <Container sx={{ m: "0" }}>
      <Contact/>
      <ContactForm/>
      </Container>
    </LayOut>
  )
}

export default ContactUs
