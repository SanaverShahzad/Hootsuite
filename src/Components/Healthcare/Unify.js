import React from 'react'
import { Box, Container, Grid, Button,FormControlLabel, IconButton, Fab,Hidden} from "@material-ui/core";
import Adds from '../Assets/img/hootsuite-ads.png'
import {useStyles} from '../SoicalMarketing/Style'
import platform from '../Assets/img/hootsuite-platform.png'
import bookpost from '../Assets/img/illo_scene_collaboration_191015_025018.png'


import ScrollAnimation from 'react-animate-on-scroll';


export default function Here() {
    const classes = useStyles();
    return (
        <>
<ScrollAnimation animateIn="fadeIn">
          <Box bgcolor="#fff" py={4}>
          <Container className="inner-container">
             
              <Box  my={2}  textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular" className={classes.extend}>Unify your message and boost your internal communications</Box>
            <Grid container spacing={6}>
            <Hidden smDown>
                <Grid item lg={6} md={6} sm={6} >
               <div className={classes.heremargin}>
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Manage social media across all organization types <span className={classes.across}> with Peddle powerful assignment, approval, and content management features that allow you to centralize social media management—while safely expanding participation in social across departments and service lines.</span> </Box>
                <Box  my={2} mb={4} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Peddle internal communication products,<span className={classes.across}> including the easy-to-use Amplify app, allows for fast communication within your company so everyone is aware of resources and announcements, laying the foundation for your employee advocacy program. </span> </Box>
               
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
                <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Manage social media across all organization types <span className={classes.across}> with Peddle powerful assignment, approval, and content management features that allow you to centralize social media management—while safely expanding participation in social across departments and service lines.</span> </Box>
                <Box  my={2} mb={4} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Peddle internal communication products,<span className={classes.across}> including the easy-to-use Amplify app, allows for fast communication within your company so everyone is aware of resources and announcements, laying the foundation for your employee advocacy program. </span> </Box>
               
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
