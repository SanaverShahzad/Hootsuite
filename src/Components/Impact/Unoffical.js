import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import {useStyles } from "../Impact/Style";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Newvalue from "../Assets/img/icon_1_200x200.png";
import Newvalue2 from "../Assets/img/icon_2_200x200.png";
import Newvalue3 from "../Assets/img/icon_3_200x200.png";
import ScrollAnimation from 'react-animate-on-scroll';
import Newvalue4 from "../Assets/img/illo_6_672x497.png";


export default function Unofficial() {
  const classes = useStyles();

  return (
    <>
      <Box  py={7}>
     
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
          
          Informed marketing decisions start with better social analytics
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
                      Your metrics, your way
                    </Box>
                    <Box
                      my={2}
                      fontSize="18px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                    
                    Your business is unique, and so are the metrics you use to measure your success. Combine or refine existing metrics—or calculate new ones—to track the results that matter most to you and your stakeholders.
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
                    Focus your effort on the activities that get results
                    </Box>
                    <Box
                      my={2}
                      fontSize="18px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                    
                    Filter your posts by content, campaign, text, or keyword to compare performance and quickly test new tactics. And save time and effort with automated tagging that detects themes in your images, links, content, website data, and hashtags.
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
                      Tell a compelling story with social data
                    </Box>
                    <Box
                      my={2}
                      fontSize="18px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      
                      Report on the performance of your paid and organic channels with clear, attractive visualizations. Whether you start from scratch or use a template, it’s easier than ever to create great-looking reports that show the impact of your social campaigns on your business.
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          <Grid container>
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

        </Container>
        </ScrollAnimation>

      </Box>
    </>
  );
}
