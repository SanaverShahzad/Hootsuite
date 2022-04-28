import React from 'react'
import {useStyles} from '../Publish/Style'
import { Box, Container, Grid, Button, Hidden ,FormControlLabel} from "@material-ui/core";
import Engage from '../Assets/img/Instagram-logo.png'
import Rotate from 'react-reveal/Rotate';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Save() {
    const classes = useStyles();
    return (
        <>
           <Box bgcolor="#143059" py={7} > 
           <ScrollAnimation animateIn="fadeIn">
           <Container className="inner-container">
               <div className={classes.textcntr}>
               <Box mt={2}>
                   <img src={Engage} width="114px" height="32px" />
               </Box>
               <Box mt={4} mb={2} fontSize="54px" lineHeight="60px" color="#fff6e8" fontFamily="SourceSansPro-Bold" className={classes.savetxt}>Schedule and publish to
Instagram—instantly</Box>
               <Box my={2}  fontSize="20px" lineHeight="30px" color="#ffffff" fontFamily="SourceSansPro-Regular">Make your #instalife simpler and more secure by publishing photos, videos, and stories to Instagram from PEDDLE.</Box>
               
               <div className={classes.toolbarButtons}>
                  
                  <FormControlLabel
        control={<Button variant="contained" color="secondary">
        Start Your Free 30-Day Trial
      </Button>}
        label={<Button variant="contained" color="primary">
        Compare Plans
      </Button>}
      />
                </div>
                </div>
       </Container>
       </ScrollAnimation>
           </Box>


        </>
    )
}
