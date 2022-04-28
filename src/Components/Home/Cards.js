import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Container, Grid } from "@material-ui/core";
import Twentyimg from "../Assets/img/digital-in-2020@2x.jpg";
import Trend from "../Assets/img/Trends-2021_resource-image-card-1.jpg";
import Womenimg from "../Assets/img/web_ST-report_res-card_451x286-1.jpg";
import ScrollAnimation from 'react-animate-on-scroll';



export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 355,
    minHeight:463,
    "&:hover": {
      transform: "translateY(-7px)",
      transition: "0.3s ease-in-out",
    },
  },
  media: {
    height: 226,
    width: "100%",
  },
  socialcard: {
    "&:hover": {
      color: "#2f6b9a",
    },
  },
  getreport: {
    fontSize: "15px",
    fontFamily: "SourceSansPro-Regular",
    color: "#2f6b9a",
    textTransform: "capitalize",
  },

// small screen query started
[theme.breakpoints.down("sm")]: {
  root: {
    marginLeft:"auto",
    marginRight:"auto",
  },

},

// small screen query ended

}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>
      <Box mt={6} mb={10}>
      <ScrollAnimation animateIn="animate__fadeInLeft" duration={1}>
        <Container className="inner-container">
          <Grid container spacing={3}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={Trend}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Box
                      fontSize="20px"
                      lineHeight="30px"
                      fontFamily="SourceSansPro-Bold"
                      className={classes.socialcard}
                    >
                      {" "}
                      Social Trends 2021 Report
                    </Box>
                    <Box
                      fontSize="15px"
                      lineHeight="24px"
                      fontFamily="SourceSansPro-Regular"
                      color="#5b6063"
                    >
                      {" "}
                      Ready to shine bright in 2021? These five key trends will
                      help. Discover the big ideas, quick wins, and real stories
                      you need to succeed—backed by insights from the brightest
                      minds in marketing and data from our biggest survey yet.
                    </Box>
                    <Box mt={3}>
                    <Button
                      size="small"
                      color="primary"
                      className={classes.getreport}
                    >
                      Get the Report
                    </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={Twentyimg}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Box
                      fontSize="22px"
                      lineHeight="30px"
                      fontFamily="SourceSansPro-Bold"
                      className={classes.socialcard}
                    >
                      The Global State of Digital in 2020 (October Update)
                    </Box>
                    <Box
                      fontSize="15px"
                      lineHeight="24px"
                      fontFamily="SourceSansPro-Regular"
                      color="#5b6063"
                    >
                      This has been a year of historic shifts in our digital
                      habits—and it’s not over yet. In this newly updated
                      version of our Digital 2020 Report, find the data you need
                      to lead your organization back to growth.{" "}
                    </Box>
                    <Button
                      size="small"
                      color="primary"
                      className={classes.getreport}
                    >
                      Get the Report
                    </Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={Womenimg}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Box
                      fontSize="22px"
                      lineHeight="30px"
                      fontFamily="SourceSansPro-Bold"
                      className={classes.socialcard}
                    >
                      The Social Transformation Report
                    </Box>
                    <Box
                      fontSize="15px"
                      lineHeight="24px"
                      fontFamily="SourceSansPro-Regular"
                      color="#5b6063"
                    >
                      How is social media helping modern organizations grow
                      brand value, operational efficiency, and business impact?
                      PEDDLE and Altimeter Group surveyed 2,162 marketers and
                      executives to find out.
                    </Box>
                    <Button
                      size="small"
                      color="primary"
                      className={classes.getreport}
                    >
                      Get the Report
                    </Button>
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
