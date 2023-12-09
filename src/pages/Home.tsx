import React from 'react';
import Homeimg11 from '../images/Homeimg1.avif';
import Homeimg2 from '../images/Homeimg2.avif';
import Homeimg3 from '../images/Homeimg3.avif';
import Homeimg4 from '../images/Homeimg4.avif';
import Homeimg5 from '../images/Homeimg5.avif';
import Homeimg6 from '../images/Homeimg6.avif';
import Homeimg7 from '../images/Homeimg7.avif';
import Showcase1 from '../images/showcase1.jpg';
import Showcase2 from '../images/showcase2.jpg';
import Showcase3 from '../images/showcase3.jpg';
import Showcase7 from '../images/showcaseimg7.jpeg';
import Showcase4 from '../images/showcaseimg6.jpg';
import Showcase5 from '../images/showcase5.jpeg';
import Homeimg8 from '../images/Homeimg8.avif';
import { Stack,  Button } from "@mui/material";
import Navbar from '../components/Navbar';
import './Home.css';
export const Home = () => {
  return (
    <div className='container'>
      <Navbar/>
      <div className='UpImages'>
        <div className='TopOne'>
        <h1>UrbanEdge</h1><br></br>
        <p>Discover your self with best option!!</p>
        
        </div>
     
      <div className='box'>
        <span style={{ '--i': 1 } as React.CSSProperties}>
          <img src={Homeimg11} alt='slide1' />
        </span>
        <span style={{ '--i': 2 } as React.CSSProperties}>
          <img src={Homeimg2} alt='slide2' />
        </span>
        <span style={{ '--i': 3 } as React.CSSProperties}>
          <img src={Homeimg3} alt='slide3' />
        </span>
        <span style={{ '--i': 4 } as React.CSSProperties}>
          <img src={Homeimg4} alt='slide4' />
        </span>
        <span style={{ '--i': 5 } as React.CSSProperties}>
          <img src={Homeimg5} alt='slide5' />
        </span>
        <span style={{ '--i': 6 } as React.CSSProperties}>
          <img src={Homeimg6} alt='slide6' />
        </span>
        <span style={{ '--i': 7 } as React.CSSProperties }>
          <img src={Homeimg7} alt='slide7' />
        </span>
        <span style={{ '--i': 8} as React.CSSProperties}>
          <img src={Homeimg8} alt='slide8' />
        </span>
      </div>

      </div>
      <h1 style={{marginLeft:"-145vh", marginTop:"10vh", fontWeight:"bold", fontSize:"45px"}}>Showcase property</h1>
      <p style={{marginLeft:"-104vh", marginTop:"5vh"}}>Choose from a vast array of residential or commercial properties that we have listed for sale or rental.</p>
      <div className='frame-container'>
      <div className="frame">
            <h4 style={{textAlign:"center", justifyContent:"center"}}>Land</h4>
            <img className="img11" src={Showcase7} alt="Food 3" />
            <p className='para'>
              "Explore our mouthwatering menu at See Menu. Indulge in a variety of delicious dishes, crafted with passion and finest ingredients. From savory appetizers to delectable desserts, our menu offers a culinary delight for every palate. Visit See Menu and satisfy your cravings today."
            </p>
           <Stack direction={'row'}>
            <Button variant='contained' color='primary' style={{marginLeft:"10vh"}}> see</Button>
           </Stack>
              
           
          </div>
          <div className="frame">
            <h4 style={{textAlign:"center", justifyContent:"center"}}>Apartment</h4>
            <img className="img11" src={Showcase2} alt="Food 3" />
            <p className='para'>
              "Explore our mouthwatering menu at See Menu. Indulge in a variety of delicious dishes, crafted with passion and finest ingredients. From savory appetizers to delectable desserts, our menu offers a culinary delight for every palate. Visit See Menu and satisfy your cravings today."
            </p>
           <Stack direction={'row'}>
            <Button variant='contained' color='primary' style={{marginLeft:"10vh"}}> see</Button>
           </Stack>
              
           
          </div>
          <div className="frame">
            <h4 style={{textAlign:"center", justifyContent:"center"}}>House</h4>
            <img className="img11" src={Showcase3} alt="Food 3" />
            <p className='para'>
              <h3>House for rent</h3><br></br>
              <h4>Colombo 5</h4><br></br>
              <h6>LKR 1,683,800</h6>
            </p>
           <Stack direction={'row'}>
            <Button variant='contained' color='primary' style={{marginLeft:"10vh"}}> see</Button>
           </Stack>
              
           
          </div>
          <div className="frame">
            <h4 style={{textAlign:"center", justifyContent:"center"}}>Villa</h4>
            <img className="img11" src={Showcase5} alt="Food 3" />
            <p className='para'>
              "Explore our mouthwatering menu at See Menu. Indulge in a variety of delicious dishes, crafted with passion and finest ingredients. From savory appetizers to delectable desserts, our menu offers a culinary delight for every palate. Visit See Menu and satisfy your cravings today."
            </p>
           <Stack direction={'row'}>
            <Button variant='contained' color='primary' style={{marginLeft:"10vh"}}> see</Button>
           </Stack>
              
           
          </div>
          

      </div>
      <div className='aboutUs'>
            <h4>About us?</h4>
          </div>
      
    </div>
  );
};
