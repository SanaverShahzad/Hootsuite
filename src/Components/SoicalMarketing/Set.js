import React from 'react'
import { Box, Container, Grid, Button,FormControlLabel, IconButton, Fab,Hidden} from "@material-ui/core";

import {useStyles} from '../SoicalMarketing/Style'
import enterprise from '../Assets/img/enterprise-training-services.png'
import platform from '../Assets/img/hootsuite-platform.png'
import partners from '../Assets/img/hootsuite-partners.png'
import bookpost from '../Assets/img/organization@3x.jpg'
import ScrollAnimation from 'react-animate-on-scroll';


export default function Here() {
    const classes = useStyles();
    return (
        <>
<ScrollAnimation animateIn="fadeIn">
          <Box bgcolor="#fff" py={4}>
          <Container className="inner-container">
             
              <Box  my={2}  textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular" className={classes.extend}>Set your organization up for success with expert dashboard training and social media education</Box>
            <Grid container spacing={3}>
            <Hidden smDown>
                <Grid item lg={6} md={6} sm={6} >
               <div className={classes.heremargin}>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Onboard teams quickly<span className={classes.across}>and speed your time to value with help from our professional services team.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Train employees<span className={classes.across}> to give them the skills and confidence they need to drive your social media strategy.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">See results faster<span className={classes.across}>with a customized social media strategy developed with our professional services team.</span> </Box>
                 <Box  mt={4} mb={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Do it with these PEDDLE products and services:</Box>
              
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
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Guard against hackers<span className={classes.across}> —and many other external threats—with full account audits, network monitoring, and real-time security alerts.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Cut the risk of employee error<span className={classes.across}>with secure logins, custom approval workflows, and flexible team and individual permission levels.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Protect your brand<span className={classes.across}>while confidently engaging with customers, using our advanced message moderation features.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Stay compliant<span className={classes.across}>with bodies like FINRA and HIPPA through our industry leading integrations with Actiance, Proofpoint and Smarsh.</span> </Box>
                <Box  mt={6}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Do it with these PEDDLE products, partners and services:</Box>
              
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
