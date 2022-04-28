import React from "react";
import { Box, Container, Grid, Button, Hidden } from "@material-ui/core";
import Soicalimg from "../Assets/img/connected-social.svg";
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
                  fontSize={54}
                  lineHeight="60px"
                  color="#fff6e8"
                  fontFamily="SourceSansPro-Bold"
                  marginTop="100px"
                  className={classes.Social}
                >
                  Social is your superpower.
                </Box>

                <Box
                  fontSize={20}
                  lineHeight="30px"
                  color="#fff6e8"
                  fontFamily="SourceSansPro-Regular"
                  className={classes.socialmedia}
                  my={2}
                >
                  Easily manage all your social media and get results with
                  PEDDLE.
                </Box>
                <div className={classes.toolbarButtons}>
                  <Button variant="contained" color="secondary">
                    Start Your Free 30-Day Trial
                  </Button>
                </div>
                <Box
                  fontSize={16}
                  fontFamily="SourceSansPro-SemiBold"
                  mt={4}
                  color="#e6e6e6"
                  borderBottom="1px solid #e6e6e6"
                  width="110px"
                  className={classes.compare}
                >
                  {" "}
                  Compare Plans
                </Box>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
