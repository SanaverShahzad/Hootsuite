import { Box, Container, Grid, FormControlLabel } from "@material-ui/core";
import React from "react";
import { useStyles } from "../Home/Style";
import DateRangeIcon from "@material-ui/icons/DateRange";
import EcoIcon from "@material-ui/icons/Eco";
import HistoryIcon from "@material-ui/icons/History";
import Composer from "../Assets/img/composer@3x.jpg";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import CategoryIcon from "@material-ui/icons/Category";
import Stream from "../Assets/img/streams@3x.jpg";
import PeopleIcon from "@material-ui/icons/People";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SchoolIcon from "@material-ui/icons/School";
import Assignmentt from "../Assets/img/assignments@3x.jpg";
import ScrollAnimation from 'react-animate-on-scroll';




export default function Lightup() {
  const classes = useStyles();
  return (
    <>
      <Box py={6}>
      <ScrollAnimation animateIn="animate__fadeInRight" duration={1}>
        <Container className="inner-container">
        {/* <div className={classes.Lightupmrgn}> */}
          <Box
            fontSize="40px"
            lineHeight="46px"
            color="#241f21"
            fontFamily="SourceSansPro-Bold"
          >
            Light up your channels
          </Box>
          <Box
            my={2}
            fontSize="20px"
            lineHeight="30px"
            color="#241f21"
            fontFamily="SourceSansPro-Regular"
          >
            Discover what’s possible when you unite your social campaigns on one
            platform. Schedule and publish content to the right channels at the
            right time, track effectiveness in real time, and crank the volume
            on your top-performing content.
          </Box>
        {/* </div> */}

        <Grid container>
          <Grid item lg={6} md={6} sm={12}>
            
              <Grid container>
                <Grid item sm={1} md={1}>
                  <DateRangeIcon size="large" />
                </Grid>
                <Grid item sm={10} md={11}>
                  <Box
                    fontSize="30px"
                    lineHeight="36px"
                    fontFamily="SourceSansPro-SemiBold"
                    color="#241f21"
                  >
                    {" "}
                    Plan
                  </Box>
                  <Box
                    fontSize="20px"
                    mt={2}
                    lineHeight="30px"
                    fontFamily="SourceSansPro-Regular"
                    color="#241f21"
                  >
                    View and manage all your social content in a single
                    collaborative calendar
                  </Box>
                </Grid>
              </Grid>
              <Box mt={2}>
                <Grid container>
                  <Grid item item sm={1} md={1}>
                    <EcoIcon size="large" />
                  </Grid>
                  <Grid item item sm={10} md={11}>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      fontFamily="SourceSansPro-SemiBold"
                      color="#241f21"
                    >
                      Create
                    </Box>
                    <Box
                      fontSize="20px"
                      mt={2}
                      lineHeight="30px"
                      fontFamily="SourceSansPro-Regular"
                      color="#241f21"
                    >
                      Make it easy for your entire team to create beautiful,
                      engaging posts for every social network
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box mt={2}>
                <Grid container>
                  <Grid item sm={1} md={1}>
                    <HistoryIcon size="large" />
                  </Grid>
                  <Grid item sm={10} md={11}>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      fontFamily="SourceSansPro-SemiBold"
                      color="#241f21"
                    >
                      Schedule
                    </Box>
                    <Box
                      fontSize="20px"
                      mt={2}
                      lineHeight="30px"
                      fontFamily="SourceSansPro-Regular"
                      color="#241f21"
                    >
                      Keep your social presence active 24/7 by automatically
                      scheduling posts to fill the gaps in your calendar
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <img src={Composer} width="100%" height="100%" className={classes.Lightupimg} />
          </Grid>
        </Grid>
        </Container>
        </ScrollAnimation>
      </Box>

      {/*  make the connection  started */}

      <Box py={6}>
      <ScrollAnimation animateIn="animate__fadeInLeft" duration={1}>
        <Container className="inner-container">
        
          <Box
            fontSize="40px"
            lineHeight="46px"
            color="#241f21"
            fontFamily="SourceSansPro-Bold"
          >
            Make the connections that matter
          </Box>
          <Box
            my={2}
            fontSize="20px"
            lineHeight="30px"
            color="#241f21"
            fontFamily="SourceSansPro-Regular"
          >
            From building your brand to delivering customer care, keep the
            conversation flowing seamlessly across public channels and private
            messages so you can connect with customers on social at every step
            of their journey.
          </Box>
        
        <Grid container>
          <Grid item lg={6} md={6} sm={12}>
            
              <Grid container>
                <Grid item sm={1} md={1}>
                  <MoveToInboxIcon size="large" />
                </Grid>
                <Grid item sm={10} md={11}>
                  <Box
                    fontSize="30px"
                    lineHeight="36px"
                    fontFamily="SourceSansPro-SemiBold"
                    color="#241f21"
                  >
                    {" "}
                    Inbox
                  </Box>
                  <Box
                    fontSize="20px"
                    mt={2}
                    lineHeight="30px"
                    fontFamily="SourceSansPro-Regular"
                    color="#241f21"
                  >
                    Engage with customers across public and private social
                    channels—in one place
                  </Box>
                </Grid>
              </Grid>
              <Box mt={2}>
                <Grid container>
                  <Grid item item sm={1} md={1}>
                    <ChatBubbleIcon size="large" />
                  </Grid>
                  <Grid item item sm={10} md={11}>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      fontFamily="SourceSansPro-SemiBold"
                      color="#241f21"
                    >
                      Streams
                    </Box>
                    <Box
                      fontSize="20px"
                      mt={2}
                      lineHeight="30px"
                      fontFamily="SourceSansPro-Regular"
                      color="#241f21"
                    >
                      Monitor activity and engage at scale across all your
                      social networks
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box mt={2}>
                <Grid container>
                  <Grid item sm={1} md={1}>
                    <CategoryIcon size="large" />
                  </Grid>
                  <Grid item sm={10} md={11}>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      fontFamily="SourceSansPro-SemiBold"
                      color="#241f21"
                    >
                      Content Library
                    </Box>
                    <Box
                      fontSize="20px"
                      mt={2}
                      lineHeight="30px"
                      fontFamily="SourceSansPro-Regular"
                      color="#241f21"
                    >
                      Save time and improve response quality with a shared
                      library of on-brand social content and assets
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <img src={Stream} width="100%" height="100%" className={classes.Lightupimg}/>
          </Grid>
        </Grid>
        </Container>
        </ScrollAnimation>
      </Box>

      {/*  make the connection  ended */}
      {/*  make the connection  started */}

      <Box py={6}>
      <ScrollAnimation animateIn="animate__fadeInRight" duration={1}>
        <Container className="inner-container">
        
          <Box
            fontSize="40px"
            lineHeight="46px"
            color="#241f21"
            fontFamily="SourceSansPro-Bold"
          >
            Align your stars
          </Box>
          <Box
            my={2}
            fontSize="20px"
            lineHeight="30px"
            color="#241f21"
            fontFamily="SourceSansPro-Regular"
          >
            Everyone has a role to play. Give your team the social platform and
            skills they need to step into the spotlight, strengthen
            relationships with customers, and drive business results.
          </Box>
       
        <Grid container>
          <Grid item lg={6} md={6} sm={12}>
            
              <Grid container>
                <Grid item sm={1} md={1}>
                  <PeopleIcon size="large" />
                </Grid>
                <Grid item sm={10} md={11}>
                  <Box
                    fontSize="30px"
                    lineHeight="36px"
                    fontFamily="SourceSansPro-SemiBold"
                    color="#241f21"
                  >
                    {" "}
                    Teams
                  </Box>
                  <Box
                    fontSize="20px"
                    mt={2}
                    lineHeight="30px"
                    fontFamily="SourceSansPro-Regular"
                    color="#241f21"
                  >
                    Align and secure your social organization with smart,
                    secure, team management and permissions
                  </Box>
                </Grid>
              </Grid>
              <Box mt={2}>
                <Grid container>
                  <Grid item item sm={1} md={1}>
                    <AssignmentIcon size="large" />
                  </Grid>
                  <Grid item item sm={10} md={11}>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      fontFamily="SourceSansPro-SemiBold"
                      color="#241f21"
                    >
                      Assignments
                    </Box>
                    <Box
                      fontSize="20px"
                      mt={2}
                      lineHeight="30px"
                      fontFamily="SourceSansPro-Regular"
                      color="#241f21"
                    >
                      Boost response times and efficiency by assigning tasks to
                      the right team or region
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box mt={2}>
                <Grid container>
                  <Grid item sm={1} md={1}>
                    <SchoolIcon size="large" />
                  </Grid>
                  <Grid item sm={10} md={11}>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      fontFamily="SourceSansPro-SemiBold"
                      color="#241f21"
                    >
                      PEDDLE Academy
                    </Box>
                    <Box
                      fontSize="20px"
                      mt={2}
                      lineHeight="30px"
                      fontFamily="SourceSansPro-Regular"
                      color="#241f21"
                    >
                      Stay ahead with industry-leading training and
                      certification
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <img src={Assignmentt} width="100%" height="100%"  className={classes.Lightupimg} />
          </Grid>
        </Grid>
        </Container>
        </ScrollAnimation>
      </Box>
      {/*  make the connection  ended */}
    </>
  );
}
