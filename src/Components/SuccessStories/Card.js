import React from 'react'
import {useStyles} from '../App/Style'
import { Box, Container, Grid, Button,Divider} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Appdirctery from '../Assets/img/georgia-state_191016_183629.jpg'
import Partner from '../Assets/img/british-museum.jpg'


export default function Integration() {
    const classes = useStyles();

    return (
        <>
          <Box bgcolor="#fff" py={2}>
          <Container className="inner-container">
          
         <Grid container spacing={3}>
             <Grid item lg={6} md={6} sm={12} xs={12}>
             <Card className={classes.CardHow}>
      <CardActionArea>
        <CardMedia
          className={classes.How}
          image={Appdirctery}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Box fontSize="24px" lineHeight="30px" color="#5b6063" fontFamily="SourceSansPro-Bold" className={classes.Directory}> How Georgia State University Built a Global Community of Brand Advocates</Box>
         
          <Box
          textAlign="center"
          mt={2}
          mb={8}
          className={classes.toolbarButtons}
        >
        
          <Button variant="contained" color="secondary">
           
          View Full Case Study
          </Button>
        </Box>
        </CardContent>
      </CardActionArea>
      
    </Card>
         
             </Grid>
             <Grid item lg={6} md={6} sm={12} xs={12}>
             <Card className={classes.CardHow}>
      <CardActionArea>
        <CardMedia
          className={classes.How}
          image={Partner}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Box fontSize="24px" lineHeight="30px" color="#5b6063" fontFamily="SourceSansPro-Bold" className={classes.Directory}>How the British Museum Increased  Social Media Engagement by 126%</Box>
        <Box
          textAlign="center"
          mt={2}
          mb={8}
          className={classes.toolbarButtons}
        >
        
          <Button variant="contained" color="secondary">
          View Full Case Study
          </Button>
        </Box>
        </CardContent>
      </CardActionArea>
      
    </Card>
         
             </Grid>
         </Grid>

          </Container>
              </Box>  
        </>
    )
}
