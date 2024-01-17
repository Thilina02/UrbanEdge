import React from 'react'
import Navbar from '../components/Navbar'
import { Button, Grid, Typography } from '@mui/material'
import Tvilla from '../images/Tvilla.avif'
import './List-with-us.css'
import Tapartment from '../images/TpropApartment.avif'
import Tlands from '../images/Tlands.avif'
import Thouse from '../images/Thouses.avif'
import Thotel from '../images/Thotels.avif'
import TofficeBuilding from '../images//TofficeBuilding.avif'
import TretailSpace from '../images/Tretailspace.avif'
import Tplantation from '../images/Tplantation&state.avif'
import Tfactory from '../images/Tfactory.avif'
import { Link as RouterLink } from 'react-router-dom';
import Footer from '../components/Footer'
export const ListwithUs= () => {


  return (
    <div className='covntainer'>
      <Navbar/>

        <Grid container xs={12}   style={{background:'white', minHeight: '40vh',display:'grid',placeItems:'center' }}>
        <Grid xs={9} style={{}} >
          <div >
            <Typography variant='h4'style={{marginTop:'10vh',fontWeight:'bold',fontFamily:' Georgia, serif'}}>List your property with us.</Typography>
            <Typography variant='body1'  color="text.secondary"style={{marginTop:'3vh'}}>
              UrbanEdge ensures a seamless and profitable property
              selling or renting experience through tailored
              strategies and a dedicated team focused on maximizing value.</Typography>
            <Button variant='contained' style={{marginTop:'3vh',marginBottom:'10vh'}}  
              component={RouterLink} to="/List-with-us-add">List here</Button>
          </div>

        </Grid>
        
      </Grid>
      <Typography variant='h4'  style={{ display:'grid',placeItems:'center',fontWeight:'800'}}>Types Of Property For Buy</Typography>


      <Grid container xs={12} sx={{width:'175vh',margin:'auto',marginTop:'6vh',fontSize: '20px'}}>
        <Grid xs={4} style={{ }} >
        <div className="TProperty">
          <img src={Tapartment} style={{ minWidth: '100px' }} alt="Description of the image" />
            <div className="TProperty__content">
              <Typography className="TProperty__title">Apartments</Typography>
              <Typography className="TProperty__description">
              UrbanEdge is the preferred choice for apartment buyers 
              due to its expert guidance,local market expertise, customer-centric 
              approach, quality assurance, and end-to-end support. 
              Choosing UrbanEdge ensures that customers find the perfect 
              apartment while enjoying a smooth and satisfying buying process.
              </Typography>
              <Button variant='text' > see</Button>
            </div>
        </div>
        <Typography variant='h6' style={{fontWeight:'800'}}>Apartments</Typography>
        </Grid>

        <Grid xs={4} style={{ }} >
        <div className="TProperty">
          <img src={Tvilla} style={{ minWidth: '100px' }} alt="Description of the image" />
            <div className="TProperty__content">
            <Typography className="TProperty__title">Villas</Typography>
              <Typography className="TProperty__description">
              UrbanEdge stands out as the preferred choice for villa buyers due to its expertise,
              diverse villa portfolio, 
              tailored solutions,
              customer-centric approach, Choosing UrbanEdge ensures that customers 
              find the perfect villa while enjoying a seamless and satisfying buying process.</Typography>
              <Button variant='text'> see</Button>
            </div>
        </div>
        <Typography variant='h6' style={{fontWeight:'800'}}>Villas</Typography>
        </Grid>

        <Grid xs={4} style={{ }} >
        <div className="TProperty">
          <img src={Tlands} style={{ minWidth: '100px' }} alt="Description of the image" />
            <div className="TProperty__content">
            <Typography className="TProperty__title">Lands</Typography>
              <Typography className="TProperty__description">
              UrbanEdge stands out as the preferred choice for land buyers due to its 
              diverse land portfolio, tailored solutions, 
              customer-centric approach, and end-to-end support. 
              Choosing UrbanEdge ensures that customers make informed and satisfying 
              land investments that align with their unique vision and goals.</Typography>
              <Button variant='text'> see</Button>
              </div>
        </div>
        <Typography variant='h6' style={{fontWeight:'800'}}>Lands</Typography>
        </Grid>

        <Grid xs={4} style={{}} >
        <div className="TProperty">
          <img src={Thouse} style={{ minWidth: '100px' }} alt="Description of the image" />
            <div className="TProperty__content">
            <Typography className="TProperty__title">Houses</Typography>
              <Typography className="TProperty__description">
              UrbanEdge emerges as the top choice for house buyers by offering expert guidance,
              a diverse and tailored selection, local insight, a customer-centric experience, 
              quality assurance, and comprehensive support. 
              Choosing UrbanEdge means embarking on a personalized and rewarding journey to find the perfect home.
              </Typography>
              <Button variant='text'> see</Button>
              </div>
        </div>
        <Typography variant='h6' style={{fontWeight:'800'}}>Houses</Typography>
        </Grid>

        <Grid xs={4} style={{ }} >
        <div className="TProperty">
          <img src={Thotel} style={{ minWidth: '100px' }} alt="Description of the image" />
            <div className="TProperty__content">
            <Typography className="TProperty__title">Hotels</Typography>
              <Typography className="TProperty__description">
              UrbanEdge stands out as the preferred choice for hotel buyers due 
              to its expertise in hospitality real estate, 
              local market understanding, quality assurance, and comprehensive support. 
              Choosing UrbanEdge ensures that customers make informed and profitable investments in the dynamic hotel industry.</Typography>
              <Button variant='text'> see</Button>
              </div>
        </div>
        <Typography variant='h6' style={{fontWeight:'800'}}>Hotels</Typography>
        </Grid>

        <Grid xs={4} style={{}} >
        <div className="TProperty">
          <img src={TofficeBuilding} style={{ minWidth: '100px' }} alt="Description of the image" />
            <div className="TProperty__content">
            <Typography className="TProperty__title">Office Building</Typography>
              <Typography className="TProperty__description">
              selecting UrbanEdge for your office building purchase is choosing 
              a partner invested in the success, growth, and unique identity of your business. 
              It's not just a transaction; it's a strategic step toward a workspace that mirrors 
              your vision and propels your business forward.</Typography>
              <Button variant='text'> see</Button>
              </div>
        </div>
        <Typography variant='h6' style={{fontWeight:'800'}}>Office Building</Typography>
        </Grid>

        <Grid xs={4} style={{}} >
        <div className="TProperty">
          <img src={TretailSpace} style={{ minWidth: '100px' }} alt="Description of the image" />
            <div className="TProperty__content">
            <Typography className="TProperty__title">Retail Space</Typography>
              <Typography className="TProperty__description">
              UrbanEdge emerges as the preferred choice for retail space 
              buyers by offering expert navigation in retail real estate, 
              and comprehensive support for 
              every stage of the business journey. Choosing UrbanEdge 
              ensures that customers embark on a retail venture with 
              confidence and a strategic edge.</Typography>
              <Button variant='text'> see</Button>
              </div>
        </div>
        <Typography variant='h6' style={{fontWeight:'800'}}>Retail Space</Typography>
        </Grid>

        <Grid xs={4} style={{}} >
        <div className="TProperty">
          <img src={Tplantation} style={{ minWidth: '100px' }} alt="Description of the image" />
         
            <div className="TProperty__content">
            <Typography className="TProperty__title">Plantation & Estate</Typography>
              <Typography className="TProperty__description">
              UrbanEdge emerges as the preferred choice for buyers of plantation and estate properties 
              by offering stewardship,
              ecological wisdom,  
              and comprehensive support for turning dreams into reality. Choosing UrbanEdge 
              ensures that customers acquire not just properties.</Typography> 
              <Button variant='text'> see</Button>
              </div>
        </div>
        <Typography variant='h6' style={{fontWeight:'800'}}>Plantation & Estate</Typography>
        </Grid>

        <Grid xs={4} style={{}} >
        <div className="TProperty">
          <img src={Tfactory} style={{ minWidth: '100px' }} alt="Description of the image" />
            <div className="TProperty__content">
            <Typography className="TProperty__title">Factories</Typography>
              <Typography className="TProperty__description">
              UrbanEdge emerges as the preferred choice for buyers of factories 
              by offering a architectural ingenuity and 
              comprehensive support for transforming industrial 
              aspirations into reality. UrbanEdge ensures 
              that customers acquire not just factories but dynamic spaces that fuel industrial 
              progress and growth.</Typography>
              <Button variant='text'> see</Button>
              </div>
        </div>
        <Typography variant='h6' style={{fontWeight:'800'}}>Factories</Typography>
        </Grid>
      </Grid>
      



      {/*Why listing with us */}
      <Grid container xs={12} style={{marginTop:'15vh',display:'grid',placeItems:'center' }}>
        <Grid xs={6}>      
        <Typography variant='h4' style={{fontWeight:'800'}}>Why List With Us?</Typography>
        </Grid>
      </Grid>


      <div className='listingCard' style={{marginBottom:'10vh'}}>
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


 <Footer/>
        
    </div>
    
  )
}
