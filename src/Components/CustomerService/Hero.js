import React from 'react'
import {useStyles} from '../Publish/Style'
import { Box, Container, Grid, Button, Hidden ,FormControlLabel} from "@material-ui/core";
import Engage from '../Assets/img/logo-Hootsuite-Engage-Icon.svg'
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
           
               <Box mt={2} mb={2} fontSize="54px" lineHeight="60px" color="#fff6e8" fontFamily="SourceSansPro-Bold" className={classes.savetxt}>Deliver more responsive social customer service</Box>
               <Box mt={1}  fontSize="20px" lineHeight="30px" color="#ffffff" fontFamily="SourceSansPro-Regular">Quickly resolve customer inquiries and provide a seamless</Box>
               <Box mb={2}  fontSize="20px" lineHeight="30px" color="#ffffff" fontFamily="SourceSansPro-Regular">customer experience through better collaboration across teams.</Box>
              
               <div className={classes.toolbarButtons}>
                  
               <Button variant="contained" color="secondary">
               Watch a Demo Now
      </Button>
                </div>
                </div>
       </Container>
       </ScrollAnimation>
           </Box>


        </>
    )
}
