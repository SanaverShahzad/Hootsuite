import React from 'react'
import { Box, Container, Grid,FormControlLabel,Hidden} from "@material-ui/core";

import Plannerhouse from '../Assets/img/Hootsuite_EarToGround_Illustration.png'
import {useStyles} from '../Publish/Style'
import Compose from '../Assets/img/Hootsuite_HeartOfConversation_Illustration.png'
import Planpost from '../Assets/img/Hootsuite_ProtectReputation_Illustration.png'
import Bookpost from '../Assets/img/Hootsuite_HeartOfConversation_Illustration.png'
import ImprovePerformance from '../Assets/img/web_insights_data-500x450.png'
import Facebook from '../Assets/img/Hootsuite_Facebook_ManageWherever_Illustration.png'
import DoneIcon from '@material-ui/icons/Done';

import ScrollAnimation from 'react-animate-on-scroll';



export default function Here() {
    const classes = useStyles();
    return (
        <>
<ScrollAnimation animateIn="fadeIn">
          <Box bgcolor="#fff" py={4}>
          <Container className="inner-container">
          <Box  my={2} >
             <Grid container justify="center">
                 <Grid item lg={10} md={9}>
                 <Grid container justify="center" >
                     <Grid item lg={4} md={6} sm={12} xs={12}>
                     <div className={classes.contentcenter2}>
                     <FormControlLabel
        control={<DoneIcon />}
        label={<Box  ml={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">Simplify consumer research</Box> }
      />
      </div>
                     </Grid>
                     <Grid item lg={3} md={6} sm={12} xs={12}>
                     <div className={classes.contentcenter2}>
                     <FormControlLabel
        control={<DoneIcon />}
        label={<Box  ml={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">Monitor trends</Box> }
      />
                  </div>
                     </Grid>
                     <Grid item lg={3} md={12} sm={12} xs={12}>
                         <div className={classes.contentcenter3}>
                     <FormControlLabel
        control={<DoneIcon />}
        label={<Box  ml={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">Protect your brand</Box> }
      />
      </div>
                     </Grid>
                 </Grid>
                 </Grid>
             </Grid>
             
              
              </Box>
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
                  Keep your ear to the ground
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Instant analysis of millions of real-time conversations happening online. Find out what your customers are doing, feeling, and thinking when it comes to your brand.
                      </Box>
                      </div>
                  </Grid>
                
                  
                  
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.mobilemargin}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Get to the heart of the conversation
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Launching a new product? Quickly find out when it’s best to roll it out, identify thought leaders, and find brand advocates that your competitors may miss.
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
                  Protect your reputation

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Sleep soundly knowing that you can set alerts to be notified instantly of any unusual spikes in volume or brand sentiment. Is a customer complaint going viral? Be the first to hear about it so you can get ahead of it.
                      </Box>
                      </div>
                  </Grid>
                  
                 
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.mobilemargin}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Keep your competitive edge

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      From new product releases to service outages, stay on top of what your competition is up to online. Measure risks and opportunities as you track brand sentiment in real time.
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
                      <div className={classes.mobilemargin}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Take the guesswork out of data analysis

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Turn data into insights faster with Iris™, your personal AI analyst. Cut through the noise, uncover emerging trends, and spot important conversations that others miss.
                      </Box>
                      </div>
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
                  Keep your ear to the ground
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Instant analysis of millions of real-time conversations happening online. Find out what your customers are doing, feeling, and thinking when it comes to your brand.
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
                  Get to the heart of the conversation
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
                  Protect your reputation


                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      No more waking up early or staying up late—schedule and share your YouTube videos on your terms. Nothing to publish today? Find relevant YouTube videos from your custom search stream to schedule.
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
                  Keep your competitive edge

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Easily measure subscriber growth, analyze engagement levels, and pinpoint traffic sources with the Channelview Insights app.
                      </Box>
                      </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                      <img src={ImprovePerformance} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.mobilemargin}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Take the guesswork out of data analysis

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Turn data into insights faster with Iris™, your personal AI analyst. Cut through the noise, uncover emerging trends, and spot important conversations that others miss.
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
