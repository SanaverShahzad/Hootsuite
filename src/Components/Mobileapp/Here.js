import React from 'react'
import { Box, Container, Grid,FormControlLabel,Hidden} from "@material-ui/core";

import Plannerhouse from '../Assets/img/Hootsuite_AccessFromAnywhere_Illustration.png'
import {useStyles} from '../Publish/Style'
import Compose from '../Assets/img/Hootsuite_EditAndPost_Illustration.png'
import Planpost from '../Assets/img/Hootsuite_ManageContentSchedule_Illustration.png'
import Bookpost from '../Assets/img/Hootsuite_EngagedWithCustomers_Illustration-1.png'
import ImprovePerformance from '../Assets/img/web_insights_data-500x450.png'
import Facebook from '../Assets/img/Hootsuite_Facebook_ManageWherever_Illustration.png'
import DoneIcon from '@material-ui/icons/Done';
import ScrollAnimation from 'react-animate-on-scroll';



export default function Here() {
    const classes = useStyles();
    return (
        <>
<ScrollAnimation animateIn="fadeIn">
          <Box bgcolor="#fff" >
          <Container className="inner-container">
          
              <Hidden xsDown>
              <Grid container spacing={3}>
                 
              <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box mb={2} mt={6}>
                      <img src={Plannerhouse} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.mobilemargin}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Access PEDDLE from anywhere
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                     Get the PEDDLE app for iPhone, iPad, iPod Touch, and Android.
                      </Box>
                      </div>
                  </Grid>
                
                  
                  
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.mobilemargin}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                 Edit and post content
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Refine content on your mobile phone or tablet while you’re on the go. You can save drafts, schedule posts to be published later, or publish to your social networks right away.
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
                      <div className={classes.mobilemargin}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Manage your social content schedule

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Get a bird’s-eye view of your scheduled posts in a calendar view or list. Schedule posts with a single tap, tweak the timing of your content cadence, and easily approve drafts—anywhere, anytime.
                      </Box>
                      </div>
                  </Grid>
                  
                 
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.mobilemargin}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
               Stay engaged with customers

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Keep the conversation about your brand flowing by monitoring and engaging with your social media streams. Respond to questions or comments, assign inbound messages to the right person using Inbox, and provide unparalleled customer service without missing a beat or tweet.
                      </Box>
                      </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                      <img src={Bookpost} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  

              </Grid>
              </Hidden>
              <Hidden smUp>
              <Grid container spacing={3}>
                 
              <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box mb={2} mt={6}>
                      <img src={Plannerhouse} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.mobilemargin}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Access PEDDLE from anywhere
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                     
                      </Box>
                      </div>
                  </Grid>
                
                  
                  
                  
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                      <img src={Compose} width="90%" height="auto" />
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.mobilemargin}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                 Edit and post content
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Use PEDDLE’s secure platform to work as a team, helping you manage multiple YouTube accounts without the risk of sharing passwords. Monitor YouTube activity alongside your teammates, moderate comments, and share high fives.
                      </Box>
                      </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                      <img src={Planpost} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.mobilemargin}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Manage your social content schedule


                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Get a bird’s-eye view of your scheduled posts in a calendar view or list. Schedule posts with a single tap, tweak the timing of your content cadence, and easily approve drafts—anywhere, anytime.
                      </Box>
                      </div>
                  </Grid>
                  
                 
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                      <img src={Bookpost} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.mobilemargin}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
               Stay engaged with customers

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Keep the conversation about your brand flowing by monitoring and engaging with your social media streams. Respond to questions or comments, assign inbound messages to the right person using Inbox, and provide unparalleled customer service without missing a beat or tweet.
                      </Box>
                      </div>
                  </Grid>
                  

              </Grid>
              </Hidden>
              
              </Container>
              </Box>  
              </ScrollAnimation>
        </>
    )
}
