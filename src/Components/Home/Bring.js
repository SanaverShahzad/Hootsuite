import React from "react";
import { Box, Container, Grid, Button } from "@material-ui/core";
import { useStyles } from "../Home/Style";
import ScrollAnimation from 'react-animate-on-scroll';


export default function Bring() {
  const classes = useStyles();
  return (
    <>
    
      <Box
        bgcolor="#143059"
        py={8}
        textAlign="center"
        className={classes.toolbarButtons}
      >
        <ScrollAnimation animateIn="animate__fadeInLeft" duration={1}>
        <Container className="inner-container">
          <Box
            fontSize="34px"
            mb={3}
            lineHeight="43px"
            color="#ffffff"
            fontFamily="SourceSansPro-Regular"
          >
            {" "}
            Bring it all together with the leader in social media management.
          </Box>
          <Button variant="contained" color="secondary">
            Start Your Free 30-Day Trial
          </Button>
          <Box>
            <Button className={classes.Learnbtn}>
              {" "}
              <Box
                my={2}
                fontSize="14px"
                lineHeight="30px"
                color="#fff"
                fontFamily="SourceSansPro-SemiBold"
                borderBottom="1px solid #fff"
              >
                Compare Plans
              </Box>
            </Button>
          </Box>
        </Container>
        </ScrollAnimation>
      </Box>

    </>
  );
}
