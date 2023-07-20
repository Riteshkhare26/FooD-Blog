import React from 'react'
import Layout from '../components/Layout/Layout';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
 <TableRow>
           <TableCell>
          <EmailIcon sx={{color:"blue",pt:1 }}/> riteshkhare2611@gmail.com
           </TableCell>
           </TableRow>
const Contact = () => {
  return (
    <Layout>
      <Box     
      sx={{
          my: 10,ml:10, "& h4":{fontWeight:"bold", mb:2 }}}
         > 
         <Typography variant='h4'>Contact my CafeBar   </Typography>
         <p> lorem Hello Superfoods is a company that produces healthy food products. They offer a variety of items such as snacks, meals, and drinks. Their products are all natural and free from preservatives.
         The website for Laird Superfood is clean and simple. The design uses a lot of white space, which makes the site easy to navigate. The menu is easy to find and the products are clearly laid out. The overall design is modern and stylish.</p>
        
      </Box>
      <Box sx={{margin:3, width:"600px", ml: 10, "@media(max-width:500px)":{width:'300px',
      },
    }}> 
        <TableContainer component={Paper}>
        <Table aria-label = "contact table ">
         <TableHead>
          <TableRow>
            <TableCell sx={{bgcolor:"black",color:"white", }} align="center"
              >Contact Detail
            </TableCell>
          </TableRow>
         </TableHead>
         <TableBody>
          <TableRow>
           <TableCell>
          <SupportAgentIcon sx={{color:"red",pt:1 }}/> 1800 00 0000(Toll free)
           </TableCell>
          </TableRow>
           <TableRow>
           <TableCell>
          <EmailIcon sx={{color:"blue",pt:1 }}/> riteshkhare2611@gmail.com
           </TableCell>
           </TableRow>
           <TableRow>
           <TableCell>
          <CallIcon sx={{color:"black",pt:1 }}/> 9770747697
           </TableCell>
           </TableRow>
         </TableBody>
        </Table>

        </TableContainer>
      
      </Box>
    </Layout>
  )
}


export default Contact;