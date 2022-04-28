import React from 'react'
import { Box, Container, Grid,} from "@material-ui/core";

import Plannerhouse from '../Assets/img/Hootsuite_Facebook_EngagementWithVideo_Illustration.png'
import {useStyles} from '../Publish/Style'
import Compose from '../Assets/img/Hootsuite_SpeedWithScheduling_Illustration.png'
import Planpost from '../Assets/img/Hootsuite_Facebook_MonitorAndRespond_Illustration.png'
import Bookpost from '../Assets/img/Hootsuite_Facebook_AddPowerToPosts_Illustration.png'
import ImprovePerformance from '../Assets/img/Hootsuite_Facebook_ImprovePerformance_Image.png'
import Facebook from '../Assets/img/Hootsuite_Facebook_ManageWherever_Illustration.png'


import ScrollAnimation from 'react-animate-on-scroll';



export default function Here() {
    const classes = useStyles();
    return (
        <>
<ScrollAnimation animateIn="fadeIn">
          <Box bgcolor="#fff" py={4}>
          <Container className="inner-container">
             
              <Box  my={2}  textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular">Save time and increase your Facebook engagement</Box>
              <Grid container spacing={3}>
                 
                  
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Ignite engagement with Facebook Video
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      It’s no secret: videos and images attract more clicks, fans, and conversations on Facebook. Easily upload and schedule Facebook Videos and visual content right from PEDDLE.
                      </Box>
                      </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box mb={2} mt={6}>
                      <img src={Plannerhouse} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                      <img src={Compose} width="90%" height="auto" />
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan2}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Gain speed with scheduling
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Schedule hundreds of Facebook messages in advance. Coordinate global campaigns in different time zones. Or quickly pick a small batch of daily messages to be published throughout the day.
                      </Box>
                      </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Efficiently monitor and respond to messages

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Collaborate as a team on incoming private messages, comments, and posts to your Facebook Page. Monitor all your page activity in one place, then quickly respond to key conversations, or assign them to the right person or team for action.
                      </Box>
                      </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                      <img src={Planpost} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                      <img src={Bookpost} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Add power to your posts

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Increase the reach of your top performing organic content by boosting it directly from the dashboard. Set rules for when to boost posts and which audiences you want to reach.
                      </Box>
                      </div>
                  </Grid>
                
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Pick a business goal. Improve your performance.

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Pick a metric, track your progress, and prove your impact with visual reports. From automated custom reports for multiple clients to detailed audience insights, you’ll see exactly what works on Facebook and why.
                      </Box>
                      </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                      <img src={ImprovePerformance} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                      <img src={Facebook} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Manage Facebook wherever you like

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      You don’t need to be at work to get work done. Schedule Facebook content you discover while reading on your phone. Answer comments. Assign tasks to your team. All from your iPhone, iPad, or Android.
                      </Box>
                      </div>
                  </Grid>
                  
                  
                  
                  
                  
                 
                  

              </Grid>
              
              
              </Container>
              </Box>  
              </ScrollAnimation>
        </>
    )
}
