import React from 'react';
import { useStyles } from  '../FinancialServices/Style';
import {Card, Container, Grid,Box,} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Compaliment from '../Assets/img/empower-staff.svg'
import mobile from '../Assets/img/attract-talent.svg'
import secure from '../Assets/img/involve-alumni.svg'


export default function MediaCard() {
  const classes = useStyles();

  return (
      <>
      <Box py={6}> 
      <Container className="inner-container">
          <Box mt={3} mb={4} textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular">One secure platform to collaborate across teams, engage with prospective and current students, and manage alumni relations</Box>
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
        <Box   textAlign="center" fontSize="24px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold"> Attract top talent</Box>
        <Box   textAlign="center" fontSize="16px" lineHeight="24px" color="#241f21" fontFamily="SourceSansPro-Regular">Increase enrollment applications by listening for, and engaging with, prospects who are researching their post-secondary options.</Box>
   
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
        <Box   textAlign="center" fontSize="24px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold">Involve alumni</Box>
        <Box   textAlign="center" fontSize="16px" lineHeight="24px" color="#241f21" fontFamily="SourceSansPro-Regular">Encourage donations—and lifelong participation—by keeping alumni connected to their alma mater through social media.</Box>
   
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
