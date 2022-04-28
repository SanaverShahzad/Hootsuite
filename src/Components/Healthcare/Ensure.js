import React from 'react'
import { Box, Container, Grid, Button,FormControlLabel, IconButton, Fab,Hidden} from "@material-ui/core";
import Adds from '../Assets/img/hootsuite-ads.png'
import {useStyles} from '../SoicalMarketing/Style'
import platform from '../Assets/img/hootsuite-platform.png'
import bookpost from '../Assets/img/compliance.png'


import ScrollAnimation from 'react-animate-on-scroll';


export default function Here() {
    const classes = useStyles();
    return (
        <>
<ScrollAnimation animateIn="fadeIn">
          <Box bgcolor="#fff" py={4}>
          <Container className="inner-container">
             
              <Box  my={2}mb={4}  textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular" className={classes.extend}>Ensure compliance with industry regulations</Box>
            <Grid container spacing={6}>
            <Hidden smDown>
                <Grid item lg={6} md={6} sm={6} >
               <div className={classes.heremargin}>
                <Box  my={2} mb={4} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Paddle security solutions provide a scalable platform <span className={classes.across}> to secure your social assets, implement secure processes, and flag posts or comments that may violate industry regulations. </span> </Box>
               
              <div className={classes.toolbarButtons}>
                  
                  <Button variant="contained" color="secondary">
                  Watch a Demo Now
         </Button>
                   </div>
                </div>
                </Grid>
                <Grid item lg={6} md={6}  sm={6} >
                    <img src={bookpost} width="366" height="279px" />
                    
                </Grid>
                </Hidden>
                <Hidden mdUp>
                
                <Grid item lg={6} md={6}  sm={6} xs={12} >
                    <img src={bookpost} width="100%" />
                    
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12} >
                <div className={classes.heremargin}>
                <Box  my={2} mb={4} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Paddle security solutions provide a scalable platform <span className={classes.across}> to secure your social assets, implement secure processes, and flag posts or comments that may violate industry regulations. </span> </Box>
               
              <div className={classes.toolbarButtons}>
                  
                  <Button variant="contained" color="secondary">
                  Watch a Demo Now
         </Button>
                   </div>
                </div>
                </Grid>
                </Hidden>
            </Grid>
              
              </Container>
              </Box>  
              </ScrollAnimation>
        </>
    )
}
