import React from "react";
import {
  Box,
  Container,
  Grid,
  Button,
  IconButton,
  FormControlLabel,
  Hidden,
} from "@material-ui/core";
import Ullu from "../Assets/img/ullu.svg";
import { useStyles } from "../Home/Style";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import LanguageIcon from "@material-ui/icons/Language";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import Googleplay from "../Assets/img/Googleplay.svg";
import Applestore from "../Assets/img/Appstore.svg";

export default function Fotter() {
  const classes = useStyles();
  return (
    <>
      <Box bgcolor="#241f21" py={8}>
        <Container className="inner-container">
          <div className={classes.footersetting}>
          <Hidden only='xs'>
            <Grid container>
             
              <Grid item lg={2} md={2} sm={2} xs={6}>
                <img src={Ullu} width="32px" height="47px" />
              </Grid>
             
              <Grid item lg={2} md={2} sm={2} xs={6}>
                <Box
                  fontSize="16px"
                  lineHeight="36px"
                  color="#fff"
                  fontFamily=" SourceSansPro-Bold"
                >
                  Platform
                </Box>

                <List>
                  <ListItem>
                    <Button color="primary">Features</Button>
                  </ListItem>

                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Integrations
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      App Directory
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      What's New
                    </Button>
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={6}>
                <Box
                  fontSize="16px"
                  lineHeight="36px"
                  color="#fff"
                  fontFamily=" SourceSansPro-Bold"
                >
                  Plans
                </Box>

                <List>
                  <ListItem>
                    <Button color="primary">Plans</Button>
                  </ListItem>

                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Free
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      {" "}
                      Professional
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Team
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Business
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Enterprise
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Compare Plans
                    </Button>
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={6}>
                <Box
                  fontSize="16px"
                  lineHeight="36px"
                  color="#fff"
                  fontFamily=" SourceSansPro-Bold"
                >
                  Enterprise
                </Box>

                <List>
                  <ListItem>
                    <Button color="primary">Solutions</Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Industries
                    </Button>
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={6}>
                <Box
                  fontSize="16px"
                  lineHeight="36px"
                  color="#fff"
                  fontFamily=" SourceSansPro-Bold"
                >
                  Education
                </Box>

                <List>
                  <ListItem>
                    <Button color="primary">Academy</Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Resources
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Blog
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      {" "}
                      Webinars
                    </Button>
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={6}>
                <Box
                  fontSize="16px"
                  lineHeight="36px"
                  color="#fff"
                  fontFamily=" SourceSansPro-Bold"
                >
                  About
                </Box>

                <List>
                  <ListItem>
                    <Button color="primary">About Us</Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Contact Us
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Help
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      {" "}
                      Careers
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      {" "}
                      Leadership
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      {" "}
                      Newsroom
                    </Button>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            </Hidden>
            <Hidden smUp>
            <Grid container>
             
             
              <Grid item lg={2} md={2} sm={2} xs={6}>
                <Box
                  fontSize="20px"
                  lineHeight="36px"
                  color="#fff"
                  fontFamily=" SourceSansPro-Bold"
                  textAlign="center"
                >
                  Plans
                </Box>

                <List>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng2}>Plans</Button>
                  </ListItem>

                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Free
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      {" "}
                      Professional
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Team
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Business
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Enterprise
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Compare Plans
                    </Button>
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={6}>
                <Box
                  fontSize="20px"
                  lineHeight="36px"
                  color="#fff"
                  fontFamily=" SourceSansPro-Bold"
                  textAlign="center"
                >
                  About
                </Box>

                <List>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng2}>About Us</Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Contact Us
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Help
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      {" "}
                      Careers
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      {" "}
                      Leadership
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      {" "}
                      Newsroom
                    </Button>
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={6}>
                <Box
                  fontSize="20px"
                  lineHeight="36px"
                  color="#fff"
                  fontFamily=" SourceSansPro-Bold"
                  mt={2}
                  textAlign="center"
                >
                  Platform
                </Box>

                <List>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng2}>Plans</Button>
                  </ListItem>

                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Free
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      {" "}
                      Professional
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Team
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Business
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Enterprise
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Compare Plans
                    </Button>
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={6}>
                <Box
                  fontSize="20px"
                  lineHeight="36px"
                  color="#fff"
                  fontFamily=" SourceSansPro-Bold"
                  mt={2}
                  textAlign="center"
                >
                  Education
                </Box>

                <List>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng2}>Academy</Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Resources
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Blog
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      {" "}
                      Webinars
                    </Button>
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={6}>
                <Box textAlign="center" mt={3}>
                <img src={Ullu} width="32px" height="47px" />
                </Box>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={6}>
                <Box
                  fontSize="20px"
                  lineHeight="36px"
                  color="#fff"
                  fontFamily=" SourceSansPro-Bold"
                  mt={2}
                  textAlign="center"
                >
                  Enterprise
                </Box>

                <List>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng2}>Solutions</Button>
                  </ListItem>
                  <ListItem>
                    <Button color="primary" className={classes.btnstng}>
                      Industries
                    </Button>
                  </ListItem>
                </List>
              </Grid>
             
              
            </Grid>
            
            </Hidden>
          </div>
        </Container>
      </Box>
      <Box bgcolor="#f9f8f7" py={5}>
        <Container className="inner-container">
          <div className={classes.english}>
            <Button>
              {" "}
              <LanguageIcon fontSize="small" /> English{" "}
              <KeyboardArrowDownIcon />
            </Button>

            <IconButton
              color="secondary"
              aria-label="upload picture"
              component="span"
            >
              <YouTubeIcon />
            </IconButton>
            <IconButton
              color="secondary"
              aria-label="upload picture"
              component="span"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="secondary"
              aria-label="upload picture"
              component="span"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="secondary"
              aria-label="upload picture"
              component="span"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="secondary"
              aria-label="upload picture"
              component="span"
            >
              <TwitterIcon />
            </IconButton>
            <Grid container>
              <Grid item lg={3} md={3} sm={3}>
                <Box
                  fontSize="14px"
                  lineHeight="21px"
                  color="#504c4d"
                  fontFamily=" SourceSansPro-Regular"
                  mt={2}
                >
                  © 2020 PEDDLE Inc. All Rights Reserved.
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6}>
                <Box mt={1}>
                  <Button className={classes.bottomfooter}>
                    Legal Center |
                  </Button>
                  <Button className={classes.bottomfooter}>
                    Trust Center |
                  </Button>
                  <Button className={classes.bottomfooter}>Privacy |</Button>
                  <Button className={classes.bottomfooter}>Sitemap |</Button>
                  <Button className={classes.bottomfooter}>
                    Accessibility
                  </Button>
                </Box>
              </Grid>
              <Hidden mdDown>
              <Grid item lg={3} md={3} sm={3}>
                <FormControlLabel
                  control={
                    <IconButton>
                      <img src={Applestore} width="113px" height="34px" className={classes.Applestoreimg}/>
                    </IconButton>
                  }
                  label={
                    <IconButton>
                      <img src={Googleplay} width="113px" height="34px"  className={classes.Applestoreimg}/>
                    </IconButton>
                  }
                />
              </Grid>
              </Hidden>
            </Grid>
          </div>
        </Container>
      </Box>
    </>
  );
}
