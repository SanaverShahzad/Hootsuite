import React from 'react'
import { Box, Container, Grid, Button,FormControlLabel, IconButton, Fab,Hidden} from "@material-ui/core";

import {useStyles} from '../SoicalMarketing/Style'
import enterprise from '../Assets/img/enterprise-training-services.png'
import platform from '../Assets/img/hootsuite-platform.png'

import partners from '../Assets/img/hootsuite-partners.png'
import bookpost from '../Assets/img/Hootsuite_SocialMarketing_Illustration3@2x.png'
import ScrollAnimation from 'react-animate-on-scroll';


export default function Here() {
    const classes = useStyles();
    return (
        <>
<ScrollAnimation animateIn="fadeIn">
          <Box bgcolor="#fff" py={4}>
          <Container className="inner-container">
             
              <Box  my={2}  textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular" className={classes.extend}>Protect your brand, manage your risk, and stay compliant</Box>
            <Grid container spacing={3}>
            <Hidden smDown>
                <Grid item lg={6} md={6} sm={6} >
               <div className={classes.heremargin}>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Manage platform access <span className={classes.across}> for reps, contractors, or partners as your sales team grows and changes.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Set publishing permissions<span className={classes.across}> to ensure only approved sales reps can post to company accounts.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Cut the risk<span className={classes.across}> of employee error and stay compliant with custom publishing approvals, and content libraries.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Stay on brand <span className={classes.across}> and compliant by creating preapproved content for your sales team to share with prospects.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Stay compliant <span className={classes.across}> with bodies like FINRA and HIPPA through our industry leading integrations with ZeroFOX, Actiance, Proofpoint and Smarsh.</span> </Box>
                
                <Box  mt={4}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Do it with these PEDDLE products, partners and services:</Box>
              
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
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Manage platform access <span className={classes.across}> for reps, contractors, or partners as your sales team grows and changes.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Set publishing permissions<span className={classes.across}> to ensure only approved sales reps can post to company accounts.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Cut the risk<span className={classes.across}> of employee error and stay compliant with custom publishing approvals, and content libraries.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Stay on brand <span className={classes.across}> and compliant by creating preapproved content for your sales team to share with prospects.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Stay compliant <span className={classes.across}> with bodies like FINRA and HIPPA through our industry leading integrations with ZeroFOX, Actiance, Proofpoint and Smarsh.</span> </Box>
                
                <Box  mt={4}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Do it with these PEDDLE products, partners and services:</Box>
              
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
