import React from 'react';
import Grid from '@mui/material/Grid';
import { Paper, Typography } from '@mui/material';
import { Card,CardMedia,CardContent,CardActions } from '@mui/material';
import Footer from '../Navbars/Footer';
import Homeimg11 from '../images/Homeimg1.avif';
import Homeimg2 from '../images/Homeimg2.avif';
import Homeimg3 from '../images/Homeimg3.avif';
import Homeimg4 from '../images/Homeimg4.avif';
import Homeimg5 from '../images/Homeimg5.avif';
import Homeimg6 from '../images/Homeimg6.avif';
import Homeimg7 from '../images/Homeimg7.avif';
import Homeimg8 from '../images/Homeimg8.avif';
import { Button } from "@mui/material";
import Navbar from '../Navbars/Navbar';
import { Link as RouterLink } from 'react-router-dom';
import './Home.css';



const CheckHome = () => {
  return (
    <div className='container'>
       <Navbar/>
          <div className='UpImages'>
        <div className='TopOne'>
        <h1> Welcome to UrbanEdge</h1><br></br>
        <p>Discover Your Urban Oasis with UrbanEdge Living!!</p>
        
        </div>
     {/* Images at the top*/}
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

      <Grid container xs={5.3}>
        <Grid xs={12}>
        <Typography variant='h4' style={{fontWeight:"bold", marginTop:"10vh", display:'grid',placeItems:'center'}}>Tell us what are you looking for?</Typography>
      <Typography variant='body1' 
      style={{display:'grid',placeItems:'center', padding:'10px'}}>
      Tell us what you need in order for us to help you simplify it.
      </Typography>

        </Grid>
      </Grid>

      <div className='accordion'>
      <ul className='uli'>
        <li className='lilu'>
          <div>
            <a href='#'>
              <h2>UrbanEdge Signature Homes</h2>
              <Typography>Elevate Your Lifestyle in Exceptional Residences</Typography>
            </a>
          </div>
        </li>
        <li className='lilu'>
          <div>
          <a href='#'>
              <h2>UrbanEdge Executive Enclaves</h2>
              <Typography>Elevate Your Workspace Experience in the Pinnacle <br/>of Professional Prestige</Typography>
            </a>
          </div>

        </li>
        <li  className='lilu'>
          <div>
          <a href='#'>
              <h2>UrbanEdge Luxury Residences</h2>
              <Typography>Discover the Epitome of Urban Living Excellence</Typography>
            </a>
          </div>

        </li>
        <li  className='lilu'>
          <div>
          <a href='#'>
              <h2>UrbanEdge Villa Collection</h2>
              <Typography>Unveiling Unmatched Elegance in Exclusive Living <br/>Spaces</Typography>
            </a>
          </div>

        </li>
        
      </ul>
      </div>
      <Button
              variant="contained"
              color="primary" style={{marginTop:"5vh"}}
              component={RouterLink} to="/List-with-us-add"
             
            >
             Tell Us
            </Button>
   

   
    <div className='PropertyListing' >
      <div className='propListing-container'>
      <Grid container xs={9.2} sm={9.5} style={{display:'flex',justifyContent:'center', alignItems:'center'}} >
      <Grid xs={8}>
      <Typography variant='h4' style={{ fontWeight:"bold", fontSize:"40px"}}>List your property with us</Typography>
        <Typography variant='h6' style={{ fontWeight:"bold" }}>Sri Lanka's Best And Largest Real State Portfolio</Typography>
        <Button variant='contained'
        style={{marginTop: '1rem'}}
        component={RouterLink} to="/List-with-us"
        >List here</Button>

      </Grid>
      
    </Grid>
      </div>
      
      
    </div>

    <Grid container xs={9.2} sm={9} style={{margin:"30px"}}>
      <Grid xs={12}>
      <Typography variant='h4' style={{fontWeight:"bold"}}>Our services</Typography>
      <Typography variant='body1' >
          For a variety of residential and commercial real estate categories, <br></br>
          UrbanEdge provides transaction, marketing, advisory, 
          and management services.
      </Typography>

      </Grid>
    </Grid>
  
    
      <div className='frame-container' style={{width:"177vh"}}>
      <div className='card'>
      
        <div style={{ color:"white"}}>
        <Typography variant='h5' color="text.secondary"  style={{fontWeight:"bold", textDecoration:"underline"}}>Transaction Service</Typography>
        <Typography variant='body1' color="text.secondary" style={{marginTop:"2vh" }}>
        We support individuals, developers, investors, organizations, institutional clients,
         and people exchange real estate in a range of residential and commercial property categories.</Typography><br/>
        <Typography variant='body2' color="text.secondary" style={{fontWeight:"bold", textDecoration:"underline"}}>Buy</Typography>
        <Typography variant='body2' color="text.secondary" style={{fontWeight:"bold", marginTop:"1vh", textDecoration:"underline"}}>Sell</Typography>
        <Typography variant='body2' color="text.secondary" style={{fontWeight:"bold", marginTop:"1vh", textDecoration:"underline"}}>Rent</Typography>
   
  
   

        </div>
       

      </div>
      <div className='card'>
      
        <div style={{ color:"white"}}>
        <Typography variant='h5' color="text.secondary"  style={{fontWeight:"bold", textDecoration:"underline"}}>Consultancy Services</Typography>
        <Typography variant='body1' color="text.secondary" style={{marginTop:"2vh" }}>
          With a wealth of knowledge and comprehensive data,
          we offer guidance on current market trends and investment opportunities.
          In order to assist you in making wise real estate decisions,
          we utilize our insights to create comprehensive reports on industry updates and economic effects.</Typography><br/>
       
   

        </div>
       

      </div>
      <div className='card'>
      
        <div style={{ color:"white"}}>
        <Typography variant='h5' color="text.secondary"  style={{fontWeight:"bold", textDecoration:"underline"}}>Smart Home Integration</Typography>
        <Typography variant='body1' color="text.secondary" style={{marginTop:"2vh" }}>
          Step into the future with UrbanEdge's smart home integration services.
          We offer cutting-edge technology solutions to enhance your living experience, 
          from energy-efficient systems to smart home automation.
          Embrace the convenience and efficiency of modern living.</Typography><br/>
        

        </div>
       

      </div>
      
      </div>

      <Grid container xs={9.2} style={{ margin: '36px'}}>
        <Grid xs={12}>
        <Typography variant='h4' style={{fontWeight:"bold"/*,  marginLeft:"-114vh", marginTop:"10vh"*/}}>Why UrbanEdge</Typography>
      <Typography variant='body1'  style={{}}>
          To guarantee that our customers make well-informed real estate decisions,
          our skilled staff combines a thorough understanding of specialized property sectors
          with a dedication to upholding the highest standards of client care.
      </Typography>
       

        </Grid>
      </Grid>
     
 
       <Grid container sx={{flexGrow:1,alignItems:'center', justifyContent:'center',width:'175vh'}} >
        <Grid xs={4}>
        <div className='cardddd' >
          <div className="cardd">
            <div className="cardd-content">
              <Typography className="cardd-title">End-to-end solutions
              </Typography><Typography className="cardd-para">
              Regardless of your role in the real estate industry—investor, 
              buyer, developer, financier, landlord, or tenant—we offer a variety of transaction, consulting,
              and management services that give our clients comprehensive answers for a range of real estate needs.
              </Typography>
            </div>
          </div>
        </div>
          
        </Grid>

        <Grid xs={4}>
        <div className='cardddd' >
          <div className="cardd">
            <div className="cardd-content">
              <Typography className="cardd-title">Community-Centric Living
              </Typography><Typography className="cardd-para">
              Beyond four walls, UrbanEdge creates communities.
              We design spaces that foster a sense of belonging,
              encouraging social interaction and community engagement.
              Choose us for a living experience that goes beyond the ordinary,
              creating connections that last a lifetime.
              </Typography>
            </div>
          </div>
        </div>
          
        </Grid>


        <Grid xs={4}>
        <div className='cardddd' >
          <div className="cardd">
            <div className="cardd-content">
              <Typography className="cardd-title">Future-Proofed Living Spaces
              </Typography><Typography className="cardd-para">
              UrbanEdge is committed to building homes for the future.
              Our projects integrate sustainable practices and smart technologies to ensure that your investment 
              not only stands the test of time but also evolves with the changing needs of modern living.

              </Typography>
            </div>
          </div>
        </div>
          
        </Grid>


        <Grid xs={4} sx={{marginTop:'-5vh'}}>
        <div className='cardddd' >
          <div className="cardd">
            <div className="cardd-content">
              <Typography className="cardd-title">Customer-Centric Approach
              </Typography><Typography className="cardd-para">
              Transparency is the cornerstone of our relationship with our customers.
              At UrbanEdge, we believe in clear communication, fair dealings, 
              and a customer-centric approach. Your satisfaction is our priority, 
              and we strive to exceed expectations at every step of the homebuying journey.
              </Typography>
            </div>
          </div>
        </div>
          
        </Grid>


        <Grid xs={4} sx={{marginTop:'-5vh'}}>
        <div className='cardddd' >
          <div className="cardd">
            <div className="cardd-content">
              <Typography className="cardd-title">Elevated Living, Affordable Luxury
              </Typography><Typography className="cardd-para">
              UrbanEdge redefines luxury living by combining sophistication with affordability.
              Our commitment to providing high-end, yet attainable,
              homes ensures that you don't just buy a property,
              you invest in a lifestyle that seamlessly blends opulence and practicality.
              </Typography>
            </div>
          </div>
        </div>
          
        </Grid>


        <Grid xs={4} sx={{marginTop:'-5vh'}}>
        <div className='cardddd' >
          <div className="cardd">
            <div className="cardd-content">
              <Typography className="cardd-title">Innovative Design for Modern Lifestyles
              </Typography><Typography className="cardd-para">
              UrbanEdge stands apart with its innovative and modern designs
              and enhance the urban lifestyle. 
              Our commitment to cutting-edge architecture ensures a unique living experience 
              that mirrors the vibrancy of city living.
              </Typography>
            </div>
          </div>
        </div>
          
        </Grid>

       
       </Grid>

       <Footer/>
        
       </div>
    
      
    



    

   
  );
};

export default CheckHome;
