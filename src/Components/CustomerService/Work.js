import React from "react";
import { Box, Container, Grid, List, ListItem } from "@material-ui/core";
import Melia from "../Assets/img/salesforce.png";
import Marketo from "../Assets/img/sugarcrm.png";
import Exchange from "../Assets/img/Microsoft-Dynamics.png";
import Sxslogo from "../Assets/img/Linkedin_2.png";


import { useStyles } from "../Home/Style";
import ScrollAnimation from 'react-animate-on-scroll';



export default function Trust() {
  const classes = useStyles();
  return (
    <>
      <Box bgcolor="#fff" py={5}>
        
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
              PEDDLE works with your favourite Social Customer Service tools
            </Box>
           
              <Grid container>
                
                <Grid item lg={3} md={3} sm={12} xs={12}>
                  <div className={classes.trustimg}>
                    <img src={Melia} width="142px" height="48px" />
                  </div>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={6}>
                <div className={classes.trustimg}>
                    <img src={Marketo} width="200px" height="23px" className={classes.Marketo} />
                    </div>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={6}>
                <div className={classes.trustimg}>
                  <img src={Exchange} width="190px" height="55px" className={classes.Marketo} />
                  </div>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={6}>
                <div className={classes.trustimg}>
                  <img src={Sxslogo} width="200px" height="49px" className={classes.Marketo} />
                  </div>
                </Grid>
              </Grid>
           
          </Grid>
        </Container>
        </ScrollAnimation>
      </Box>
    </>
  );
}
