import React from 'react'
import {useStyles} from '../App/Style'
import { Box, Container, Grid, Button,Divider} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Appdirctery from '../Assets/img/app-directory.svg'
import Partner from '../Assets/img/partner-ecosystem.svg'


export default function Integration() {
    const classes = useStyles();

    return (
        <>
          <Box bgcolor="#f9f8f7" py={8}>
          <Container className="inner-container">
              <Box fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" >INTEGRATIONS</Box>
              <Box mt={2} fontSize="48px" lineHeight="54px" color="#241f21" fontFamily="SourceSansPro-Bold" >Extend the power of social with PEDDLE</Box>
              <Box mt={3}>
              <Divider/>
              </Box>
              <Box my={3} fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold" className={classes.save} >
Save time and do more with PEDDLE’s ecosystem </Box>

<Box my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular" className={classes.applications}>
Discover new tools—or connect your existing technology—with 150 best-of-breed technology partners and applications in our ecosystem.  </Box>
         <Grid container spacing={3}>
             <Grid item lg={6} md={6} sm={12} xs={12}>
             <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Appdirctery}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Box fontSize="24px" lineHeight="30px" color="#5b6063" fontFamily="SourceSansPro-Bold" className={classes.Directory}> PEDDLE App Directory</Box>
          <Box fontSize="15px" my={1} lineHeight="23px" color="#5b6063" fontFamily="SourceSansPro-Regular" className={classes.Help}> Connect the power of social media to the business and marketing tools you already rely on—and extend the functionality of PEDDLE—through the 150+ apps available in our App Directory.</Box>
       
          <Box
          textAlign="center"
          mt={2}
          mb={8}
          className={classes.toolbarButtons}
        >
        
          <Button variant="contained" color="secondary">
           
          Learn more
          </Button>
        </Box>
        </CardContent>
      </CardActionArea>
      
    </Card>
         
             </Grid>
             <Grid item lg={6} md={6} sm={12} xs={12}>
             <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media2}
          image={Partner}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Box fontSize="24px" lineHeight="30px" color="#5b6063" fontFamily="SourceSansPro-Bold" className={classes.Directory}>Explore our partner ecosystem</Box>
          <Box fontSize="15px" my={1} lineHeight="23px" color="#5b6063" fontFamily="SourceSansPro-Regular" className={classes.Help}> Help your teams and technology work better together with our partner ecosystem. From network alliances to social APIs, you'll gain flexible and scalable ways to increase your reach and revenue</Box>
       
          <Box
          textAlign="center"
          mt={2}
          mb={8}
          className={classes.toolbarButtons}
        >
        
          <Button variant="contained" color="secondary">
           
          Learn more
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
