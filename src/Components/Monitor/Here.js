import React from 'react'
import { Box, Container, Grid, Button, Hidden ,FormControlLabel} from "@material-ui/core";
import Planner from '../Assets/img/Hootsuite_MonitorTeam_Screenshot.png'
import Plannerhouse from '../Assets/img/Hootsuite_FindYourFocus_Screenshot.png'
import {useStyles} from '../Publish/Style'
import Compose from '../Assets/img/Hootsuite_Insights_Screenshot.png'
import Planpost from '../Assets/img/Hootsuite_IntegrateSocialTools_Screenshot.png'


export default function Here() {
    const classes = useStyles();
    return (
        <>
          <Box bgcolor="#fff" py={4}>
          <Container className="inner-container">
             
              <Box  my={2}  textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular">Here’s how PEDDLE makes creating and managing ad campaigns easy</Box>
              <Grid container spacing={3}>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                      <Box my={2} textAlign="center">
                      <img src={Planner} width="80%" height="auto" />
                      </Box>
                  </Grid>
                  
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Find your focus
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Set up custom streams to zero in on essential topics, trends, and social profiles, and see what’s going on at a glance. Easily respond in-stream whenever opportunity arises.
                      </Box>
                      </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box my={2}>
                      <img src={Plannerhouse} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box my={2}>
                      <img src={Compose} width="100%" height="auto" />
                      </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <div className={classes.hereplan2}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Get real-time audience insights
                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Use PEDDLE Insights, powered by Brandwatch, to gain an instant overview of millions of online conversations in real time. Search for any topic or keyword, and filter by date, demographics, location, and more. You’ll be able to identify thought leaders, understand the perception of your brand in the market, and get immediate alerts if and when your mentions spike.
                      </Box>
                      </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <div className={classes.hereplan}>
                  <Box  fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">
                  Integrate top social listening tools

                      </Box>
                      <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                      Already using social listening software that you love? PEDDLE enables you to integrate tools such as Brandwatch and Talkwalker, to source essential insights from the comfort of your dashboard. Check out our app directory for more.
                      </Box>
                      </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box my={2}>
                      <img src={Planpost} width="100%" height="auto" />
                      </Box>
                  </Grid>
                 
              </Grid>
              
              
              </Container>
              </Box>  

        </>
    )
}
