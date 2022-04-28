import React from 'react'
import { Box, Container, Grid, Button,FormControlLabel, IconButton, Fab,Hidden} from "@material-ui/core";
import {useStyles} from '../SoicalMarketing/Style'
import Adds from '../Assets/img/hootsuite-ads.png'
import bookpost from '../Assets/img/Hootsuite_EmployeeAdvocacy_Illustration2@2x.png'
import platform from '../Assets/img/hootsuite-platform.png'



import ScrollAnimation from 'react-animate-on-scroll';


export default function Here() {
    const classes = useStyles();
    return (
        <>
<ScrollAnimation animateIn="fadeIn">
          <Box bgcolor="#eeebe8" py={4}>
          <Container className="inner-container">
             
              <Box  my={2}  textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular" className={classes.extend}>Increase internal awareness by sharing news across teams</Box>
            <Grid container spacing={2}>
            <Hidden smDown>
                <Grid item lg={6} md={6} sm={6} >
               <div className={classes.heremargin}>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Inform employees<span className={classes.across}> of key company announcements and news by sending emails or push notifications to them.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Save time <span className={classes.across}> by managing all social messaging and amplification from a single, secure platform.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Encourage usage <span className={classes.across}> by letting employees choose the company content most relevant to them.</span> </Box>
              
                <Box  mt={4}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Do it with these PEDDLE products:</Box>
              
              <Box> <span><IconButton href="/adds" ><img  src={platform} width={56} height={67} /> </IconButton></span></Box>
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
                <Grid item lg={6} md={6} sm={12} xs={12} >
                <div className={classes.heremargin}>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Inform employees<span className={classes.across}> of key company announcements and news by sending emails or push notifications to them.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Save time <span className={classes.across}> by managing all social messaging and amplification from a single, secure platform.</span> </Box>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Encourage usage <span className={classes.across}> by letting employees choose the company content most relevant to them.</span> </Box>
              
                <Box  mt={4}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Do it with these PEDDLE products:</Box>
              
              <Box> <span><IconButton href="/adds" ><img  src={platform} width={56} height={67} /> </IconButton></span></Box>
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
