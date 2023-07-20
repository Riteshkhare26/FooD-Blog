import React from 'react'
import Layout from "../components/Layout/Layout";
import { Box,Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
       <Box      sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant='h4'>
          Welcome to my Cafe
        </Typography>
        <p>
        Hello Superfoods is a company that produces healthy food products. They offer a variety of items such as snacks, meals, and drinks. Their products are all natural and free from preservatives.
        The website for Laird Superfood is clean and simple. The design uses a lot of white space, which makes the site easy to navigate. The menu is easy to find and the products are clearly laid out. The overall design is modern and stylish.

        </p>
        <br/> 
        <p>lorem Welcome to my Cafe Dandelion Chocolate is a small-batch chocolate maker based in San Francisco, California. They source cacao beans directly from farmers, and then roast, winnow, grind, and conch the beans in-house to make their chocolate. All of their chocolate is made with just two ingredients cacao beans and cane sugar Dandelion Chocolate s online store is minimalistic. It is easy to navigate, and all the important information is easy to find. I think the website does a good job of representing the brand.</p>
        
       </Box>
    </Layout>
  );
    
};
export default About;