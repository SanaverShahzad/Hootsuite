import React from "react";
import {
  Box,
  Container,
  Grid,
  Button,
  FormControlLabel,
  IconButton,
  Fab,
  Hidden,
} from "@material-ui/core";
import Adds from "../Assets/img/hootsuite-ads.png";
import { useStyles } from "../SoicalMarketing/Style";
import platform from "../Assets/img/hootsuite-platform.png";
import bookpost from "../Assets/img/UI-imagehs-image.png";

import ScrollAnimation from "react-animate-on-scroll";

export default function Here() {
  const classes = useStyles();
  return (
    <>
      <ScrollAnimation animateIn="fadeIn">
        <Box bgcolor="#fff" py={4}>
          <Container className="inner-container">
            <Box
              my={2}
              textAlign="center"
              fontSize="34px"
              lineHeight="43px"
              color="#241f21"
              fontFamily="SourceSansPro-Regular"
              className={classes.extend}
            >
              Priority customer service for agencies
            </Box>
            <Box
              my={2}
              textAlign="center"
              fontSize="28px"
              lineHeight="30px"
              color="#241f21"
              fontFamily="SourceSansPro-Bold"
              className={classes.delivers}
            >
              {" "}
              Peddle delivers next-level customer service for agencies,
              providing easy access to hands-on specialists to ensure you always
              deliver on client requests.
            </Box>
            <Grid container>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box mt={8}>
                  <img src={bookpost} width="120%" height="453px" />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div className={classes.heremargin}>
                  <Box
                    my={2}
                    fontSize="30px"
                    lineHeight="36px"
                    color="#241f21"
                    fontFamily="SourceSansPro-Bold"
                  >
                    Build your social audience{" "}
                  </Box>
                  <Box className={classes.across}>
                    {" "}
                    Access all the help you need for seamless account setup,
                    client onboarding, and launching new campaigns and creative.
                  </Box>
                  <Box
                    my={2}
                    fontSize="30px"
                    lineHeight="36px"
                    color="#241f21"
                    fontFamily="SourceSansPro-Bold"
                  >
                    Optimization strategist{" "}
                  </Box>
                  <Box className={classes.across}>
                    Benefit from customized tactical and strategic reviews of
                    your campaigns to help you improve performance and
                    incorporate best practices as they evolve.
                  </Box>
                  <Box
                    my={2}
                    fontSize="30px"
                    lineHeight="36px"
                    color="#241f21"
                    fontFamily="SourceSansPro-Bold"
                  >
                    Technical support{" "}
                  </Box>
                  <Box className={classes.across}>
                    Connect with technical support 24/7 from a global team
                    fluent in six languages. We even speak “Agency.”
                  </Box>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </ScrollAnimation>
    </>
  );
}
