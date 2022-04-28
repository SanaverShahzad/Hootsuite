import React from 'react'
import { Box, Container, Grid,FormControlLabel,Hidden} from "@material-ui/core";

import Plannerhouse from '../Assets/img/illo_1_500x574.png'
import {useStyles} from '../Publish/Style'
import Compose from '../Assets/img/illo_2_421x500.png'
import Planpost from '../Assets/img/illo_3_483x500.png'
import Bookpost from '../Assets/img/illo_4_424x500.png'
import ImprovePerformance from '../Assets/img/illo_05_449x500.png'
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
                 <Grid item lg={11} md={9}>
                 <Grid container>
                     <Grid item lg={4} md={6} sm={12} xs={12}>
                     <div className={classes.contentcenter2}>
                     <FormControlLabel
        control={<DoneIcon />}
        label={<Box  ml={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">Measure campaign performance</Box> }
      />
      </div>
                     </Grid>
                     <Grid item lg={4} md={6} sm={12} xs={12}>
                     <div className={classes.contentcenter2}>
                     <FormControlLabel
        control={<DoneIcon />}
        label={<Box  ml={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">Optimize social media strategy</Box> }
      />
                  </div>
                     </Grid>
                     <Grid item lg={4} md={12} sm={12} xs={12}>
                         <div className={classes.contentcenter}>
                     <FormControlLabel
        control={<DoneIcon />}
        label={<Box  ml={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">Share insights across the business</Box> }
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
                  One platform to increase your reach
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Easily schedule and share YouTube videos across all your social networks right from PEDDLE.
                      </Box>
                      </div>
                  </Grid>
                
                  
                  
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.mobilemargin}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Team up on YouTube tasks
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Use PEDDLE’s secure platform to work as a team, helping you manage multiple YouTube accounts without the risk of sharing passwords. Monitor YouTube activity alongside your teammates, moderate comments, and share high fives.
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
                  Save time by scheduling YouTube videos

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      No more waking up early or staying up late—schedule and share your YouTube videos on your terms. Nothing to publish today? Find relevant YouTube videos from your custom search stream to schedule.
                      </Box>
                      </div>
                  </Grid>
                  
                 
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.mobilemargin}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Track your YouTube results

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Easily measure subscriber growth, analyze engagement levels, and pinpoint traffic sources with the Channelview Insights app.
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
                  Manage YouTube from your mobile

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Grow and engage your YouTube audience wherever you are. With our mobile app, you can respond to comments and be there for your customers.
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
                  One platform to increase your reach
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Easily schedule and share YouTube videos across all your social networks right from PEDDLE.
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
                  Team up on YouTube tasks
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
                  Save time by scheduling YouTube videos

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
                  Track your YouTube results

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
                  Manage YouTube from your mobile

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Grow and engage your YouTube audience wherever you are. With our mobile app, you can respond to comments and be there for your customers.
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
