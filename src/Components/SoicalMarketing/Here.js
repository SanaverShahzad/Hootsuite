import React from 'react'
import { Box, Container, Grid, Button,FormControlLabel, IconButton, Fab,Hidden} from "@material-ui/core";
import Adds from '../Assets/img/hootsuite-ads.png'
import {useStyles} from '../SoicalMarketing/Style'
import platform from '../Assets/img/hootsuite-platform.png'
import bookpost from '../Assets/img/Hootsuite_SocialMarketing_Illustration1@2x.png'


import ScrollAnimation from 'react-animate-on-scroll';


export default function Here() {
    const classes = useStyles();
    return (
        <>
<ScrollAnimation animateIn="fadeIn">
          <Box bgcolor="#fff" py={4}>
          <Container className="inner-container">
             
              <Box  my={2}  textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular" className={classes.extend}>Extend your social marketing reach by growing a more engaged audience</Box>
            <Grid container>
            <Hidden smDown>
                <Grid item lg={6} md={6} sm={6} >
               <div className={classes.heremargin}>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Build your social audience <span className={classes.across}> across multiple networks with solutions for social publishing, scheduling, and more.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Target messages<span className={classes.across}> by location or demographic profile, and schedule them to post at the best time—automatically.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Empower regional teams<span className={classes.across}> to market locally while maintaining control of your global brand voice.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Boost your social advertising<span className={classes.across}> performance through campaign optimization features and services.</span> </Box>
                <Box  mt={4}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Do it with these PEDDLE products:</Box>
              
              <Box> <IconButton href="/adds" ><img  src={Adds} width={56} height={67} /> </IconButton> <span><IconButton href="/adds" ><img  src={platform} width={56} height={67} /> </IconButton></span></Box>
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
              
              <Box> <IconButton href="/adds" ><img  src={Adds} width={56} height={67} /> </IconButton> <span><IconButton href="/adds" ><img  src={platform} width={56} height={67} /> </IconButton></span></Box>
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
