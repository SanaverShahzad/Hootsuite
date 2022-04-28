import React from 'react'
import {useStyles} from '../Publish/Style'
import { Box, Container, Grid, Button, Hidden ,FormControlLabel} from "@material-ui/core";
import Engage from '../Assets/img/Facebook-logo (1).png'
import Rotate from 'react-reveal/Rotate';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Save() {
    const classes = useStyles();
    return (
        <>
           <Box bgcolor="#143059" pt={7} pb={30} > 
           <ScrollAnimation animateIn="fadeIn">
           <Container className="inner-container">
               <div className={classes.textcntr}>
              
               <Box mt={4} mb={2} fontSize="54px" lineHeight="60px" color="#fff6e8" fontFamily="SourceSansPro-Bold" className={classes.savetxt}>Pick the plan that’s right for you</Box>
           
                </div>
       </Container>
       </ScrollAnimation>
           </Box>


        </>
    )
}
