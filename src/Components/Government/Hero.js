import React from "react";
import { Box, Container, Grid, Button, Hidden } from "@material-ui/core";
import Soicalimg from "../Assets/img/hero@3x-4.jpg";
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
                PEDDLE FOR FOR GOVERNMENT
                </Box>   
                <Box
                  fontSize={54}
                  lineHeight="60px"
                  color="#fff6e8"
                  fontFamily="SourceSansPro-Bold"
                  marginTop="30px"
                  className={classes.Social2}
                >
                Engage with citizens. Manage crisis communications. Deliver services efficiently.
                </Box>

                <Box
                  fontSize={20}
                  lineHeight="30px"
                  color="#fff6e8"
                  fontFamily="SourceSansPro-Regular"
                  mb={2}
                  mt={4}
                >
                 Discover how PEDDLE  is enabling governments and agencies—from local to national—to better inform and engage with communities.
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
