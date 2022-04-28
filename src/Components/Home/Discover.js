import React from "react";
import { Box, Button, Container, Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Amway from "../Assets/img/block-amway.svg";
import Block from "../Assets/img/block-six.svg";
import Melia from "../Assets/img/block-melia-hotels.svg";
import Nokia from "../Assets/img/block-nokia.svg";
import University from "../Assets/img/block-georgia-state-university.svg";
import Health from "../Assets/img/block-spectrum-health.svg";
import Unesco from "../Assets/img/block-unesco.svg";
import British from "../Assets/img/block-the-british-museum.svg";
import ScrollAnimation from 'react-animate-on-scroll';



export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 347,
    backgroundColor: "transparent !important",
    boxShadow: "none",
    textAlign: "center",
    marginTop: "25px",
  },
  media: {
    height: "70px",
    width: "100%",
  },
  Learnbtn: {
    cursor: "pointer",
    textTransform: "capitalize",
  },
  toolbarButtons: {
    "& .MuiButton-containedSecondary": {
      padding: "12px 22px",
      backgroundColor: "transparent !important",
      borderRadius: "0px !important",
      fontSize: "18px",
      fontFamily: "SourceSansPro-Bold",
      textTransform: "capitalize",
      boxShadow: "none",
      color: "#143059",
      border: "1px solid #143059",
      "&:hover": {
        backgroundColor: " #143059 !important",
        color: "#fff",
      },
    },
  },
  hotels: {
    fontFamily: " SourceSansPro-Bold",
    paddingLeft: "4px",
  },
 
  
  [theme.breakpoints.only("sm")]: {
    media: {
      
      width: "75%",
      marginLeft:"auto",
      marginRight:"auto",
    },

  },
  [theme.breakpoints.only("xs")]: {
    secret:{
      fontSize:"29px",
    },
    media: {
      
      width: "75%",
      marginLeft:"auto",
      marginRight:"auto",
    },
  },
}));
export default function Discover() {
  const classes = useStyles();
  return (
    <>
    <ScrollAnimation animateIn="animate__fadeInLeft" duration={1}>
      <Container className="inner-container">
        <Box
          mt={9}
          textAlign="center"
          fontSize="40px"
          lineHeight="46px"
          color="#241f21"
          fontFamily="SourceSansPro-Bold"
        >
          {" "}
          Discover what’s possible when you get social
        </Box>
        <Box
          fontSize="18px"
          lineHeight="30px"
          color="#241f21"
          fontFamily="SourceSansPro-Regular"
          textAlign="center"
          mt={2}
        >
          {" "}
          From non-profits and small businesses to governments and the Fortune
          500, we partner with organizations large and small to transform the
          way they do business.
        </Box>
        <Grid container>
          <Grid item lg={3} md={3} xs={12} sm={6}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Box
                    my={2}
                    fontSize="20px"
                    lineHeight="30px"
                    color="#241f21"
                    fontFamily="SourceSansPro-Bold"
                  >
                    MARKETING
                  </Box>
                </CardContent>
                <CardMedia
                  className={classes.media}
                  image={Amway}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Box
                    my={2}
                    fontSize="18px"
                    lineHeight="30px"
                    color="#241f21"
                    fontFamily="SourceSansPro-Regular"
                  >
                    Transformed its social enterprise and boosted campaign
                    revenue by 500%
                  </Box>
                  <Button className={classes.Learnbtn}>
                    {" "}
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                      borderBottom="1px solid #2f6b9a"
                    >
                      Learn more
                    </Box>
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Box
                    my={2}
                    fontSize="20px"
                    lineHeight="30px"
                    color="#241f21"
                    fontFamily="SourceSansPro-Bold"
                  >
                    FINANCIAL SERVICES
                  </Box>
                </CardContent>
                <CardMedia
                  className={classes.media}
                  image={Block}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Box
                    my={2}
                    fontSize="18px"
                    lineHeight="30px"
                    color="#241f21"
                    fontFamily="SourceSansPro-Regular"
                  >
                    Automated cybersecurity tasks to actively protect against
                    social media threats
                  </Box>
                  <Button className={classes.Learnbtn}>
                    {" "}
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                      borderBottom="1px solid #2f6b9a"
                    >
                      Learn more
                    </Box>
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Box
                    my={2}
                    fontSize="20px"
                    lineHeight="30px"
                    color="#241f21"
                    fontFamily="SourceSansPro-Bold"
                  >
                    TRAVEL & HOSPITALITY
                  </Box>
                </CardContent>
                <CardMedia
                  className={classes.media}
                  image={Melia}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Box
                    my={2}
                    fontSize="18px"
                    lineHeight="30px"
                    color="#241f21"
                    fontFamily="SourceSansPro-Regular"
                  >
                    Centralized its global social media initiatives on a single
                    platform
                  </Box>
                  <Button className={classes.Learnbtn}>
                    {" "}
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                      borderBottom="1px solid #2f6b9a"
                    >
                      Learn more
                    </Box>
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Box
                    my={2}
                    fontSize="20px"
                    lineHeight="30px"
                    color="#241f21"
                    fontFamily="SourceSansPro-Bold"
                  >
                    TECHNOLOGY
                  </Box>
                </CardContent>
                <CardMedia
                  className={classes.media}
                  image={Nokia}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Box
                    my={2}
                    fontSize="18px"
                    lineHeight="30px"
                    color="#241f21"
                    fontFamily="SourceSansPro-Regular"
                  >
                    Became the most talked about brand at the world’s largest
                    mobile tech event
                  </Box>
                  <Button className={classes.Learnbtn}>
                    {" "}
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                      borderBottom="1px solid #2f6b9a"
                    >
                      Learn more
                    </Box>
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          {/* new card row started */}
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Box
                    my={2}
                    fontSize="20px"
                    lineHeight="30px"
                    color="#241f21"
                    fontFamily="SourceSansPro-Bold"
                  >
                    HIGHER EDUCATION
                  </Box>
                </CardContent>
                <CardMedia
                  className={classes.media}
                  image={University}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Box
                    my={2}
                    fontSize="18px"
                    lineHeight="30px"
                    color="#241f21"
                    fontFamily="SourceSansPro-Regular"
                  >
                    Achieved 90% social media adoption rate among university
                    executives
                  </Box>
                  <Button className={classes.Learnbtn}>
                    {" "}
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                      borderBottom="1px solid #2f6b9a"
                    >
                      Learn more
                    </Box>
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Box
                    my={2}
                    fontSize="20px"
                    lineHeight="30px"
                    color="#241f21"
                    fontFamily="SourceSansPro-Bold"
                  >
                    HEALTH CARE
                  </Box>
                </CardContent>
                <CardMedia
                  className={classes.media}
                  image={Health}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Box
                    my={2}
                    fontSize="18px"
                    lineHeight="30px"
                    color="#241f21"
                    fontFamily="SourceSansPro-Regular"
                  >
                    Scaled social media across 23,000+ employees while meeting
                    HIPAA regulations
                  </Box>
                  <Button className={classes.Learnbtn}>
                    {" "}
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                      borderBottom="1px solid #2f6b9a"
                    >
                      Learn more
                    </Box>
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Box
                    my={2}
                    fontSize="20px"
                    lineHeight="30px"
                    color="#241f21"
                    fontFamily="SourceSansPro-Bold"
                  >
                    NON-PROFIT
                  </Box>
                </CardContent>
                <CardMedia
                  className={classes.media}
                  image={Unesco}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Box
                    my={2}
                    fontSize="18px"
                    lineHeight="30px"
                    color="#241f21"
                    fontFamily="SourceSansPro-Regular"
                  >
                    Delivers global social media campaigns that drive engagement
                    and inspire action
                  </Box>
                  <Button className={classes.Learnbtn}>
                    {" "}
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                      borderBottom="1px solid #2f6b9a"
                    >
                      Learn more
                    </Box>
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Box
                    my={2}
                    fontSize="20px"
                    lineHeight="30px"
                    color="#241f21"
                    fontFamily="SourceSansPro-Bold"
                  >
                    ARTS & CULTURE
                  </Box>
                </CardContent>
                <CardMedia
                  className={classes.media}
                  image={British}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Box
                    my={2}
                    fontSize="18px"
                    lineHeight="30px"
                    color="#241f21"
                    fontFamily="SourceSansPro-Regular"
                  >
                    Attracted millions of new followers and increased engagement
                    by 126%
                  </Box>
                  <Button className={classes.Learnbtn}>
                    {" "}
                    <Box
                      my={2}
                      fontSize="20px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                      borderBottom="1px solid #2f6b9a"
                    >
                      Learn more
                    </Box>
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          {/* new card row ended */}
        </Grid>
        <Box
          textAlign="center"
          mt={2}
          mb={8}
          className={classes.toolbarButtons}
        >
          {" "}
          <Button variant="contained" color="secondary">
            {" "}
            More Success Stories
          </Button>
        </Box>
        <Divider />

        <Box
          mt={10}
          mb={3}
          fontSize="40px"
          lineHeight="60px"
          textAlign="center"
          color="#241f21"
          fontFamily="SourceSansPro-Regular"
          className={classes.secret}
        >
          {" "}
          "The secret of our success on social media comes from the consistency
          we brought to all our social channels and in understanding our
          audiences."
        </Box>
        <Box
          fontSize="20px"
          lineHeight="30px"
          textAlign="center"
          color="#241f21"
          fontFamily="SourceSansPro-Bold"
        >
          {" "}
          TONY CORTIZAS
        </Box>
        <Box
          fontSize="20px"
          mb={6}
          lineHeight="30px"
          textAlign="center"
          color="#241f21"
          fontFamily="SourceSansPro-Regular"
        >
          Vice President, Global Brand Marketing{" "}
          <span className={classes.hotels}> Meliá Hotels International </span>
        </Box>
      </Container>
      </ScrollAnimation>
    </>
  );
}
