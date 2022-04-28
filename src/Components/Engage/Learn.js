import React from 'react'
import { Box, Container, Grid, Button, Hidden } from "@material-ui/core";
import {useStyles} from '../Publish/Style'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Engage from '../Assets/img/Publish_Icon.svg'
import Speaker from '../Assets/img/speakerphone_Icon.svg'
import Monitor from '../Assets/img/Monitor_Icon.svg'
import Analyze from '../Assets/img/Analyze_Icon.svg'
import ScrollAnimation from 'react-animate-on-scroll';

export default function Learn() {
    const classes = useStyles();
    return (
        <>
        <ScrollAnimation animateIn="animate__backInDown" animateOut="animate__backInUp" duration={2}>
          <Box bgcolor="#fff" py={4}>
          <Container className="inner-container">
              <Box my={2}  textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular">Learn more about the PEDDLE platform</Box>
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
        <Box my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" className={classes.Engage}>Publish</Box>
        <Box my={2}  fontSize="16px" lineHeight="25px" color="#5b6063" fontFamily="SourceSansPro-Regular">Easily create, curate, review, and publish content</Box>
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
        <Box my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" className={classes.Engage}>Advertise</Box>
        <Box my={2}  fontSize="16px" lineHeight="25px" color="#5b6063" fontFamily="SourceSansPro-Regular">Easily create and manage advertising campaigns</Box>
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
        <Box my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" className={classes.Engage}>Monitor</Box>
        <Box my={2}  fontSize="16px" lineHeight="25px" color="#5b6063" fontFamily="SourceSansPro-Regular">Stay on top of conversations on key topics</Box>
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
        <Box my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" className={classes.Engage}>Analyze</Box>
        <Box my={2}  fontSize="16px" lineHeight="25px" color="#5b6063" fontFamily="SourceSansPro-Regular">Measure and analyze your performance on social</Box>
        </CardContent>
      </CardActionArea>
     
    </Card>
                  </Grid>
              </Grid>
              </Container>
              </Box>  
              </ScrollAnimation>
        </>
    )
}