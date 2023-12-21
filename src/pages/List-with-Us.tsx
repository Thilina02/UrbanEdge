import React from 'react'
import Navbar from '../components/Navbar'
import { Button, Grid, Typography } from '@mui/material'
import img1 from '../images/HomeBackground.avif'
import './List-with-us.css'
import tProp1 from '../images/Homeimg2.avif'
export const ListwithUs= () => {


  return (
    <div className='covntainer'>
      <Navbar/>

        <Grid container xs={12}   style={{background:'white', minHeight: '40vh',display:'grid',placeItems:'center' }}>
        <Grid xs={12} style={{}} >
          <div >
            <Typography variant='h3'style={{marginTop:'10vh',fontWeight:'bold',fontFamily:' Georgia, serif'}}>List your property with us.</Typography>
            <Typography variant='body1'  color="text.secondary"style={{marginTop:'3vh'}}>
              UrbanEdge ensures a seamless and profitable property
              selling or renting experience through tailored
              strategies and a dedicated team focused on maximizing value.</Typography>
            <Button variant='contained' style={{marginTop:'3vh',marginBottom:'10vh'}}>List here</Button>
          </div>

        </Grid>
          <div style={{borderTop:'2px solid #000', width:'100%', marginTop:'20px'}}></div>
      </Grid>


      <Grid container xs={12}   style={{display:'grid',placeItems:'center',marginTop:'8vh' }}>
        <Grid xs={12} style={{}} >
          <div >
            <Typography variant='h4'
            style={{fontWeight:'800'}}>
            Types Of Property
            </Typography>


            <div>
              
            </div>
            
          </div>

        </Grid>
          
      </Grid>
      <div className="TProperty">
      <img src={tProp1} style={{ minWidth: '100px' }} alt="Description of the image" />
  <div className="TProperty__content">
    <p className="TProperty__title">Card Title</p>
    <p className="TProperty__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>




      {/*Why listing with us */}
      <Grid container xs={12} style={{marginTop:'15vh',display:'grid',placeItems:'center' }}>
        <Grid xs={3}>      
        <Typography variant='h4' style={{fontWeight:'800'}}>Why List With Us?</Typography>
        </Grid>
      </Grid>


      <div className='listingCard'>
      <div className="cardddBox">
        <div className="carddd">
          <div className="h4">Personalized Consultations</div>
        
          <div className="contentt">
            <div className="h3">Personalized Consultations</div>
            <Typography variant='body1'  style={{fontSize:'15px'}}>
              Enjoy personalized consultations with our real
              estate experts who will guide you through every 
              step of the listing process. Whether you're selling
              or renting, we tailor our approach to meet your unique goals,
              ensuring a smooth and stress-free experience.</Typography>
          </div>
        </div>
      </div>

      <div className="cardddBox">
        <div className="carddd">
          <div className="h4">Local Market Knowledge</div>
        
          <div className="contentt">
            <div className="h3">Local Market Knowledge</div>
            <Typography variant='body1'  style={{fontSize:'15px'}}>
            Benefit from our in-depth knowledge of the local market.
            UrbanEdge's team understands the nuances of your neighborhood, 
            enabling us to position your property effectively, set competitive prices,
            and attract the right buyers or tenants.</Typography>
            </div>
        </div>
      </div>

      <div className="cardddBox">
        <div className="carddd">
          <div className="h4">Dedicated Customer Support</div>
        
          <div className="contentt">
            <div className="h3">Dedicated Customer Support</div>
            <Typography variant='body1'  style={{fontSize:'15px'}}>
            Experience top-notch customer support throughout your journey with UrbanEdge.
            Our dedicated team is always ready to address your questions,
            concerns, and needs promptly. We prioritize open communication 
            and transparency to build lasting relationships with our clients.</Typography>          </div>
        </div>
      </div>
       
      </div>


 
        
    </div>
    
  )
}
