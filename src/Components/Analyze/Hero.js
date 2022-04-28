import React from 'react'
import {useStyles} from '../Publish/Style'
import { Box, Container, Grid, Button, Hidden ,FormControlLabel} from "@material-ui/core";
import Engage from '../Assets/img/analyze-2.svg'
import Fade from 'react-reveal/Fade';


export default function Save() {
   
    const classes = useStyles();
    return (
        <>
           <Box bgcolor="#143059" py={7} > 
           <Container className="inner-container">
               <div className={classes.textcntr}>
               <Box mt={2}>
                 <img src={Engage} width="136px" height="37px" />
               </Box>
              <Fade left> <Box mt={4} mb={2} fontSize="54px" lineHeight="60px" color="#fff6e8" fontFamily="SourceSansPro-Bold" className={classes.savetxt}>See your results</Box>
               <Box my={2}  fontSize="20px" lineHeight="30px" color="#ffffff" fontFamily="SourceSansPro-Regular">Analyze your performance across all your social networks and create custom reports to show the impact on your brand and bottom line.</Box>
               </Fade>
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
           </Box>


        </>
    )
}