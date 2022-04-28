import React from "react";
import {
  Box,
  Container,
  Grid,
  Button,
  Hidden,
  FormControlLabel,
} from "@material-ui/core";
import Planner from "../Assets/img/Hootsuite_AdvertiseTeam_Illustration.png";
import Plannerhouse from "../Assets/img/Hootsuite_FBBoost_Illustration (1).png";
import { useStyles } from "../Publish/Style";
import Compose from "../Assets/img/LinkedInPromotion_Illustration-2 (1).svg";
import Planpost from "../Assets/img/Hootsuite_AdPlatform_Illustration.svg";
import Draft from "../Assets/img/new-Hootsuite-Chatbots-Illustration.svg";
import Envelop from "../Assets/img/CRMTools-Illustration.svg";
import ContentApps from "../Assets/img/Analytics-Illustration.svg";
import AutomaticCompliance from "../Assets/img/Reviews-Illustration.svg";

export default function Here() {
  const classes = useStyles();
  return (
    <>
      <Box bgcolor="#fff" py={4}>
        <Container className="inner-container">
          <Box
            my={2}
            textAlign="center"
            fontSize="34px"
            lineHeight="43px"
            color="#241f21"
            fontFamily="SourceSansPro-Regular"
          >
            Here’s how PEDDLE makes creating and managing ad campaigns easy
          </Box>
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box my={2} textAlign="center">
                <img src={Planner} width="80%" height="auto" />
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
                  Maximize the value of your Facebook posts
                </Box>
                <Box
                  my={2}
                  fontSize="20px"
                  lineHeight="30px"
                  color="#241f21"
                  fontFamily="SourceSansPro-Regular"
                >
                  Automatically or manually boost your organic Facebook content
                  to reach new audiences and fight the decline in organic reach,
                  right from the PEDDLE Composer. Easily target key segments and
                  niches by location, age, and user interests.
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
                <Box
                  fontSize="30px"
                  lineHeight="36px"
                  color="#241f21"
                  fontFamily="SourceSansPro-Bold"
                >
                  Engage your professional network
                </Box>
                <Box
                  my={2}
                  fontSize="20px"
                  lineHeight="30px"
                  color="#241f21"
                  fontFamily="SourceSansPro-Regular"
                >
                  Do more with your LinkedIn following by promoting your organic
                  LinkedIn posts as Sponsored Content ads. Target audiences
                  based on location, interests, or professional bona fides to
                  ensure the content connects with readers.
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
                  Manage your search and social advertising in one place
                </Box>
                <Box
                  my={2}
                  fontSize="20px"
                  lineHeight="30px"
                  color="#241f21"
                  fontFamily="SourceSansPro-Regular"
                >
                  Make the most of your time and ad budget using PEDDLE Ads, a
                  collaborative platform that simplifies your advertising
                  workflow. Oversee all your search and social campaigns in a
                  single spot. Create and test campaigns, review results, work
                  with your team and clients, and launch creative campaigns that
                  deliver results.
                </Box>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Box my={2}>
                <img src={Planpost} width="100%" height="auto" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
