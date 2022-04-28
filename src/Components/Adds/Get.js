import React from "react";
import { Box, Container, Grid, Button } from "@material-ui/core";
import Mobileimg from "../Assets/img/intelligent-optimization@3x.jpg";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Appdirctery from "../Assets/img/board.svg";
import Partner from "../Assets/img/award.svg";
import { useStyles } from "../Adds/Style";

export default function Get() {
  const classes = useStyles();
  return (
    <div>
      <Container className="inner-container">
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box
              py={2}
              fontSize="30px"
              lineHeight="36px"
              color="#241f21"
              fontFamily="SourceSansPro-Bold"
            >
              Get the most value from your ad spend
            </Box>
            <Box
              my={1}
              fontSize="20px"
              lineHeight="30px"
              color="#241f21"
              fontFamily="SourceSansPro-Regular"
            >
              Don’t waste another dollar on underperforming ads. Easily
              re-allocate budgets from your under-performing ads to those that
              see the best results, even if it’s on another platform.
            </Box>
            <Box
              py={2}
              fontSize="30px"
              lineHeight="36px"
              color="#241f21"
              fontFamily="SourceSansPro-Bold"
            >
              Convert more customers with automated optimization rules and
              targets
            </Box>
            <Box
              my={1}
              fontSize="20px"
              lineHeight="30px"
              color="#241f21"
              fontFamily="SourceSansPro-Regular"
            >
              Automatically boost budgets or start new campaigns based on
              pre-set performance triggers. Improve ad performance with
              automatic, daily recommendations.
            </Box>
            <Box
              py={2}
              fontSize="30px"
              lineHeight="36px"
              color="#241f21"
              fontFamily="SourceSansPro-Bold"
            >
              Start (and stay) on the right track with a little help from the
              pros
            </Box>
            <Box
              my={1}
              fontSize="20px"
              lineHeight="30px"
              color="#241f21"
              fontFamily="SourceSansPro-Regular"
            >
              Get monthly tactical and strategic reviews from our social
              advertising experts. We’ll review your ads and even audit your ad
              strategy regularly.
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img src={Mobileimg} width="100%" />
          </Grid>
        </Grid>
        <Box my={7}>
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={Appdirctery}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Box
                      fontSize="24px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                      className={classes.Directory}
                    >
                      Need to sell your boss on PEDDLE Ads?
                    </Box>
                    <Box
                      fontSize="15px"
                      my={1}
                      lineHeight="23px"
                      color="#5b6063"
                      fontFamily="SourceSansPro-Regular"
                      className={classes.Help}
                    >
                      This fancy infosheet has all the nuts and bolts. It’s two
                      pages long and can easily be slipped under office doors or
                      on top of paperwork piles.
                    </Box>

                    <Box
                      textAlign="center"
                      mt={2}
                      mb={8}
                      className={classes.toolbarButtons}
                    >
                      <Button variant="contained" color="secondary">
                        Get the Infosheet
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={Partner}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Box
                      fontSize="24px"
                      lineHeight="30px"
                      color="#241f21"
                      fontFamily="SourceSansPro-Bold"
                      className={classes.Directory}
                    >
                      Do you know what your ads are doing?
                    </Box>
                    <Box
                      fontSize="15px"
                      my={1}
                      lineHeight="23px"
                      color="#5b6063"
                      fontFamily="SourceSansPro-Regular"
                      className={classes.Help}
                    >
                      Stop wondering if your ads actually resonate with your
                      audience. This guide has 5 simple steps to help you
                      calculate campaign RO
                    </Box>

                    <Box
                      textAlign="center"
                      mt={2}
                      mb={8}
                      className={classes.toolbarButtons}
                    >
                      <Button variant="contained" color="secondary">
                        Get the Guide
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
