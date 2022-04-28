import React from 'react'
import { Box, Container, Grid, Button, Hidden } from "@material-ui/core";
import {useStyles} from '../Instagaram/Style'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Engage from '../Assets/img/adview-256x256_201204_232925.png'
import Speaker from '../Assets/img/panoramiq-insights-256x256_201204_232935.png'
import Monitor from '../Assets/img/synapview-256x256-1_201204_232943.png'
import Analyze from '../Assets/img/panoramiq-insights-256x256_201204_232935.png'


export default function Learn() {
    const classes = useStyles();
    return (
        <>
          <Box bgcolor="#fff" py={4}>
          <Container className="inner-container">
              <Box my={2}  textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular">Do more with our Instagram apps</Box>
              <Grid container spacing={3}>
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Card className={classes.Learn}>
      <CardActionArea>
        <CardMedia
          className={classes.Learnmedia}
          image={Engage}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Box my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" className={classes.Engage}>Adview</Box>
        <Box my={2}  fontSize="16px" lineHeight="25px" color="#5b6063" fontFamily="SourceSansPro-Regular">Monitor and respond to comments made on your Facebook and Instagram ads.</Box>
        </CardContent>
      </CardActionArea>
     
    </Card>
                  </Grid>
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Card className={classes.Learn}>
      <CardActionArea>
        <CardMedia
          className={classes.Learnmedia}
          image={Speaker}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Box my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" className={classes.Engage}>Panoramiq Insights</Box>
        <Box my={2}  fontSize="16px" lineHeight="25px" color="#5b6063" fontFamily="SourceSansPro-Regular">See Instagram analytics for your account, activity, posts and stories.</Box>
        </CardContent>
      </CardActionArea>
     
    </Card>
                  </Grid>
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Card className={classes.Learn}>
      <CardActionArea>
        <CardMedia
          className={classes.Learnmedia}
          image={Monitor}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Box my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" className={classes.Engage}>Synapview</Box>
        <Box my={2}  fontSize="16px" lineHeight="25px" color="#5b6063" fontFamily="SourceSansPro-Regular">Monitor competitors and hashtags across multiple networks (including Instagram), all in one stream!</Box>
        </CardContent>
      </CardActionArea>
     
    </Card>
                  </Grid>
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Card className={classes.Learn}>
      <CardActionArea>
        <CardMedia
          className={classes.Learnmedia}
          image={Analyze}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Box my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" className={classes.Engage}>Panoramiq Multiview</Box>
        <Box my={2}  fontSize="16px" lineHeight="25px" color="#5b6063" fontFamily="SourceSansPro-Regular">Monitor comments, mentions and photo tags on Instagram.</Box>
        </CardContent>
      </CardActionArea>
     
    </Card>
                  </Grid>
              </Grid>
              <Box
          textAlign="center"
          mt={1}
          mb={5}
          className={classes.toolbarButtons}
        >
          {" "}
          <Button variant="contained" color="secondary">
            {" "}
            Explore Apps
          </Button>
        </Box>
              </Container>
              </Box>  
        </>
    )
}