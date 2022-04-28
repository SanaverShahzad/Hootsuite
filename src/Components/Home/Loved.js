import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {Card,Hidden} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Forrest from "../Assets/img/forrester-wave-2019.png";
import Leader from "../Assets/img/g2-crowd@2x.png";
import Garter from "../Assets/img/gartner-award@2x.png";
import Adeek from "../Assets/img/adweek-best-of-tech@2x.png";
import ScrollAnimation from 'react-animate-on-scroll';




export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 347,
    backgroundColor: "transparent !important",
    boxShadow: "none",
    marginTop: "25px",
  },
  media: {
    height: 200,
    width: "85%",
  },
 
  [theme.breakpoints.only("sm")]: {
    brkstop:{
      '& br':{
        display:"none",
      },
    },
    media: {
      width: "75%",
      marginLeft:"auto",
      marginRight:"auto",
    },

  },
  [theme.breakpoints.only("xs")]: {
    brkstop:{
      '& br':{
        display:"none",
      },
    },
    media: {
      width: "75%",
      marginLeft:"auto",
      marginRight:"auto",
    },

  },
}));

export default function Unofficial() {
  const classes = useStyles();

  return (
    <>
    
      <Box bgcolor="#fcbb47" py={10}>
      <ScrollAnimation animateIn="animate__fadeInRight" duration={1} >
        <Container className="inner-container">
          <Box
            mb={11}
            color="#241f21"
            fontSize="34px"
            lineHeight="43px"
            textAlign="center"
            fontFamily="SourceSansPro-Regular"
          >
            {" "}
            Loved by customers. Lauded by analysts.
          </Box>

          <Grid container spacing={7}>
            <Grid item lg={3} md={3} sm={6} xs={12}>
            
              <Box
                fontSize="30px"
                lineHeight="36px"
                textAlign="center"
                color="#241f21"
                fontFamily="SourceSansPro-Bold"
                className={classes.brkstop}
              >
                Forrester <br />
                Wave
              </Box>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={Forrest}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Box
                      fontSize="16px"
                      lineHeight="26px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      ✓ Social Selling Leader, <br />
                      2019
                    </Box>
                    <Box
                      fontSize="16px"
                      lineHeight="26px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      ✓ Strong Performer in Social Suites, 2019
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Box
                fontSize="30px"
                lineHeight="36px"
                textAlign="center"
                color="#241f21"
                fontFamily="SourceSansPro-Bold"
              >
                G2 Crowd
              </Box>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={Leader}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Box
                      fontSize="16px"
                      lineHeight="26px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      ✓ 22nd Best Software Product in the World
                    </Box>
                    <Box
                      fontSize="16px"
                      lineHeight="26px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      ✓ 16th Best Software Company in the World
                    </Box>
                    <Box
                      fontSize="16px"
                      lineHeight="26px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      ✓ 2nd Best Software for Marketers
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Box
                fontSize="30px"
                lineHeight="36px"
                textAlign="center"
                color="#241f21"
                fontFamily="SourceSansPro-Bold"
              >
                Gartner
              </Box>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={Garter}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Box
                      fontSize="16px"
                      lineHeight="26px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      ✓ Gartner Peer Insights Customers’ Choice for
                    </Box>
                    <Box
                      fontSize="16px"
                      lineHeight="26px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      Social Marketing Management, 2020
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Box
                fontSize="30px"
                lineHeight="36px"
                textAlign="center"
                color="#241f21"
                fontFamily="SourceSansPro-Bold"
              >
                Adweek
              </Box>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={Adeek}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Box
                      fontSize="16px"
                      lineHeight="26px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      ✓ 2020 Readers’ Choice:
                    </Box>
                    <Box
                      fontSize="16px"
                      lineHeight="26px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Regular"
                    >
                      Best of Tech Partner Awards
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
