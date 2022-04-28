import React from "react";
import { Box, Container, Grid, List, ListItem } from "@material-ui/core";
import Melia from "../Assets/img/melia-hotels-logo.svg";
import Marketo from "../Assets/img/marketo-logo.svg";
import Sxslogo from "../Assets/img/sxsw-hp-logo.svg";
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
              Hundreds of top brands use PEDDLE to power their social media performance anywhere they go.
            </Box>
            <Grid item lg={8} md={8} sm={8}>
              <Grid container spacing={6}>
                
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <div className={classes.trustimg}>
                    <img src={Melia} width="237px" />
                  </div>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={6}>
                  
                    <img src={Marketo} width="174px" className={classes.Marketo} />
                  
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={6}>
                  <img src={Sxslogo} width="174px" className={classes.Marketo} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        </ScrollAnimation>
      </Box>
    </>
  );
}
