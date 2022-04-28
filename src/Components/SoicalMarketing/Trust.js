import React from "react";
import { Box, Container, Grid, List, ListItem } from "@material-ui/core";
import Melia from "../Assets/img/marketo.png.png";
import Marketo from "../Assets/img/Brandwatch_170410_233045.png";
import Sxslogo from "../Assets/img/rt-logo-web.png";
import Exchange from "../Assets/img/Adobe_Exchange_Partner_badge_PREMIER.png";

import { useStyles } from "../Home/Style";
import ScrollAnimation from 'react-animate-on-scroll';



export default function Trust() {
  const classes = useStyles();
  return (
    <>
      <Box bgcolor="#eeebe8" py={5}>
        
<ScrollAnimation animateIn="animate__fadeInLeft" duration={1}>
        <Container className="inner-container">
          <Grid container justify="center">
            <Box
              textAlign="center"
              fontSize="40px"
              lineHeight="46px"
              pb={6}
              color="#241f21"
              fontFamily="SourceSansPro-Bold"
              className={classes.Trusted}
            >
              {" "}
              PEDDLE works with your favorite social media marketing tools
            </Box>
           
              <Grid container>
                
                <Grid item lg={3} md={3} sm={12} xs={12}>
                  <div className={classes.trustimg}>
                    <img src={Melia} width="110px" height="48px" />
                  </div>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={6}>
                  
                    <img src={Marketo} width="174px" className={classes.Marketo} />
                  
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={6}>
                  <img src={Exchange} width="174px" className={classes.Marketo} />
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={6}>
                  <img src={Sxslogo} width="174px" className={classes.Marketo} />
                </Grid>
              </Grid>
           
          </Grid>
        </Container>
        </ScrollAnimation>
      </Box>
    </>
  );
}
