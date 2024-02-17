import React from 'react';

import Homeimg11 from '../images/Homeimg1.avif';
import Homeimg2 from '../images/Homeimg2.avif';
import Homeimg3 from '../images/Homeimg3.avif';
import Homeimg4 from '../images/Homeimg4.avif';
import Homeimg5 from '../images/Homeimg5.avif';
import Homeimg6 from '../images/Homeimg6.avif';
import Homeimg7 from '../images/Homeimg7.avif';
import Showcase1 from '../images/showcase1.avif';
import Showcase2 from '../images/showcase2.jpg';
import Showcase3 from '../images/showcase3.jpg';
import Showcase7 from '../images/showcaseimg7.jpeg';
import Showcase4 from '../images/showcaseimg6.jpg';
import Showcase5 from '../images/showcase5.jpeg';
import Homeimg8 from '../images/Homeimg8.avif';
import { Stack,  Button } from "@mui/material";
import Navbar from '../Navbars/Navbar';
import './Home.css';



export const CheckHome = () => {
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
      <div>
        
      </div>
      {/*Showcase property section */}
      <h1 style={{marginLeft:"-125vh", marginTop:"10vh", fontWeight:"bold", fontSize:"45px"}}>Showcase property</h1>
      <p style={{marginLeft:"-80vh", marginTop:"3vh"}}>Choose from a vast array of residential or commercial properties that we have listed for sale or rental.</p>
      <div className='frame-container'>
      <div className="frame">
           {<h4 style={{textAlign:"center", justifyContent:"center"}}>Land</h4>}
            <img className="img11"  style={{
      display: "fixed",
      height: "50vh", // Set height to 100% to fit the frame
      width: "40vh", // Set width to 100% to fit the frame
      objectFit: "cover",
      marginLeft:"-4.3vh" // Maintain aspect ratio and cover the frame
    }} src={Showcase4} alt="Food 3" />
            <p className='para'>
              <h3>Land for sale</h3><br></br>
              <h4>Aluthgama</h4><br></br>
              <h6>LKR 1,700,800</h6>
            </p>
           <Stack direction={'row'}>
            <Button  className='btnShowCase' variant='contained' color='primary' style={{marginLeft:"10vh", marginTop:"-1vh"}}> see</Button>
           </Stack>
              
           
          </div>
          <div className="frame">
            <h4 style={{textAlign:"center", justifyContent:"center"}}>Apartment</h4>
            <img className="img11"  style={{
      display: "fixed",
      height: "50vh", // Set height to 100% to fit the frame
      width: "40vh", // Set width to 100% to fit the frame
      objectFit: "cover",
      marginLeft:"-4.3vh" // Maintain aspect ratio and cover the frame
    }}  src={Showcase2} alt="Food 3" />
            <p className='para'>
              <h3>Apartment for rent</h3><br></br>
              <h4>Athurugiriya</h4><br></br>
              <h6>LKR 1,543,80</h6>
            </p>
           <Stack direction={'row'}>
            <Button variant='contained' color='primary' style={{marginLeft:"10vh", marginTop:"-2vh"}}> see</Button>
           </Stack>
              
           
          </div>
          <div className="frame">
            <h4 style={{textAlign:"center", justifyContent:"center"}}>House</h4>
            <img className="img11"  style={{
      display: "fixed",
      height: "50vh", // Set height to 100% to fit the frame
      width: "40vh", // Set width to 100% to fit the frame
      objectFit: "cover",
      marginLeft:"-4.3vh" // Maintain aspect ratio and cover the frame
    }} src={Showcase1} alt="Food 3" />
            <p className='para'>
              <h3>House for rent</h3><br></br>
              <h4>Colombo 5</h4><br></br>
              <h6>LKR 1,683,800</h6>
            </p>
           <Stack direction={'row'}>
            <Button variant='contained' color='primary' style={{marginLeft:"10vh", marginTop:"-1vh"}}> see</Button>
           </Stack>
              
           
          </div>
          <div className="frame">
  <h4 style={{ textAlign: "center", justifyContent: "center" }}>Villa</h4>
  <img
    className="img11"
    style={{
      display: "fixed",
      height: "50vh", // Set height to 100% to fit the frame
      width: "40vh", // Set width to 100% to fit the frame
      objectFit: "cover",
      marginLeft:"-4.3vh" // Maintain aspect ratio and cover the frame
    }}
    src={Showcase5}
    alt="Villa for sale"
  />
  <p className="para">
    <h3>Villa for sale</h3>
    <br></br>
    <h4>Kaduwela</h4>
    <br></br>
    <h6>LKR 1,900,800</h6>
  </p>
  <Stack direction={"row"}>
    <Button
      variant="contained"
      color="primary"
      style={{ marginLeft: "10vh", marginTop: "-2vh" }}
    >
      see
    </Button>
  </Stack>
</div>

   </div>
   <Button
      variant="contained"
      color="primary" style={{marginTop:"5vh"}}
     
    >
      see more 
    </Button>

    {/*Property listing section */}
      <div className='PropertyListing'> 
      <div className='propListing-container'>
      <h1 style={{marginTop:"15vh", marginLeft:"20vh"}}>List your property with us</h1><br></br>
      <h3 style={{marginTop:"22vh", marginLeft:"-57vh"}}>Sri Lanka's Best And Largest Real State Portfolio</h3>
      

      </div>
      <Button
      variant="contained"
      color="primary" style={{marginTop:"-40vh", marginLeft:"20vh"}}
     
    >
      List here
    </Button>
      
      </div>

      {/*Our service*/}
      <div className='OurService' style={{marginLeft:"-30vh"}}>
        <h1 style={{marginLeft:"-73vh", marginTop:"10vh", fontWeight:"bold", fontSize:"45px"}}>Our Services</h1>
            <p style={{marginLeft:"-73vh", marginTop:"2vh", marginBottom:"4vh"}}>
              For a variety of residential and commercial real estate categories, <br></br>
              UrbanEdge provides transaction, marketing, advisory, 
              and management services.</p>
      </div>
     
          
      
      <div className='frame-container'>
      <div className='card'>
      
        <div style={{ color:"white"}}>
        <h3>Transaction Service</h3>
        <p style={{marginTop:"2vh" }}>
        We support individuals, developers, investors, organizations, institutional clients,
         and people exchange real estate in a range of residential and commercial property categories.</p><br/>
        <h4>Buy</h4><br></br>
        <h4>Sell</h4><br></br>
        <h4>Rent</h4><br></br>
        <h4>New Devlopment Sale</h4><br></br>

        </div>
       

      </div>
      <div className='card'>
        <div style={{ color:"white"}}>

        <h3>Consultancy Services</h3>
        <p style={{marginTop:"2vh"}}>
          With a wealth of knowledge and comprehensive data,
          we offer guidance on current market trends and investment opportunities.
          In order to assist you in making wise real estate decisions,
          we utilize our insights to create comprehensive reports on industry updates and economic effects.</p>
        </div>
      </div>
      <div className='card'>
        <div style={{ color:"white"}}>
        <h3>Dedicated Customer Care</h3>
        <p style={{marginTop:"2vh"}}>
          Your satisfaction is our priority. 
          UrbanEdge boasts a dedicated customer care team ready to address your queries and concerns promptly.
          Enjoy peace of mind knowing that our support extends beyond the sale,
          building a lasting relationship with every homeowner.</p>
        

        </div>
        

      </div>
      <div className='card'>
        <div style={{ color:"white"}}>
        <h3>Smart Home Integration</h3>
        <p style={{marginTop:"2vh"}}>
          Step into the future with UrbanEdge's smart home integration services.
          We offer cutting-edge technology solutions to enhance your living experience, 
          from energy-efficient systems to smart home automation.
          Embrace the convenience and efficiency of modern living.</p>

        </div>
        
        

      </div>
      </div>

      {/*Why urban edge section */}
      <div className='WhyUrbanEdge' style={{marginLeft:"50vh"}}>
      <h1 style={{marginLeft:"-73vh", marginTop:"10vh", fontWeight:"bold", fontSize:"45px"}}>Why UrbanEdge</h1>
            <p style={{marginLeft:"-73vh", marginTop:"2vh", marginBottom:"4vh"}}>
            To guarantee that our customers make well-informed real estate decisions,
             our skilled staff combines a thorough understanding of specialized property sectors<br/>
              with a dedication to upholding the highest standards of client care.</p>
      </div>
      
      <div className='cardddd' style={{display:"flex", justifyContent:"space-between"}}>
      <div className="cardd">
        <div className="cardd-content">
          <p className="cardd-title">End-to-end solutions
          </p><p className="cardd-para">
          Regardless of your role in the real estate industry—investor, 
          buyer, developer, financier, landlord, or tenant—we offer a variety of transaction, consulting,
          and management services that give our clients comprehensive answers for a range of real estate needs.
          </p>
        </div>
      </div>

      <div className="cardd" style={{ marginLeft:"20vh"}}>
        <div className="cardd-content">
          <p className="cardd-title">Community-Centric Living
          </p><p className="cardd-para">
            Beyond four walls, UrbanEdge creates communities.
             We design spaces that foster a sense of belonging,
              encouraging social interaction and community engagement.
               Choose us for a living experience that goes beyond the ordinary,
                creating connections that last a lifetime.

      </p>
        </div>
      </div>
      <div className="cardd" style={{ marginLeft:"20vh"}}>
        <div className="cardd-content">
          <p className="cardd-title">Future-Proofed Living Spaces
          </p><p className="cardd-para">
          UrbanEdge is committed to building homes for the future.
           Our projects integrate sustainable practices and smart technologies to ensure that your investment 
           not only stands the test of time but also evolves with the changing needs of modern living.

      </p>
        </div>
      </div>


      </div>
      {/*second column */}
      <div style={{display:"flex", justifyContent:"space-between", marginTop:"10vh", marginLeft:"-20vh"}}>

      <div className="cardd" style={{ marginLeft:"20vh"}}>
        <div className="cardd-content">
          <p className="cardd-title">Transparent and Customer-Centric Approach
          </p><p className="cardd-para">
          Transparency is the cornerstone of our relationship with our customers.
          At UrbanEdge, we believe in clear communication, fair dealings, 
          and a customer-centric approach. Your satisfaction is our priority, 
          and we strive to exceed expectations at every step of the homebuying journey.

      </p>
        </div>
      </div>

      <div className="cardd" style={{ marginLeft:"20vh"}}>
        <div className="cardd-content">
          <p className="cardd-title">Elevated Living, Affordable Luxury
          </p><p className="cardd-para">
          UrbanEdge redefines luxury living by combining sophistication with affordability.
          Our commitment to providing high-end, yet attainable,
          homes ensures that you don't just buy a property,
          you invest in a lifestyle that seamlessly blends opulence and practicality.

      </p>
        </div>
      </div>
      <div className="cardd" style={{ marginLeft:"20vh"}}>
        <div className="cardd-content">
          <p className="cardd-title">Innovative Design for Modern Lifestyles
          </p><p className="cardd-para">
          UrbanEdge stands apart with its innovative and modern designs, 
          meticulously crafted to complement and enhance the urban lifestyle. 
          Our commitment to cutting-edge architecture ensures a unique living experience that mirrors the vibrancy of city living.

      </p>
        </div>
      </div>
    </div>
      
    

      
    </div>
  );
};
