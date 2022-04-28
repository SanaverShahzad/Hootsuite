import React from 'react'
import { Box, Container, Grid, Button,FormControlLabel, IconButton, Fab,Hidden} from "@material-ui/core";
import Adds from '../Assets/img/hootsuite-ads.png'
import {useStyles} from '../SoicalMarketing/Style'
import platform from '../Assets/img/hootsuite-platform.png'
import bookpost from '../Assets/img/Ui-image-2hs-image.png'


import ScrollAnimation from 'react-animate-on-scroll';


export default function Here() {
    const classes = useStyles();
    return (
        <>
<ScrollAnimation animateIn="fadeIn">
          <Box bgcolor="#fff" py={4}>
          <Container className="inner-container">
             
                <Grid container>
            <Hidden smDown>
                <Grid item lg={6} md={6} sm={6} >
               <div className={classes.heremargin}>
                <Box  my={2}  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">Customer success </Box>
                <Box className={classes.across}> Our customer success specialist is a dedicated partner whose job is to make sure your social media activities operate smoothly, to help you deliver timely results for your clients.</Box>
                <Box  my={2}  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">Advertising optimization </Box>
                <Box className={classes.across}>Make the most of your campaigns and drive value for your clients with tactical and strategic guidance from seasoned social ad experts.</Box>

               
                </div>
                </Grid>
                <Grid item lg={6} md={6}  sm={6} >
                    <Box mt={8}>
                    <img src={bookpost} width="120%" height="453px" />
                    </Box>
                </Grid>
                </Hidden>
                <Hidden mdUp>
                
                <Grid item lg={6} md={6}  sm={12} xs={12} >
                    <img src={bookpost} width="100%" />
                    
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12} >
                <div className={classes.heremargin}>
                <Box  my={2}  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">Customer success </Box>
                <Box className={classes.across}> Our customer success specialist is a dedicated partner whose job is to make sure your social media activities operate smoothly, to help you deliver timely results for your clients.</Box>
                <Box  my={2}  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">Advertising optimization </Box>
                <Box className={classes.across}>Make the most of your campaigns and drive value for your clients with tactical and strategic guidance from seasoned social ad experts.</Box>

               
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
