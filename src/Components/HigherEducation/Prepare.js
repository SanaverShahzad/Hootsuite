import React from 'react'
import {useStyles} from '../FinancialServices/Style'
import { Box, Container, Grid, Button, Hidden ,FormControlLabel} from "@material-ui/core";
import Publishicon from '../Assets/img/Publish_Icon-2.svg'
import Serveicon from '../Assets/img/speakerphone-icon.png' 


export default function Save() {
    const classes = useStyles();
    return (
        <>
           <Box bgcolor="#143059" py={7} > 
           <Container className="inner-container">
               <div className={classes.textcntr}>
               <Box mt={3} mb={4}  fontSize="20px" lineHeight="30px" color="#fff" fontFamily="SourceSansPro-Bold" >PREPARE FOR EVERY SCENARIO ON SOCIAL</Box>
               <img src={Serveicon}  />
               <Box mt={3} mb={4}  fontSize="48px" lineHeight="54px" color="#fff" fontFamily="SourceSansPro-Bold" className={classes.savetxt}>Almost half of schools still need to develop a social media crisis management plan</Box>
               <Box my={3}   fontSize="20px" lineHeight="30px" color="#fff" fontFamily="SourceSansPro-Bold" >During any kind of emergency, students and staff will inevitably turn to social media. Creating a strategic plan means having the processes in place to respond to developing events in real time.</Box>
               <Box my={3}   fontSize="20px" lineHeight="30px" color="#fff" fontFamily="SourceSansPro-Bold" >Download our report to find out how you can implement risk management strategies, secure social accounts, and keep your whole school informed in every situation.</Box>
               
               <div className={classes.toolbarButtons}>
               <Button variant="contained" color="secondary">
               Download the Report
      </Button>
                </div>
                </div>
       </Container>
           </Box>


        </>
    )
}
