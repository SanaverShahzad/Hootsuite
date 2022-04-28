import React from 'react'
import {useStyles} from '../FinancialServices/Style'
import { Box, Container, Grid, Button, Hidden ,FormControlLabel} from "@material-ui/core";
import Publishicon from '../Assets/img/Publish_Icon-2.svg'
import Serveicon from '../Assets/img/serve_icon.png' 


export default function Save() {
    const classes = useStyles();
    return (
        <>
           <Box bgcolor="#eeebe8" py={7} > 
           <Container className="inner-container">
               <div className={classes.textcntr}>
               <Box mt={3} mb={4}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" >SERVE CITIZENS BETTER ON SOCIAL</Box>
               <img src={Serveicon}  />
               <Box mt={3} mb={4}  fontSize="48px" lineHeight="54px" color="#241f21" fontFamily="SourceSansPro-Bold" className={classes.savetxt}>Only 41% of people trust governments to do what is right</Box>
               <Box my={3}   fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" >To regain the trust of citizens and serve them effectively, governments must meet citizens where they’re most engaged: on social media. </Box>
               <Box my={3}   fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" >Download our latest report to discover the five top areas of opportunity for your government agency to drive success on social.</Box>
               
               <div className={classes.toolbarButtons}>
               <Button variant="contained" color="primary">
               Download the Report
      </Button>
                </div>
                </div>
       </Container>
           </Box>


        </>
    )
}
