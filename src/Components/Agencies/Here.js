import React from "react";
import { Box, Container, Grid, Hidden } from "@material-ui/core";

import Plannerhouse from "../Assets/img/Edit-and-post-content-1.png";
import { useStyles } from "../Publish/Style";
import Compose from "../Assets/img/Stay-engaged-with-customers-2_190828_230950.png";
import Planpost from "../Assets/img/Edit-and-post-content-copy-1.png";
import Bookpost from "../Assets/img/Stay-engaged-with-customers-Copy.png";
import ImprovePerformance from "../Assets/img/Edit-and-post-content-Copy-7.png";
import Facebook from "../Assets/img/Edit-and-post-content-Copy-8.png";
import Edit from "../Assets/img/Edit-and-post-content-Copy-9.png";
import ScrollAnimation from "react-animate-on-scroll";

export default function Here() {
  const classes = useStyles();
  return (
    <>
      <ScrollAnimation animateIn="fadeIn">
        <Box bgcolor="#fff" py={4}>
          <Container className="inner-container">
            <Grid container spacing={3}>
              <Hidden xsDown>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box mb={2} mt={6}>
                    <img src={Plannerhouse} width="100%" height="auto" />
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className={classes.hereplan}>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                    >
                      Multiple client management
                    </Box>
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      Easily and securely manage activities across your entire
                      client portfolio—from engagement and monitoring to
                      measurement and reporting—from a single dashboard.
                      Collaborate in real time with your clients on content
                      development, creative approvals, campaign deployment, and
                      more.
                    </Box>
                  </div>
                </Grid>

                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className={classes.hereplan2}>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                    >
                      Carefully controlled access
                    </Box>
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      Create precise permissions to manage client access to
                      reporting and features, and invite clients to review and
                      approve draft posts with ease. Set up separate, secure
                      environments for each client, and add more as you win new
                      business.
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
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                    >
                      Easy analytics and branded reporting
                    </Box>
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      Get a comprehensive overview of campaign performance
                      across all major social media channels and websites with
                      Hootsuite’s intuitive analytics.
                    </Box>
                  </div>
                </Grid>

                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className={classes.hereplan}>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                    >
                      Organic and paid social in one place
                    </Box>
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      Monitor and respond to organic and paid comments from the
                      Hootsuite dashboard. Create custom rules to generate
                      automated responses and save your team tons of time.
                      Promote your clients’ best-performing posts with a single
                      click and see the results in real time.
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
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                    >
                      Social listening
                    </Box>
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      Find and filter social conversations—across multiple
                      languages—by keyword, hashtag, and location, to hear what
                      people are saying about your clients’ brands, competitors,
                      and industries. Understand conversations and reactions
                      using an array of monitoring apps that enable everything
                      from reviewing site ratings to tracking a brand’s tone of
                      voice.
                    </Box>
                  </div>
                </Grid>

                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className={classes.hereplan}>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                    >
                      App Directory integration
                    </Box>
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      Enhance your social media activities by integrating apps
                      from Hootsuite’s App Directory with the tools your clients
                      are already using. Use apps like Google Drive, Dropbox,
                      Adobe Campaigns, Slack, Mailchimp, Zendesk, and close to
                      150 others. Find advanced social tools for listening,
                      analytics, campaign creation, compliance, and much more.
                    </Box>
                  </div>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                    <img src={Facebook} width="100%" height="auto" />
                  </Box>
                </Grid>

                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                    <img src={Edit} width="100%" height="auto" />
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className={classes.hereplan}>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                    >
                      Reputation management
                    </Box>
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      Integrate Hootsuite with review management apps to help
                      monitor and maintain your clients’ online reputations.
                      Publish posts, reply to reviews, and answer questions on
                      Google My Business listings. Sync your feed from
                      ReviewTrackers with your Hootsuite account, and manage
                      business listing reviews using the Yext Reviews app
                      directly from your dashboard.
                    </Box>
                  </div>
                </Grid>
              </Hidden>
              <Hidden xsDown>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box mb={2} mt={6}>
                    <img src={Plannerhouse} width="100%" height="auto" />
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className={classes.hereplan}>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                    >
                      Multiple client management
                    </Box>
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      Easily and securely manage activities across your entire
                      client portfolio—from engagement and monitoring to
                      measurement and reporting—from a single dashboard.
                      Collaborate in real time with your clients on content
                      development, creative approvals, campaign deployment, and
                      more.
                    </Box>
                  </div>
                </Grid>

                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className={classes.hereplan2}>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                    >
                      Carefully controlled access
                    </Box>
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      Create precise permissions to manage client access to
                      reporting and features, and invite clients to review and
                      approve draft posts with ease. Set up separate, secure
                      environments for each client, and add more as you win new
                      business.
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
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                    >
                      Easy analytics and branded reporting
                    </Box>
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      Get a comprehensive overview of campaign performance
                      across all major social media channels and websites with
                      Hootsuite’s intuitive analytics.
                    </Box>
                  </div>
                </Grid>

                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className={classes.hereplan}>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                    >
                      Organic and paid social in one place
                    </Box>
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      Monitor and respond to organic and paid comments from the
                      Hootsuite dashboard. Create custom rules to generate
                      automated responses and save your team tons of time.
                      Promote your clients’ best-performing posts with a single
                      click and see the results in real time.
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
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                    >
                      Social listening
                    </Box>
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      Find and filter social conversations—across multiple
                      languages—by keyword, hashtag, and location, to hear what
                      people are saying about your clients’ brands, competitors,
                      and industries. Understand conversations and reactions
                      using an array of monitoring apps that enable everything
                      from reviewing site ratings to tracking a brand’s tone of
                      voice.
                    </Box>
                  </div>
                </Grid>

                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className={classes.hereplan}>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                    >
                      App Directory integration
                    </Box>
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      Enhance your social media activities by integrating apps
                      from Hootsuite’s App Directory with the tools your clients
                      are already using. Use apps like Google Drive, Dropbox,
                      Adobe Campaigns, Slack, Mailchimp, Zendesk, and close to
                      150 others. Find advanced social tools for listening,
                      analytics, campaign creation, compliance, and much more.
                    </Box>
                  </div>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                    <img src={Facebook} width="100%" height="auto" />
                  </Box>
                </Grid>

                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box my={2}>
                    <img src={Edit} width="100%" height="auto" />
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className={classes.hereplan}>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                    >
                      Reputation management
                    </Box>
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      Integrate Hootsuite with review management apps to help
                      monitor and maintain your clients’ online reputations.
                      Publish posts, reply to reviews, and answer questions on
                      Google My Business listings. Sync your feed from
                      ReviewTrackers with your Hootsuite account, and manage
                      business listing reviews using the Yext Reviews app
                      directly from your dashboard.
                    </Box>
                  </div>
                </Grid>
              </Hidden>
            </Grid>
          </Container>
        </Box>
      </ScrollAnimation>
    </>
  );
}
