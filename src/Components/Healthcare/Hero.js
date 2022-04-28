import React from "react";
import { Box, Container, Grid, Button, Hidden } from "@material-ui/core";
import Soicalimg from "../Assets/img/hero@3x-3.jpg";
import { useStyles } from "../Home/Style";






export default function Social() {
  const classes = useStyles();
  return (
    <>
      <Box bgcolor="#143059">
        <Container className="inner-container">
          <Grid container>
            <Hidden smDown>
              <Grid item lg={5} md={5} xl={5}>
                <img src={Soicalimg} width="100%" />
              </Grid>
              <Grid item lg={1} md={1} xl={1}></Grid>
            </Hidden>
            <Grid item lg={6} md={6} xl={6} xs={12}>
              <div className={classes.mrlft}>
              <Box
                  fontSize={20}
                  lineHeight="30px"
                  color="#fff6e8"
                  fontFamily="SourceSansPro-Bold"
                  marginTop="50px"
                  className={classes.Social}
                >
                PEDDLE FOR HEALTH CARE
                </Box>   
                <Box
                  fontSize={54}
                  lineHeight="60px"
                  color="#fff6e8"
                  fontFamily="SourceSansPro-Bold"
                  marginTop="20px"
                  className={classes.Social2}
                >
                The health care industry's leading social media management platform
                </Box>

                <Box
                  fontSize={20}
                  lineHeight="30px"
                  color="#fff6e8"
                  fontFamily="SourceSansPro-Regular"
                  mb={2}
                  mt={4}
                >
                Find out why leading health care providers, insurers, and life science companies worldwide use Hootsuite to improve their customer experience, unify their social message, and ensure compliance with industry regulations.
                </Box>
               
                <div className={classes.toolbarButtons}>
                  <Button variant="contained" color="secondary">
                  Watch a Demo Now
                  </Button>
                </div>
                <div     className={classes.paddingbtm}></div>
               
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
