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
import Trend from "../Assets/img/report-social-campus_191015_022912.jpg";
import Twentyimg from "../Assets/img/safeguarding-social-campus.jpg";
import Womenimg from "../Assets/img/citizen-engagement.jpg";
import ScrollAnimation from 'react-animate-on-scroll';



export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 355,
    minHeight:395,
    "&:hover": {
      transform: "translateY(-7px)",
      transition: "0.3s ease-in-out",
    },
  },
  media: {
    height: 179,
    width: "100%",
  },
  socialcard: {
      color:"#5b6063",
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
        
        <Box mt={3} mb={4} textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular">Resources</Box>
   <Grid container spacing={3} justify="center">
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
                      fontSize="16px"
                      lineHeight="22px"
                      fontFamily="SourceSansPro-SemiBold"
                      className={classes.socialcard}
                    >
                      {" "}
                      Report: The Social Campus
                    </Box>
                    <Box
                      fontSize="15px"
                      lineHeight="24px"
                      fontFamily="SourceSansPro-Regular"
                      color="#5b6063"
                    >
                      {" "}
                      Discover how social media is transforming higher education and read about eight key areas of opportunity.
                    </Box>
                    <Box mt={3}>
                    <Button
                      size="small"
                      color="primary"
                      className={classes.getreport}
                    >
                      Read the Report 
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
                      fontSize="16px"
                      lineHeight="22px"
                      fontFamily="SourceSansPro-SemiBold"
                      className={classes.socialcard}
                    >
                      {" "}
                      Webinar: Social Media Trends for Higher Education in 2019
                    </Box>
                    <Box
                      fontSize="15px"
                      lineHeight="24px"
                      fontFamily="SourceSansPro-Regular"
                      color="#5b6063"
                    >
                      {" "}
                      Social media technologies have transformed the communications landscape for schools, universities, and students alike.
                    </Box>
                    <Box mt={3}>
                    <Button
                      size="small"
                      color="primary"
                      className={classes.getreport}
                    >
                      Read the Report 
                    </Button>
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
