import React from "react";
import { Box, Container, Grid, Button, Hidden } from "@material-ui/core";
import Soicalimg from "../Assets/img/customer-stories-hero@3x.jpg";
import { useStyles } from "../Home/Style";






export default function Social() {
  const classes = useStyles();
  return (
    <>
      <Box bgcolor="#143059">
        <Container className="inner-container">
          <Grid container spacing={4}>
           
            <Grid item lg={7} md={7} xl={7} xs={12}>
              <div className={classes.mrlft}>
           
                <Box
                   marginTop="150px"
                  fontSize={54}
                  lineHeight="60px"
                  color="#fff6e8"
                  fontFamily="SourceSansPro-Bold"
                
                  className={classes.Success}
                >
Success Stories
                </Box>

                <Box
                  fontSize={20}
                  lineHeight="30px"
                  color="#fff6e8"
                  fontFamily="SourceSansPro-Regular"
                  mb={2}
                  mt={4}
                >
            At the core of every business is a great success story. Here we bring you a collection of stories highlighting how Hootsuite has contributed to building success in social media with businesses from around the world.
                </Box>
               
              
                <div     className={classes.paddingbtm}></div>
               
              </div>
            </Grid>
            <Hidden smDown>
              <Grid item lg={5} md={5} xl={5}>
                <img src={Soicalimg} width="100%" />
              </Grid>
             
            </Hidden>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
