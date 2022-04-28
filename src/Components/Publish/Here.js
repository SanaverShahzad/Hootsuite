import React from 'react'
import { Box, Container, Grid, Button, Hidden ,FormControlLabel} from "@material-ui/core";
import Planner from '../Assets/img/Hootsuite_Publish_Screenshot (1).png'
import Plannerhouse from '../Assets/img/PlanPostsWithEase_Screenshot.png'
import {useStyles} from '../Publish/Style'
import Compose from '../Assets/img/Hootsuite_ComposeWithConfidence_Screenshot.png'
import Planpost from '../Assets/img/Hootsuite_Scheduling_Screenshot.png'
import Draft from '../Assets/img/Drafts_Illustration-2 .edad2ded.png'
import Envelop from '../Assets/img/hs_AvoidErrors_Illustration.svg'
import ContentApps from '../Assets/img/new-ContentApps_Illustration.svg'
import AutomaticCompliance from '../Assets/img/final-AutomaticCompliance_Illustration.svg'

export default function Here() {
    const classes = useStyles();
    return (
        <>
          <Box bgcolor="#fff" py={4}>
          <Container className="inner-container">
             
              <Box  my={2}  textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular">Here’s how PEDDLE simplifies the process of planning, composing, and publishing engaging, on-brand content </Box>
              <Grid container spacing={3}>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                      <Box my={2} textAlign="center">
                      <img src={Planner} width="80%" height="auto" />
                      </Box>
                  </Grid>
                  
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Plan your posts with ease
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Get an instant overview of published and scheduled content across all your networks using the built-in Planner. Map out campaigns, fill content gaps, and collaborate in real-time.
                      </Box>
                      </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                      <img src={Plannerhouse} width="90%" height="auto" />
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
                  Create media-rich content efficiently
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Easily create engaging, accurate, and on-brand posts using Composer. Get access to your asset libraries, stock media, image editing, and our frictionless video publishing, which auto-adjusts the bitrate, height, and width to match each network’s requirements.
                      </Box>
                      </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Maintain a strong social presence

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Save time and stay active by scheduling your content in advance across your networks. Maximize engagement using Auto Scheduler to automatically publish posts.
                      </Box>
                      </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                      <img src={Planpost} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className={classes.textcntr}>
                  <img src={Draft} width="80%" height="auto" />
                  </div>
                  <Box my={1} fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Maintain a strong social presence

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Ensure consistent, on-brand content by getting insights and edits from team members before drafts go live. See the name of the post author for easy reference, and easily create, edit, and duplicate drafts to save time creating your next campaign.
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className={classes.textcntr}>
                  <img src={Envelop} width="80%" height="auto" />
                  </div>
                  <Box my={1} fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Protect your brand and make approvals easy

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Reduce your risk and ensure all your posts are good to go with an easy-to-use approval process requiring content to be reviewed by stakeholders before it’s published.
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className={classes.textcntr}>
                  <img src={ContentApps} width="80%" height="auto" />
                  </div>
                  <Box my={1} fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Source great content from everywhere

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Easily curate and share great content from across your networks by creating dashboard streams that search by hashtag, location, or keyword. Or instantly post content from any website, without logging into your social accounts, using the Hootlet extension.
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className={classes.textcntr}>
                  <img src={AutomaticCompliance} width="80%" height="auto" />
                  </div>
                  <Box my={1} fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Make compliance automatic

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Get an extra level of security with Proofpoint, a software tool that integrates with PEDDLE Enterprise accounts to provide automated screening and analysis before and after each post is published.
                      </Box>
                  </Grid>
                  

              </Grid>
              
              
              </Container>
              </Box>  

        </>
    )
}
