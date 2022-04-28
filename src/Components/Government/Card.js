import React from 'react';
import { useStyles } from  '../FinancialServices/Style';
import {Card, Container, Grid,Box,} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Compaliment from '../Assets/img/empower-staff_191015_030158.svg'
import mobile from '../Assets/img/stay-compliant_191015_030208.svg'
import secure from '../Assets/img/measure-sentiment.svg'


export default function MediaCard() {
  const classes = useStyles();

  return (
      <>
      <Box py={6}> 
      <Container className="inner-container">
          <Box mt={3} mb={4} textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular"> One secure platform to improve citizen engagement and service delivery, build your agency’s brand, and respond efficiently in a crisis.</Box>
      <Grid container>
          <Grid item lg={4} md={4} sm={4} xs={12}>
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Compaliment}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Box   textAlign="center" fontSize="24px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">Empower staff</Box>
        <Box   textAlign="center" fontSize="16px" lineHeight="24px" color="#241f21" fontFamily="SourceSansPro-Regular">Allow your team to engage directly with citizens— without compromising control over messaging and access.</Box>
   
        </CardContent>
      </CardActionArea>
    </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={12}>
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={mobile}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Box   textAlign="center" fontSize="24px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold"> Stay compliant</Box>
        <Box   textAlign="center" fontSize="16px" lineHeight="24px" color="#241f21" fontFamily="SourceSansPro-Regular">Integrations with social media archiving solutions keep you compliant with FOIA and other public records laws.</Box>
   
        </CardContent>
      </CardActionArea>
    </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={12}>
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={secure}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Box   textAlign="center" fontSize="24px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">Measure public sentiment</Box>
        <Box   textAlign="center" fontSize="16px" lineHeight="24px" color="#241f21" fontFamily="SourceSansPro-Regular">Uncover the impact of your programs and policies with real-time social media listening and analytics.</Box>
   
        </CardContent>
      </CardActionArea>
    </Card>
          </Grid>
      </Grid>
     
      </Container>
     
      </Box>
    </>
  );
}
