import React from 'react'
import { Box, Container, Grid,} from "@material-ui/core";

import Plannerhouse from '../Assets/img/Hootsuite_PinterestCompose_Image.png'
import {useStyles} from '../Publish/Style'
import Compose from '../Assets/img/Hootsuite_ManagePinterest_Image.png'
import Planpost from '../Assets/img/Hootsuite_SingleDashboardPinterest_Image.png'
import Bookpost from '../Assets/img/Hootsuite_PinterestAnalytics_Image.png'
import ImprovePerformance from '../Assets/img/Hootsuite_Twitter_ImproveYourPerformance_Illustration.png'
import Facebook from '../Assets/img/Hootsuite_Twitter_MonitorAndEngage_Illustration.png'


import ScrollAnimation from 'react-animate-on-scroll';



export default function Here() {
    const classes = useStyles();
    return (
        <>
<ScrollAnimation animateIn="fadeIn">
          <Box bgcolor="#fff" py={4}>
          <Container className="inner-container">
             
              <Box  my={2}  textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Bold">Create boards. Schedule. Pin.
Do it all with Pinterest and PEDDLE.</Box>
              <Grid container spacing={3}>
                 
              <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box mb={2} mt={6}>
                      <img src={Plannerhouse} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                
                  Post images and create boards directly from PEDDLE
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Save time and inspire action by easily scheduling and publishing pins from the PEDDLE dashboard. Plus, create new boards on the fly—public or secret—for any Pinterest account.
                      </Box>
                      </div>
                  </Grid>
                
                  
                  
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan2}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Manage Pinterest together as a team
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Protect your brand by using a single, secure, integrated workflow to collaborate and manage multiple accounts. Send pins for approval to ensure all your content is consistent and on-brand.
                      </Box>
                      </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                      <img src={Compose} width="90%" height="auto" />
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                      <img src={Planpost} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Use a single dashboard

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Easily and quickly schedule, view, edit, and delete pins in the same dashboard you use to manage all your social media campaigns and activity.
                      </Box>
                      </div>
                  </Grid>
                  
                 
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Measure your business results
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Connect the dots between your website conversions and Pinterest activity in PEDDLE Impact. You’ll see Pinterest performance alongside metrics from your other social networks.
                      </Box>
                      </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                      <img src={Bookpost} width="100%" height="auto" />
                      </Box>
                  </Grid>
               
                  
                  
                  
                 
                  

              </Grid>
              
              
              </Container>
              </Box>  
              </ScrollAnimation>
        </>
    )
}
