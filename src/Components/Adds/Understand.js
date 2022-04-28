import React from "react";
import { useStyles } from "../Adds/Style";
import {
  Box,
  Container,
  Grid,
  CardActionArea,
  CardMedia,
  Hidden,
} from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Signals from "../Assets/img/share-campaign.jpg";
import Drive from "../Assets/img/drive-optimization.jpg";
import Collaboration from "../Assets/img/collaboration.jpg";

export default function Understand() {
  const classes = useStyles();
  return (
    <>
      <Box py={5}>
        <Container className="inner-container">
          <Box
            mb={5}
            textAlign="center"
            fontSize="34px"
            lineHeight="43px"
            color="#241f21"
            fontFamily="SourceSansPro-Regular"
          >
            Understand your audience with real-time insights and analytics
          </Box>
          <Hidden xsDown>
            <Grid container>
              <Grid item lg={6} md={6} sm={6} xl={6}>
                <Card className={classes.adscrdwidth}>
                  <CardContent>
                    <div className={classes.Share}>
                      <Box
                        fontSize="40px"
                        lineHeight="46px"
                        color="#241f21"
                        fontFamily="SourceSansPro-Bold"
                        className={classes.campaign}
                      >
                        Share campaign results with your team
                      </Box>
                      <Box
                        mt={4}
                        fontSize="20px"
                        lineHeight="30px"
                        color="#241f21"
                        fontFamily="SourceSansPro-Regular"
                      >
                        Quickly export social ad analytics in Excel, and create
                        customized PDF reports that are ready to share. Save
                        time with fully automated delivery of reports.
                      </Box>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xl={6}>
                <Card className={classes.adscrdwidth}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="390px"
                      width="558px"
                      image={Signals}
                      title="Contemplative Reptile"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
            <Box mt={4}>
              <Grid container>
                <Grid item lg={6} md={6} sm={6} xl={6}>
                  <Card className={classes.adscrdwidth}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="390px"
                        width="558px"
                        image={Drive}
                        title="Contemplative Reptile"
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xl={6}>
                  <Card className={classes.adscrdwidth}>
                    <CardContent>
                      <div className={classes.Share}>
                        <Box
                          fontSize="40px"
                          lineHeight="46px"
                          color="#241f21"
                          fontFamily="SourceSansPro-Bold"
                          className={classes.campaign}
                        >
                          Drive your optimization strategy with the right data
                        </Box>
                        <Box
                          mt={4}
                          fontSize="20px"
                          lineHeight="30px"
                          color="#241f21"
                          fontFamily="SourceSansPro-Regular"
                        >
                          Uncover your top-performing ads at a glance. Measure
                          real impact with engagement scores and action metrics.
                          Manage multiple projects, brands, or campaigns with
                          tagging.
                        </Box>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Box mt={4}>
                <Grid container>
                  <Grid item lg={6} md={6} sm={6} xl={6}>
                    <Card className={classes.adscrdwidth}>
                      <CardContent>
                        <div className={classes.Share}>
                          <Box
                            fontSize="40px"
                            lineHeight="46px"
                            color="#241f21"
                            fontFamily="SourceSansPro-Bold"
                            className={classes.campaign}
                          >
                            Seamless internal and external collaboration
                          </Box>
                          <Box
                            mt={4}
                            fontSize="20px"
                            lineHeight="30px"
                            color="#241f21"
                            fontFamily="SourceSansPro-Regular"
                          >
                            With Collaboration Hub it’s easy to set up internal
                            and external ad campaign approvals, share status
                            updates, and receive real-time feedback from your
                            stakeholders.
                          </Box>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xl={6}>
                    <Card className={classes.adscrdwidth}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="390px"
                          width="558px"
                          image={Collaboration}
                          title="Contemplative Reptile"
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Hidden>
          <Hidden smUp>
            <Grid container>
              <Grid item lg={6} md={6} sm={6} xl={6}>
                <Card className={classes.adscrdwidth}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      width="100%"
                      image={Signals}
                      title="Contemplative Reptile"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xl={6}>
                <Card className={classes.adscrdwidth}>
                  <CardContent>
                    <div className={classes.Share}>
                      <Box
                        fontSize="40px"
                        lineHeight="46px"
                        color="#241f21"
                        fontFamily="SourceSansPro-Bold"
                        className={classes.campaign}
                      >
                        Share campaign results with your team
                      </Box>
                      <Box
                        mt={4}
                        fontSize="20px"
                        lineHeight="30px"
                        color="#241f21"
                        fontFamily="SourceSansPro-Regular"
                        className={classes.Quickly}
                      >
                        Quickly export social ad analytics in Excel, and create
                        customized PDF reports that are ready to share. Save
                        time with fully automated delivery of reports.
                      </Box>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Box mt={4}>
              <Grid container>
                <Grid item lg={6} md={6} sm={6} xl={6}>
                  <Card className={classes.adscrdwidth}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        width="100%"
                        image={Drive}
                        title="Contemplative Reptile"
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xl={6}>
                  <Card className={classes.adscrdwidth}>
                    <CardContent>
                      <div className={classes.Share}>
                        <Box
                          fontSize="40px"
                          lineHeight="46px"
                          color="#241f21"
                          fontFamily="SourceSansPro-Bold"
                          className={classes.campaign}
                        >
                          Drive your optimization strategy with the right data
                        </Box>
                        <Box
                          mt={4}
                          fontSize="20px"
                          lineHeight="30px"
                          color="#241f21"
                          fontFamily="SourceSansPro-Regular"
                          className={classes.Quickly}
                        >
                          Uncover your top-performing ads at a glance. Measure
                          real impact with engagement scores and action metrics.
                          Manage multiple projects, brands, or campaigns with
                          tagging.
                        </Box>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Box mt={4}>
                <Grid container>
                  <Grid item lg={6} md={6} sm={6} xl={6}>
                    <Card className={classes.adscrdwidth}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          width="100%"
                          image={Collaboration}
                          title="Contemplative Reptile"
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xl={6}>
                    <Card className={classes.adscrdwidth}>
                      <CardContent>
                        <div className={classes.Share}>
                          <Box
                            fontSize="40px"
                            lineHeight="46px"
                            color="#241f21"
                            fontFamily="SourceSansPro-Bold"
                            className={classes.campaign}
                          >
                            Seamless internal and external collaboration
                          </Box>
                          <Box
                            mt={4}
                            fontSize="20px"
                            lineHeight="30px"
                            color="#241f21"
                            fontFamily="SourceSansPro-Regular"
                            className={classes.Quickly}
                          >
                            With Collaboration Hub it’s easy to set up internal
                            and external ad campaign approvals, share status
                            updates, and receive real-time feedback from your
                            stakeholders.
                          </Box>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Hidden>
        </Container>
      </Box>
    </>
  );
}
