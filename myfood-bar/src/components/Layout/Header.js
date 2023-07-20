import React,{useState} from 'react'
import { AppBar, 
    Box, 
    Divider, 
    Drawer, 
    IconButton, 
    Toolbar, 
    Typography } from '@mui/material';
import Logo from "../../images/logo.svg";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import img from "../../images/rits.png"
import '../../styles/HeaderStyles.css';
import {NavLink} from 'react-router-dom';
const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    // handle menu click 
    const handleDrawerToggle = () =>{
        setMobileOpen(!mobileOpen);
    }
    // menu drawer
    const drawer = (
        <Box 
        
        onClick ={handleDrawerToggle} sx={{textAlign:'center'}}>
         <Typography color={'gold'} 
         varian="h6" 
         component="div" 
            sx={{flexGrow:1,my:2}}>
            <img src={Logo} alt="logo" height={"50"} width={"150"}/>
            </Typography>
        <Divider/>
       <ul className="mobile-navigation">
        <li>
            <NavLink activeClassName="active" to={'/'}> Home </NavLink>
        </li>
        <li>
            <NavLink to={'/menu'}> Menu </NavLink>
        </li>
        <li>
            <NavLink to={'/about'}> About </NavLink>
        </li>
        <li>
            <NavLink to={'/contact'}> Contact </NavLink>
        </li>
       </ul>
     </Box>
        
    )
  return (
    <div>
        <Box>
        <AppBar copmonent={'nav'} sx = {{bgcolor:"black"}}>
            <Toolbar>
                <IconButton color="inherit" aria-label="open drawer"
                edge ="start" 
                sx = {{
                mr:2,
                display:{sm:"none"},}}
                onClick={handleDrawerToggle}
                >
               <MenuOpenIcon/>
                </IconButton>
            <Typography 
            color={'gold'} 
            varian="h6" 
            component="div" 
            sx={{flexGrow:1}}>
            <img src={img} alt="logo"hieght={'20px' } width="100" />
            </Typography>
     <Box sx={{display: {xs: "none", sm: "block"}}}>
       <ul className="navigation-menu">
        <li>
            <NavLink to={'/'}> Home </NavLink>
        </li>
        <li>
            <NavLink to={'/menu'}> Menu </NavLink>
        </li>
        <li>
            <NavLink to={'/about'}> About </NavLink>
        </li>
        <li>
            <NavLink to={'/contact'}> Contact </NavLink>
        </li>
       </ul>
     </Box>
            </Toolbar>
        </AppBar>
        <Box component="nav">
           <Drawer variant="temporary" 
           open={mobileOpen} 
           onClose={handleDrawerToggle}
           sx={{
            display:{xs:'block',sm:'none'},
            "&.MuiDrawer-paper":{
                boxSizing: "border-box",
                width:"240px",
            },
            }}>
           {drawer}
           </Drawer>

        </Box>
         <Toolbar/>
        </Box>

        
        
    </div>
  );
};

export default Header;