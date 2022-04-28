import React from 'react';
import { useStyles } from  '../FinancialServices/Style';
import {Card, Container, Grid,Box,} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Compaliment from '../Assets/img/stay-compliant_191023_163055 .svg'
import mobile from '../Assets/img/be-secure_191023_163102 .svg'
import secure from '../Assets/img/mitigate-risk_191023_163109 .svg'


export default function MediaCard() {
  const classes = useStyles();

  return (
      <>
      <Box py={6}> 
      <Container className="inner-container">
          <Box mt={3} mb={4} textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular"> One secure platform to manage risk and drive revenue</Box>
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
        <Box   textAlign="center" fontSize="24px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold"> Stay compliant</Box>
        <Box   textAlign="center" fontSize="16px" lineHeight="24px" color="#241f21" fontFamily="SourceSansPro-Regular">PEDDLE is compliant with industry regulations including FINRA, FCA, FFIEC, IIROC, SEC, PCI, AMF, and MiFID II requirements.</Box>
   
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
        <Box   textAlign="center" fontSize="16px" lineHeight="24px" color="#241f21" fontFamily="SourceSansPro-Regular">PEDDLE is compliant with industry regulations including FINRA, FCA, FFIEC, IIROC, SEC, PCI, AMF, and MiFID II requirements.</Box>
   
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
        <Box   textAlign="center" fontSize="24px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold"> Stay compliant</Box>
        <Box   textAlign="center" fontSize="16px" lineHeight="24px" color="#241f21" fontFamily="SourceSansPro-Regular">PEDDLE is compliant with industry regulations including FINRA, FCA, FFIEC, IIROC, SEC, PCI, AMF, and MiFID II requirements.</Box>
   
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
