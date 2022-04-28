import React from 'react'
import { Box, Container, Grid,} from "@material-ui/core";

import Plannerhouse from '../Assets/img/Hootsuite_ScheduleLinkedInContent_Image.png'
import {useStyles} from '../Publish/Style'
import Compose from '../Assets/img/Hootsuite_LinkedInVideo_Image.png'
import Planpost from '../Assets/img/Hootsuite_LinkedInAudienceConfidence_Image.png'
import Bookpost from '../Assets/img/Hootsuite_LinkedInAudienceContent_Image.png'
import ImprovePerformance from '../Assets/img/Hootsuite_LinkedInAnalytics_Image.png'
import Facebook from '../Assets/img/Hootsuite_Facebook_ManageWherever_Illustration.png'


import ScrollAnimation from 'react-animate-on-scroll';



export default function Here() {
    const classes = useStyles();
    return (
        <>
<ScrollAnimation animateIn="fadeIn">
          <Box bgcolor="#fff" py={4}>
          <Container className="inner-container">
             
              <Box  my={2}  textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular">Do more on LinkedIn, in less time</Box>
              <Grid container spacing={3}>
                 
              <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box mb={2} mt={6}>
                      <img src={Plannerhouse} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Save time by scheduling your LinkedIn content
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Keep your LinkedIn presence active by efficiently scheduling all your content ahead of time—manually, automatically, or in bulk—all on a single platform.
                      </Box>
                      </div>
                  </Grid>
                
                  
                  
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan2}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Ignite engagement with LinkedIn Video
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Schedule and publish video right from PEDDLE—according to LinkedIn, videos see five times more engagement than other types of LinkedIn content.
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
                  Reach the right audience—confidently

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Target posts by location, job function, industry, and other parameters and ensure your posts go through the same approval process as the rest of your social content.
                      </Box>
                      </div>
                  </Grid>
                  
                 
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Reach new audiences with your best content

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Promote your best performing LinkedIn organic posts as Sponsored Content and precisely target an audience based on their location, interest, or details related to their profession.
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
                  Measure your impact on LinkedIn

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Track new follower growth, as well as impressions and engagement levels of specific posts, with easy-to-understand analytic reports—all in one place.
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
