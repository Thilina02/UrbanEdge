import React from 'react';
import Grid from '@mui/material/Grid';
import { Paper, Typography } from '@mui/material';
import { Card,CardMedia,CardContent,CardActions } from '@mui/material';
import Footer from '../components/Footer';
import Homeimg11 from '../images/Homeimg1.avif';
import Homeimg2 from '../images/Homeimg2.avif';
import Homeimg3 from '../images/Homeimg3.avif';
import Homeimg4 from '../images/Homeimg4.avif';
import Homeimg5 from '../images/Homeimg5.avif';
import Homeimg6 from '../images/Homeimg6.avif';
import Homeimg7 from '../images/Homeimg7.avif';
import Showcase1 from '../images/showcase1.jpg';
import Showcase2 from '../images/showcase2.jpg';
import Showcase4 from '../images/showcaseimg6.jpg';
import Showcase5 from '../images/showcase5.jpeg';
import Homeimg8 from '../images/Homeimg8.avif';
import { Button } from "@mui/material";
import Navbar from '../components/Navbar';
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

      <Grid container xs={8.8}>
        <Grid xs={12}>
        <Typography variant='h3' style={{fontWeight:"bold", marginTop:"10vh"}}>Tell us what are you looking for?</Typography>
      <Typography variant='body1' style={{  marginTop:"1vh", marginBottom:"3vh"}}>
        Choose from a vast array of residential or commercial properties that
        we have listed for sale or rental.
      </Typography>

        </Grid>
      </Grid>

      
    <div className='ShowCaseBpox' >
            
    </div>
    {/* Grid starts here*/ }
      <Grid container xs={12}  style={{ display:"fixed", justifyContent:"center" }}  >
        <Grid xs={2} style={{ margin: '0 1rem' }}>
        <Paper elevation={3}>
        <Card sx={{ maxWidth: 400}}>
      <CardMedia
        sx={{ height: 140}}
        image={Showcase4}
        title="House"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          House
        </Typography>
        <Typography variant="body2" color="text.secondary">
         House for sale
        </Typography>
        <Typography variant="body2" color="text.secondary">
         AluthGama
        </Typography>
        <Typography variant="body2" color="text.secondary">
         LKR 1,700,000
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small">See More</Button>
      </CardActions>
    </Card>
    </Paper>

        </Grid>
        
        <Grid xs={2} style={{ margin: '0 1rem' }}>
        <Paper elevation={3} >
        <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140}}
        image={Showcase2}
        title="Apartment"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Apartment
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Apartment for rent
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Athurugiriya
        </Typography>
        <Typography variant="body2" color="text.secondary">
         LKR 1,200,00
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">See More</Button>
      </CardActions>
    </Card>
    </Paper>

        </Grid>
        
        <Grid xs={2} style={{ margin: '0 1rem' }}>
        <Paper elevation={3}  >
        <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140}}
        image={Showcase1}
        title="Apartment"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Apartment
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Apartment for sale
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Homagama
        </Typography>
        <Typography variant="body2" color="text.secondary">
         LKR 1,7900,000
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">See More</Button>
      </CardActions>
    </Card>
    </Paper>

        </Grid>
        <Grid xs={2} style={{ margin: '0 1rem' }}>
        <Paper elevation={3}  >
        <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140}}
        image={Showcase5}
        title="Villa"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Villa
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Villa for sale
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Alpitiya
        </Typography>
        <Typography variant="body2" color="text.secondary">
         LKR 1,800,000
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">See More</Button>
      </CardActions>
    </Card>
    </Paper>

        </Grid>
       
        </Grid>
        <Button
      variant="contained"
      color="primary" style={{marginTop:"5vh"}}
      component={RouterLink} to="/List-with-us-add"
     
    >
     Tell Us
    </Button>

   
    <div className='PropertyListing' style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='propListing-container'>
      <Grid container xs={7.3}  style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', marginTop:'70px'  }}>
      <Grid xs={9}>
      <Typography variant='h3' style={{ fontWeight:"bold", fontSize:"40px", textAlign: 'center'}}>List your property with us</Typography>
        <Typography variant='h6' style={{ fontWeight:"bold" , textAlign: 'center'}}>Sri Lanka's Best And Largest Real State Portfolio</Typography>
        <Button variant='contained'
        style={{marginTop: '1rem'}}
        component={RouterLink} to="/List-with-us"
        >List here</Button>

      </Grid>
      
    </Grid>
      </div>
      
      
    </div>

    <Grid container xs={9} style={{margin:"30px"}}>
      <Grid xs={12}>
      <Typography variant='h3' style={{fontWeight:"bold"}}>Our services</Typography>
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
        <Typography variant='h3' style={{fontWeight:"bold"/*,  marginLeft:"-114vh", marginTop:"10vh"*/}}>Why UrbanEdge</Typography>
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


        <Grid xs={4} sx={{marginTop:'5vh'}}>
        <div className='cardddd' >
          <div className="cardd">
            <div className="cardd-content">
              <Typography className="cardd-title">Transparent and Customer-Centric Approach
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


        <Grid xs={4} sx={{marginTop:'5vh'}}>
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


        <Grid xs={4} sx={{marginTop:'5vh'}}>
        <div className='cardddd' >
          <div className="cardd">
            <div className="cardd-content">
              <Typography className="cardd-title">Innovative Design for Modern Lifestyles
              </Typography><Typography className="cardd-para">
              UrbanEdge stands apart with its innovative and modern designs, 
              meticulously crafted to complement and enhance the urban lifestyle. 
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
