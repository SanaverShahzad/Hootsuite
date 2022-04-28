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
import Trend from "../Assets/img/tweets-to-impact.jpg";
import Twentyimg from "../Assets/img/the-social-government.jpg";
import Womenimg from "../Assets/img/citizen-engagement.jpg";
import ScrollAnimation from 'react-animate-on-scroll';



export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 355,
    minHeight:483,
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
                      fontSize="16px"
                      lineHeight="22px"
                      fontFamily="SourceSansPro-SemiBold"
                      className={classes.socialcard}
                    >
                      {" "}
                      Brands to Beat on Social Media: Financial Services and Insurance
                    </Box>
                    <Box
                      fontSize="15px"
                      lineHeight="24px"
                      fontFamily="SourceSansPro-Regular"
                      color="#5b6063"
                    >
                      {" "}
                      The best of the Fortune 500—and the content formats they're using to win on social
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
                      Case Study: SIX automates key cybersecurity tasks to actively protect itself against social media threats
                    </Box>
                    <Box
                      fontSize="15px"
                      lineHeight="24px"
                      fontFamily="SourceSansPro-Regular"
                      color="#5b6063"
                    >
                      {" "}
                      In this digital age, organizations need to monitor cyberthreats around the clock. Find out how SIX Group protects itself from phishing, misinformation, and more.
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
                    image={Womenimg}
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
                      Webinar: Social Selling for Advisors 
                    </Box>
                    <Box
                      fontSize="15px"
                      lineHeight="24px"
                      fontFamily="SourceSansPro-Regular"
                      color="#5b6063"
                    >
                      {" "}
                      Learn the benefits of a scalable, compliant social selling program—and the crucial role that education and training plays in a successful rollout.
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
