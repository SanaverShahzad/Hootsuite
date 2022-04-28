import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import {useStyles } from "../Impact/Style";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Newvalue from "../Assets/img/web_insights_search-200x200.png";
import Newvalue2 from "../Assets/img/web_insights_track-200x200.png";
import Newvalue3 from "../Assets/img/web_insights_data-200x200.png";
import ScrollAnimation from 'react-animate-on-scroll';
import Newvalue4 from "../Assets/img/Hootsuite_InsightsThatMatter_Illustration.png";


export default function Unofficial() {
  const classes = useStyles();

  return (
    <>
      <Box bgcolor="#eeebe8" py={7}>
     
      <ScrollAnimation animateIn="animate__fadeInRight" duration={1}>
        <Container className="inner-container">
          <Box
            color="#241f21"
            fontSize="34px"
            lineHeight="43px"
            textAlign="center"
            fontFamily="SourceSansPro-Regular"
            className={classes.Unofficia}
          >
          
          Better marketing decisions start with social intelligence
          </Box>
          <Grid container>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={Newvalue}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                    >
                      Powerful search features at your fingertips
                    </Box>
                    <Box
                      my={2}
                      fontSize="18px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                    
                    Simply search topics of interest in real-time from 16 billion new posts added each month. Save keywords or Boolean strings to find meaningful trends and patterns you might miss with social monitoring. Filter your searches for specifics like dates, demographics, and geographies.
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={Newvalue2}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                    >
                    Track brand sentiment with intuitive analytics
                    </Box>
                    <Box
                      my={2}
                      fontSize="18px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                    
                    From word clouds that help you easily visualize common words and phrases related to your search, to meters that gauge brand sentiment against your top competitors, get a bird’s eye view of how people are feeling about your brand and products.
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={Newvalue3}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                    >
                    Take your data further without leaving your dashboard
                    </Box>
                    <Box
                      my={2}
                      fontSize="18px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      
                      Get industry-leading consumer insights right in your PEDDLE dashboard. Create content, research, analyze, and report your results without ever leaving our platform.
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
         

        </Container>
        </ScrollAnimation>

      </Box>
      <Container  className="inner-container">
          <Box py={3}>
      <Grid container spacing={3}>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                  <img src={Newvalue4}  width="100%" />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className={classes.mobilemargin}>
              <Box
                      fontSize="30px"
                      lineHeight="36px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                      
                    >
                      Set up your social team for success
                    </Box>
                    <Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
                    Whether you’re mapping out your next campaign or taking a closer look at the performance of one of your social accounts, our Professional Services team is here to set you up for success. From information and strategy to skills and tools, we’ll make sure your team is equipped with everything you need to inform and influence decisions across your organization.
                      </Box>
                    </div>
              </Grid>
          </Grid>
          </Box>
      </Container>
    </>
  );
}
