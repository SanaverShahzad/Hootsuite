import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import {useStyles} from '../Facebook/Style'
import { Box, Container, Grid,} from "@material-ui/core";
import Trend from "../Assets/img/Twitter-card-1.jpg";
import Facebook from "../Assets/img/Twitter-Card-2.jpg";
import Computer from "../Assets/img/Twitter-Card-3.jpg";

export default function MediaCard() {
  const classes = useStyles();

  return (
      <>
      <Box bgcolor="#fcbb47" py={8}>
          <Container className="inner-container">
              <Grid container spacing={3}>
                  <Grid item lg={4} md={4} sm={4} xs={12}>
                  <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Trend}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Box fontFamily="SourceSansPro-SemiBold" fontSize="17px" lineHeight="30px" color="#5b6063">GUIDE</Box>
          <Box fontFamily="SourceSansPro-Regular" mt={2} fontSize="15px" lineHeight="30px" color="#5b6063">Facebook and PEDDLE: A Quick Start Guide</Box>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary" >
          Learn More
        </Button>
        
      </CardActions>
      </CardActionArea>
      
    </Card>
                  </Grid>
                  <Grid item lg={4} md={4} sm={4} xs={12}>
                  <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Facebook}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Box fontFamily="SourceSansPro-SemiBold" fontSize="17px" lineHeight="30px" color="#5b6063">GUIDE</Box>
          <Box fontFamily="SourceSansPro-Regular" mt={2} fontSize="15px" lineHeight="30px" color="#5b6063">Facebook Best Practices</Box>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary" >
          Learn More
        </Button>
        
      </CardActions>
      </CardActionArea>
      
    </Card>
                  </Grid>
                  <Grid item lg={4} md={4} sm={4} xs={12}>
                  <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Computer}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Box fontFamily="SourceSansPro-SemiBold" fontSize="17px" lineHeight="30px" color="#5b6063">GUIDE</Box>
          <Box fontFamily="SourceSansPro-Regular" mt={2} fontSize="15px" lineHeight="30px" color="#5b6063">Facebook Best Practices</Box>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary" >
          Learn More
        </Button>
        
      </CardActions>
      </CardActionArea>
      
    </Card>
                  </Grid>
              </Grid>

          
          </Container>
          </Box>
   
    </>
  );
}
