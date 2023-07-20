import React from 'react'
import Layout from '../components/Layout/Layout';
import { Link } from '@mui/material';
import cafe from '../images/cafe.png';
import '../styles/HomeStyles.css';
const Home = () => {
  return (
    <Layout> 
       <div className="home" style={{backgroundImage: `url(${cafe})`}}>
       <div className="headerContainer">
        <h1> Food Mania</h1>
        <p>Best Food in Bilaspur City</p>
         <Link to="/menu">
          <button> ORDER NOW</button>
         </Link>
         

       </div>
    
       </div>
    </Layout>
  )
}

export default Home;