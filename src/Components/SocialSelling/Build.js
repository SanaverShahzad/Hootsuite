import React from 'react'
import { Box, Container, Grid, Button,FormControlLabel, IconButton, Fab,Hidden} from "@material-ui/core";
import Adds from '../Assets/img/hootsuite-ads.png'
import {useStyles} from '../SoicalMarketing/Style'
import platform from '../Assets/img/hootsuite-platform.png'
import bookpost from '../Assets/img/Hootsuite_SocialSelling_Illustration2@2x.png'


import ScrollAnimation from 'react-animate-on-scroll';


export default function Here() {
    const classes = useStyles();
    return (
        <>
<ScrollAnimation animateIn="fadeIn">
          <Box bgcolor="#fff" py={4}>
          <Container className="inner-container">
             
              <Box  my={2}  textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular" className={classes.extend}>Build and nurture relationships on social</Box>
            <Grid container spacing={3}>
            <Hidden smDown>
                <Grid item lg={6} md={6} sm={6} >
               <div className={classes.heremargin}>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Position reps as experts<span className={classes.across}> by providing thought leadership content they can add to their social profiles.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Engage with prospects<span className={classes.across}>and customers to take the conversation offline and get a higher win rate.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Track content engagement<span className={classes.across}>  to uncover which stories and tactics work best with your audience.</span> </Box>
                <Box  mt={4} mb={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Do it with these PEDDLE products:</Box>
              
              <Box> <IconButton href="/adds" ><img  src={Adds} width={56} height={67} /> </IconButton> <span><IconButton href="/adds" ><img  src={platform} width={56} height={67} /> </IconButton></span></Box>
              <div className={classes.toolbarButtons}>
                  
                  <Button variant="contained" color="secondary">
                  Watch a Demo Now
         </Button>
                   </div>
                </div>
                </Grid>
                <Grid item lg={6} md={6}  sm={6} >
                    <img src={bookpost} width="100%" />
                    
                </Grid>
                </Hidden>
                <Hidden mdUp>
                
                <Grid item lg={6} md={6}  sm={12} xs={12} >
                    <img src={bookpost} width="100%" />
                    
                </Grid>
                <Grid item lg={6} md={6} sm={6} >
               <div className={classes.heremargin}>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Drive adoption<span className={classes.across}> of social selling with an easy-to-use solution—for all levels of social and tech savviness.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Find new leads<span className={classes.across}> based on sales territory in real time with intuitive monitoring and search features.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Onboard teams quickly<span className={classes.across}> and build new social selling skills with training so reps see value sooner.</span> </Box>
                <Box  mt={4} mb={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Do it with these PEDDLE products:</Box>
              
              <Box> <IconButton href="/adds" ><img  src={Adds} width={56} height={67} /> </IconButton> <span><IconButton href="/adds" ><img  src={platform} width={56} height={67} /> </IconButton></span></Box>
              <div className={classes.toolbarButtons}>
                  
                  <Button variant="contained" color="secondary">
                  Watch a Demo Now
         </Button>
                   </div>
                </div>
                </Grid>
                </Hidden>
            </Grid>
              
              </Container>
              </Box>  
              </ScrollAnimation>
        </>
    )
}
