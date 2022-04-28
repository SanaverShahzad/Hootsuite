import React from "react";
import { useStyles } from "../Publish/Style";
import {
  Box,
  Container,
  Grid,
  Button,
  Hidden,
  FormControlLabel,
} from "@material-ui/core";

import Rotate from "react-reveal/Rotate";
import ScrollAnimation from "react-animate-on-scroll";

export default function Save() {
  const classes = useStyles();
  return (
    <>
      <Box bgcolor="#143059" py={7}>
        <ScrollAnimation animateIn="fadeIn">
          <Container className="inner-container">
            <div className={classes.textcntr}>
              <Box
                fontSize="20px"
                lineHeight="30px"
                color="#fff6e8"
                fontFamily="SourceSansPro-Bold"
              >
                PEDDLE ADS
              </Box>
              <Box
                mt={1}
                mb={2}
                fontSize="54px"
                lineHeight="60px"
                color="#fff6e8"
                fontFamily="SourceSansPro-Bold"
                className={classes.savetxt}
              >
                Search + social: better together. All your ads, one place.
              </Box>
              <Box
                my={2}
                fontSize="20px"
                lineHeight="30px"
                color="#ffffff"
                fontFamily="SourceSansPro-Regular"
              >
                Save time and optimize your advertising budget by managing your
                social and search ads alongside each other.
              </Box>

              <div className={classes.toolbarButtons}>
                <Button variant="contained" color="secondary">
                  Request a Demo
                </Button>
              </div>
            </div>
          </Container>
        </ScrollAnimation>
      </Box>
    </>
  );
}
