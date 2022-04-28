import React from 'react'
import { Box, Container, Grid, Button, Hidden ,FormControlLabel} from "@material-ui/core";
import Planner from '../Assets/img/Hootsuite_AnalyzeTeam_Screenshot.png'
import Plannerhouse from '../Assets/img/Hootsuite_Efficiency_Screenshot.png'
import {useStyles} from '../Publish/Style'
import Compose from '../Assets/img/Hootsuite_ROI_Screenshot.png'

import Draft from '../Assets/img/Hootsuite_ResponseTimes_Illustration.png'
import Envelop from '../Assets/img/Hootsuite_Panoramiq_Illustration.png'

import ScrollAnimation from 'react-animate-on-scroll';


export default function Here() {
    const classes = useStyles();
    return (
        <>
<ScrollAnimation animateIn="fadeIn">
          <Box bgcolor="#fff" py={4}>
          <Container className="inner-container">
             
              <Box  my={2}  textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular">Here’s how PEDDLE helps you save time assessing your performance and summarizing the story for your team</Box>
              <Grid container spacing={3}>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                      <Box my={2} textAlign="center">
                      <img src={Planner} width="80%" height="auto" />
                      </Box>
                  </Grid>
                  
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Analyze with efficiency
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Monitor trends and your posts’ performance across profiles in one place by setting up custom streams that suit your workflow. Respond to queries, boost positive reactions, and share items with teammates in a single click.
                      </Box>
                      </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                      <img src={Plannerhouse} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                      <img src={Compose} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan2}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Find your ROI
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Use PEDDLE Impact to calculate the real return on your social media investment, to solidify the business case for social in your organization. Impact helps you demonstrate how your social media channels and campaigns drive leads, conversions, and sales. Customizable dashboards feature easy-to-read graphs, tables, and KPI summaries—perfect for results-oriented stakeholders.
                      </Box>
                      </div>
                  </Grid>
                  
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className={classes.textcntr}>
                  <img src={Draft} width="70%" height="auto" />
                  </div>
                  <Box my={1} fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Improve customer service and response times
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Track how long it takes your team to respond and resolve incoming customer inquiries. Discover who your top performers are, and analyze and share their techniques to upgrade your team’s overall performance.
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Want to extend your reach even further? Use PEDDLE Amplify to empower your employees to safely share your content with their friends and followers.
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className={classes.textcntr}>
                  <img src={Envelop} width="70%" height="auto" />
                  </div>
                  <Box my={1} fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Make Instagram interactions easy

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Integrate Panoramiq Multiview with PEDDLE for a powerful tool for monitoring mentions, comments, and tags. Whether you have one account or many, integrating Paroramiq provides a convenient 360-degree view of your Instagram activities from within PEDDLE.
                      </Box>
                  </Grid>

              </Grid>
              
              
              </Container>
              </Box>  
              </ScrollAnimation>
        </>
    )
}
