import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Newvalue from "../Assets/img/new-value-1.svg";
import Newvalue2 from "../Assets/img/new-value-2.svg";
import Newvalue3 from "../Assets/img/new-value-3.svg";
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
    height: 284,
    width: "80%",
    marginLeft:"auto",
    marginRight:"auto",
  },
  [theme.breakpoints.only("xs")]: {
    Unofficia:{
      fontSize:"34px",
    },
    media:{
      marginLeft:"auto",
      marginRight:"auto",
    },
  },
 
}));

export default function Unofficial() {
  const classes = useStyles();

  return (
    <>
      <Box bgcolor="#eeebe8" py={10}>
      <ScrollAnimation animateIn="animate__fadeInRight" duration={1}>
        <Container className="inner-container">
          <Box
            color="#241f21"
            fontSize="40px"
            lineHeight="46px"
            textAlign="center"
            fontFamily="SourceSansPro-Bold"
            className={classes.Unofficia}
          >
            {" "}
            The unofficial member of your social team
          </Box>
          <Grid container>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={Newvalue}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                    >
                      Your vision, <br />
                      our scale
                    </Box>
                    <Box
                      my={2}
                      fontSize="18px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      {" "}
                      With more than 18 million customers, PEDDLE delivers
                      the global scale and insights you need to succeed with
                      social—whether you’re managing a small team or expanding
                      your social brand across hundreds of locations.
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={Newvalue2}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                    >
                      Your data,
                      <br />
                      our ecosystem
                    </Box>
                    <Box
                      my={2}
                      fontSize="18px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      {" "}
                      PEDDLE’s open platform integrates with tools you
                      already use—like Dropbox, Google Drive, Salesforce, and
                      Adobe. Plus, dive deep and find fresh insights with social
                      analytics integrations and apps including Brandwatch and
                      Talkwalker.
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={Newvalue3}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Box
                      fontSize="30px"
                      lineHeight="36px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                    >
                      Your strategy,
                      <br />
                      our expertise
                    </Box>
                    <Box
                      my={2}
                      fontSize="18px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      {" "}
                      Train your teams and build a baseline of skills across
                      your organization with industry-leading training and
                      certification from PEDDLE Academy. Our experts handle
                      the technical heavy lifting, training your teams and
                      guiding your strategy with data-backed best practices.
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
        </ScrollAnimation>
      </Box>
    </>
  );
}
