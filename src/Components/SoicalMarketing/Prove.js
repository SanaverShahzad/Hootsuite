import React from 'react'
import { Box, Container, Grid, Button,FormControlLabel, IconButton, Fab,Hidden} from "@material-ui/core";
import {useStyles} from '../SoicalMarketing/Style'
import Adds from '../Assets/img/hootsuite-ads.png'
import enterprise from '../Assets/img/enterprise-training-services.png'
import platform from '../Assets/img/hootsuite-platform.png'
import partners from '../Assets/img/hootsuite-partners.png'

import bookpost from '../Assets/img/Hootsuite_SocialMarketing_Illustration4@2x.png'
import ScrollAnimation from 'react-animate-on-scroll';


export default function Here() {
    const classes = useStyles();
    return (
        <>
<ScrollAnimation animateIn="fadeIn">
          <Box bgcolor="#eeebe8" py={4}>
          <Container className="inner-container">
             
              <Box  my={2}  textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular" className={classes.extend}>Prove the ROI of social and make data-driven decisions</Box>
            <Grid container spacing={3}>
            <Hidden smDown>
                <Grid item lg={6} md={6} sm={6} >
               <div className={classes.heremargin}>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Share real-time insights<span className={classes.across}> by monitoring mentions of your brand, company, products, and competitors.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Measure the impact<span className={classes.across}> of your social marketing campaigns through comprehensive social channel reporting.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Prepare for a crisis <span className={classes.across}>or spikes in social activity through automatic alerts and response simulation planning.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Clearly prove business ROI <span className={classes.across}> from organic and paid social media.</span> </Box>
              
                <Box  mt={4}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Do it with these PEDDLE products:</Box>
              
                <Box><span><IconButton href="/adds" ><img  src={platform} width={56} height={67} /> </IconButton></span>  <span><IconButton href="/adds" ><img  src={enterprise} width={110} height={65} /> </IconButton></span>  <span><IconButton href="/adds" ><img  src={partners} width={56} height={67} /> </IconButton></span> </Box>
                <div className={classes.toolbarButtons}>
                  
                  <Button variant="contained" color="secondary">
                  Watch a Demo Now
         </Button>
                   </div>
                </div>
                </Grid>
                <Grid item lg={6} md={6}  sm={6} >
                    <img src={bookpost} width="100%" />
                    
                </Grid>
                </Hidden>
                <Hidden mdUp>
                
                <Grid item lg={6} md={6}  sm={12} xs={12} >
                    <img src={bookpost} width="100%" />
                    
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12} >
               <div className={classes.heremargin}>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Build your social audience <span className={classes.across}> across multiple networks with solutions for social publishing, scheduling, and more.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Target messages<span className={classes.across}> by location or demographic profile, and schedule them to post at the best time—automatically.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Empower regional teams<span className={classes.across}> to market locally while maintaining control of your global brand voice.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Boost your social advertising<span className={classes.across}> performance through campaign optimization features and services.</span> </Box>
                <Box  mt={4}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Do it with these PEDDLE products:</Box>
              
                <Box><span><IconButton href="/adds" ><img  src={platform} width={56} height={67} /> </IconButton></span>  <span><IconButton href="/adds" ><img  src={enterprise} width={110} height={65} /> </IconButton></span>  <span><IconButton href="/adds" ><img  src={partners} width={56} height={67} /> </IconButton></span> </Box>
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
