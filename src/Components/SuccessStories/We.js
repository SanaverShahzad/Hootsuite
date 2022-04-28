import React from 'react'
import {useStyles} from '../SuccessStories/Style'
import { Box, Container, Grid, Fab ,} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dominos  from '../Assets/img/melia-final-logo.png'
import melia  from '../Assets/img/melia-hotels.jpg'

export default function We() {
    const classes=useStyles();
    return (
        <>
            <Box bgcolor="#fff" py={5}>
                <Container className="inner-container">
            <Box   textAlign="center" fontSize="48px" lineHeight="54px" color="#241f21" fontFamily="SourceSansPro-Bold">We have 18 million users, each with a powerful story.</Box>
             <Grid container>
                 <Grid item lg={12} md={12}>
                 <Card className={classes.root}>
                     <Grid container>
                         <Grid item lg={6}>
                         <div className={classes.CardActionArea}>
        <CardMedia
          className={classes.media}
          image={Dominos}
          title="Contemplative Reptile"
        />
        <CardContent>
         
         <Box mt={2} mb={4} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">
“The secret of our success on social media comes from the consistency we brought to all our social channels and in understanding our audiences.”</Box>
<Box mt={2} mb={4} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular"><span className={classes.Tony}>Tony Cortizas</span>
, Vice President, Global Brand Marketing</Box>

<div className={classes.toolbarButtons}>
               <Button variant="contained" color="secondary">
               View Full Case Study
      </Button>
                </div>

        </CardContent>
        </div>
                         
                         </Grid>
                         <Grid item lg={6}>
                         <div className={classes.CardActionArea}>
                         <CardMedia
          className={classes.melia}
          image={melia}
          title="Contemplative Reptile"
        />
        </div>
                         </Grid>
                     </Grid>
     
     
    </Card>
                 </Grid>
             </Grid>
             </Container>
            </Box>
        </>
    )
}
