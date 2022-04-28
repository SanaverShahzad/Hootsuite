import React from 'react'
import { Box, Container, Grid, Button, Hidden ,FormControlLabel} from "@material-ui/core";
import Planner from '../Assets/img/Hootsuite-Engage-Illustration.png'
import Plannerhouse from '../Assets/img/Hootsuite-Topics-Illustration.png'
import {useStyles} from '../Publish/Style'
import Compose from '../Assets/img/Hootsuite-Inbox-Illustration.png'
import Planpost from '../Assets/img/Hootsuite-Assignments-Illustration.png'
import Draft from '../Assets/img/new-Hootsuite-Chatbots-Illustration.svg'
import Envelop from '../Assets/img/CRMTools-Illustration.svg'
import ContentApps from '../Assets/img/Analytics-Illustration.svg'
import AutomaticCompliance from '../Assets/img/Reviews-Illustration.svg'
import ScrollAnimation from 'react-animate-on-scroll';


export default function Here() {
    const classes = useStyles();
    return (
        <>
<ScrollAnimation animateIn="fadeIn">
          <Box bgcolor="#fff" py={4}>
          <Container className="inner-container">
             
              <Box  my={2}  textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular">Here’s how PEDDLE helps you deliver efficient and personalized customer service through social media.</Box>
              <Grid container spacing={3}>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                      <Box my={2} textAlign="center">
                      <img src={Planner} width="80%" height="auto" />
                      </Box>
                  </Grid>
                  
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Stay on top of topics
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Monitor trends and your posts’ performance across profiles in one place by setting up custom streams that suit your workflow. Respond to queries, boost positive reactions, and share items with teammates in a single click.
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
                  Manage all incoming messages easily and efficiently
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Don’t let customer questions overwhelm you. PEDDLE’s Inbox is designed to help you monitor messages from different networks in a single stream. Filter out those that require action, bulk dismiss the ones that don’t, and respond yourself or assign another team member to the task.
                      </Box>
                      </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Ensure accurate, timely responses to every comment and question

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Tap the right team member to address customer inquiries with easy-to-use team assignments. Get subject-matter experts to respond if needed or simply spread the workload to speed through any message quagmire in impressive time.
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
                  Enjoy the efficiency of chatbots without losing customer intimacy

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Use chatbots to respond quickly to straightforward audience inquiries, and get a seamless conversation handover, via messages to your Inbox, when customers need hands-on attention from a human person.
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className={classes.textcntr}>
                  <img src={Envelop} width="80%" height="auto" />
                  </div>
                  <Box my={1} fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Integrate top CRM tools seamlessly

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Don’t waste time creating new CRM processes. Integrate your favourite third-party tools like Salesforce or Zendesk with PEDDLE to route messages and to the most appropriate department for seamless on-brand handling.
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className={classes.textcntr}>
                  <img src={ContentApps} width="80%" height="auto" />
                  </div>
                  <Box my={1} fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Make your customers happier faster

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Continually improve your customer service by tracking and analyzing your team metrics. Optimize your response and resolution times for incoming messages on social media to score with your audience.
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className={classes.textcntr}>
                  <img src={AutomaticCompliance} width="80%" height="auto" />
                  </div>
                  <Box my={1} fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Bolster your brand and track audience opinions

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Protect and grow your brand’s reputation using ReviewTrackers, a software tool that integrates with PEDDLE to capture reviews from over 85 sites. Organize reviews alongside your dashboard streams to see real-time audience opinions, share positive reviews, and easily monitor and act on trends.
                      </Box>
                  </Grid>
                  

              </Grid>
              
              
              </Container>
              </Box>  
              </ScrollAnimation>
        </>
    )
}
