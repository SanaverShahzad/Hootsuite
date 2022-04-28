import React from 'react'
import { Box, Container, Grid,} from "@material-ui/core";

import Plannerhouse from '../Assets/img/Hootsuite_Twitter_EngageInNewWays_Illustration.png'
import {useStyles} from '../Publish/Style'
import Compose from '../Assets/img/Hootsuite_Twitter_SpeedWithScheduling_Illustration.png'
import Planpost from '../Assets/img/Hootsuite-Assignments-Illustration.png'
import Bookpost from '../Assets/img/Hootsuite_Twitter_ZoomIntoConversations_Illustration.png'
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
             
              <Box  my={2}  textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular">Save time and grow your followers with one platform</Box>
              <Grid container spacing={3}>
                 
              <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box mb={2} mt={6}>
                      <img src={Plannerhouse} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Engage in new ways with videos on Twitter
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Capture meaningful moments and share them with your audience. Easily upload, schedule, and share videos, photos, and GIFs on Twitter right from PEDDLE.
                      </Box>
                      </div>
                  </Grid>
                
                  
                  
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan2}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Increase your speed with scheduling
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Schedule hundreds of messages at once. Plan a week’s worth of Tweets in one sitting. Or quickly schedule a small batch of Tweets to be published throughout the day.
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
                  Answer customers fast—as a team

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      See all your Twitter direct messages in your Inbox for a holistic view of your conversations. It's easy to collaborate with your team, track who's answered what, and assign messages to the right person, team, or region for follow-up.
                      </Box>
                      </div>
                  </Grid>
                  
                 
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Zoom into the conversations that matter
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Twitter can be loud and distracting. Use streams to filter noise into meaningful customer, competitor, and industry conversations. This helps you prioritize your team's actions and increase follower engagement.
                      </Box>
                      </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                      <img src={Bookpost} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                      <img src={ImprovePerformance} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Pick a business goal. Improve your performance.

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Pick a metric, track your progress, and prove your impact with visual reports. From detailed audience insights to automated custom reports for multiple clients, you’ll see exactly what works on Twitter and why.
                      </Box>
                      </div>
                  </Grid>
                  
                  
                  
                  
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Monitor and engage from anywhere

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Make every second count with real-time customer conversations from your iPhone, iPad, or Android. Schedule content, approve Tweets, assign tasks to your team, and stay on-top of activity.
                      </Box>
                      </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                      <img src={Facebook} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  
                  
                  
                 
                  

              </Grid>
              
              
              </Container>
              </Box>  
              </ScrollAnimation>
        </>
    )
}
