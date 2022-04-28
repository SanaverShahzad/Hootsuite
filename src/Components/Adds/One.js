import React from "react";
import { useStyles } from "../Adds/Style";
import { Box, Container, Grid } from "@material-ui/core";
import Compainging from "../Assets/img/hootsuite-adssss.png";

export default function One() {
  const classes = useStyles();
  return (
    <>
      <Box bgcolor="#eeebe8" py={6}>
        <Box
          fontSize="34px"
          mb={3}
          lineHeight="43px"
          color="#241f21"
          fontFamily="SourceSansPro-Regular"
          textAlign="center"
        >
          {" "}
          One platform for all your ads
        </Box>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className={classes.margnlft}>
              <Box
                fontSize="30px"
                lineHeight="36px"
                color="#241f21"
                fontFamily="SourceSansPro-Bold"
                className={classes.Simplify}
              >
                Simplify your campaign process
              </Box>
              <Box
                fontSize="20px"
                my={3}
                lineHeight="30px"
                color="#241f21"
                fontFamily="SourceSansPro-Regular"
              >
                Close all the browser tabs and manage your search and social
                campaigns in one spot.
              </Box>
              <Box
                fontSize="30px"
                lineHeight="36px"
                color="#241f21"
                fontFamily="SourceSansPro-Bold"
                className={classes.Simplify}
              >
                Create and launch campaigns quicker
              </Box>
              <Box
                fontSize="20px"
                my={3}
                lineHeight="30px"
                color="#241f21"
                fontFamily="SourceSansPro-Regular"
              >
                Easily create and test hundreds of Facebook, Instagram, and
                Google Ads in minutes. Increase conversions by controlling
                placement, timing, and targeted audiences.
              </Box>
              <Box
                fontSize="30px"
                lineHeight="36px"
                color="#241f21"
                fontFamily="SourceSansPro-Bold"
                className={classes.Simplify}
              >
                Collaborate with your team and clients right from PEDDLE Ads
              </Box>
              <Box
                fontSize="20px"
                my={3}
                lineHeight="30px"
                color="#241f21"
                fontFamily="SourceSansPro-Regular"
              >
                Flipping between clunky documents or tools is so 2007. Approve
                ads or share feedback, and request or give access to social
                platforms directly from PEDDLE Ads.
              </Box>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img src={Compainging} width="100%" height="100%" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
