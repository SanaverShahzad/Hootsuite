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
               <Box  fontSize="20px" lineHeight="30px" color="#fff6e8" fontFamily="SourceSansPro-Bold">
               PEDDLE INSIGHTS POWERED BY BRANDWATCH
               </Box>
               <Box mt={2} mb={2} fontSize="54px" lineHeight="60px" color="#fff6e8" fontFamily="SourceSansPro-Bold" className={classes.savetxt}>Build social intelligence into your brand strategy</Box>
               <Box my={2}  fontSize="20px" lineHeight="30px" color="#ffffff" fontFamily="SourceSansPro-Regular">Make sense of millions of customer conversations happening in real time, stay on top of trends, and set strategies with confidence.</Box>

                </div>
       </Container>
       </ScrollAnimation>
           </Box>


        </>
    )
}
