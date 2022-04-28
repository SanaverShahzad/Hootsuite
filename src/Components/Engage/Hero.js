import React from 'react'
import {useStyles} from '../Publish/Style'
import { Box, Container, Grid, Button, Hidden ,FormControlLabel} from "@material-ui/core";
import Engage from '../Assets/img/logo-Hootsuite-Engage-Icon.svg'
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
                   <img src={Engage} width="128px" height="26px" />
               </Box>
               <Box mt={4} mb={2} fontSize="54px" lineHeight="60px" color="#fff6e8" fontFamily="SourceSansPro-Bold" className={classes.savetxt}>Don’t miss a single message or mention</Box>
               <Box my={2}  fontSize="20px" lineHeight="30px" color="#ffffff" fontFamily="SourceSansPro-Regular">Monitor and manage incoming messages across your social networks quickly and easily, and always get the right team member to respond.</Box>
               
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
