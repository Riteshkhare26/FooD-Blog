import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <>
        <Box sx={{textAlign:"center", bgcolor:'#1A1A19', color:'white',p:3}}>
       <Box 
       sx={{
        my:3,
        "& svg":{
            frontSize:"60px",
            cursor:"pointer",
            mr:2,
        },
        "& svg:hover":{
            color:'goldenrod',
            transform:'translateX',
            transition:'all 400ms',
        }
        }}>
        {/* icons */}
      <InstagramIcon/>
      <TwitterIcon/>
      <GitHubIcon/>
      <LinkedInIcon/>
    <YouTubeIcon/>
       </Box>

      <Typography variant="5"sx={{"@media(min-width:600px)":{}}}>
        All Rights Reserved &copy; Ritedh Coder</Typography>      
        </Box>
        </>
  )
}

export default Footer;