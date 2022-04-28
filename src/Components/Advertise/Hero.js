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
import Engage from "../Assets/img/logo-Hootsuite-Engage-Icon.svg";

export default function Save() {
  const classes = useStyles();
  return (
    <>
      <Box bgcolor="#143059" py={7}>
        <Container className="inner-container">
          <div className={classes.textcntr}>
            <Box
              mt={4}
              mb={2}
              fontSize="54px"
              lineHeight="60px"
              color="#fff6e8"
              fontFamily="SourceSansPro-Bold"
              className={classes.savetxt}
            >
              Expand your reach with ease
            </Box>
            <Box
              mt={2}
              mb={4}
              fontSize="20px"
              lineHeight="30px"
              color="#ffffff"
              fontFamily="SourceSansPro-Regular"
            >
              Promote your organic content and manage your paid social campaigns
              in one convenient place.
            </Box>

            <div className={classes.toolbarButtons}>
              <FormControlLabel
                control={
                  <Button variant="contained" color="secondary">
                    Start Your Free 30-Day Trial
                  </Button>
                }
                label={
                  <Button variant="contained" color="primary">
                    Compare Plans
                  </Button>
                }
              />
            </div>
          </div>
        </Container>
      </Box>
    </>
  );
}
