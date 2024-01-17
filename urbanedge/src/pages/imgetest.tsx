import React from 'react'

import Showcase2 from '../images/showcase2.jpg';
import Showcase4 from '../images/showcaseimg6.jpg';
import { Button } from "@mui/material";
import Showcase5 from '../images/showcase5.jpeg';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Paper, Typography } from '@mui/material';
import { Card,CardMedia,CardContent,CardActions } from '@mui/material';
import './img.css'


function imgetest() {
  return (
    <div>
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
    </div>
  )
}

export default imgetest