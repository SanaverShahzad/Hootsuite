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
            
              <Grid container spacing={3}>
                 
                  
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Brand Ambassador with Peddle
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      A Brand Ambassador is any user that subscribes as brand ambassador and wishes to make money by
allowing a company or an individual post to his/her social media followers through his social media wall.
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
                  Brand Ambassador with Social Network
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      All users of brand ambassador will be able to add their different social
networks from which they want to connect to via the platform. 
                      </Box>
                      </div>
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
                      Pick a metric, track your progress, and prove your impact with visual reports. From automated custom reports for multiple clients to detailed audience insights, you’ll see exactly what works on Facebook and why.
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
