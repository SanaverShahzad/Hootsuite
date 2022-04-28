import React from 'react'
import {useStyles} from '../Healthcare/Style'
import { Box, Container, Grid, Button, Hidden ,FormControlLabel} from "@material-ui/core";
import Dashboard from '../Assets/img/dashboard.png'



export default function Save() {
    const classes = useStyles();
    return (
        <>
           <Box bgcolor="#fff" py={7} > 
           <Container className="inner-container">
               <div className={classes.textcntr}>
              
               <Box mt={3} mb={4}  fontSize="48px" lineHeight="54px" color="#241f21" fontFamily="SourceSansPro-Bold" className={classes.savetxt}>Improve the patient experience and protect your brand’s reputation</Box>
               <img src={Dashboard} width="100%" />
               <Box mt={3} mb={4}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular" >Track, respond to, and resolve negative clinical experiences such as long wait times, billing issues, and adverse reactions with Hootsuite's publishing, engagement, and monitoring solutions.</Box>
               
               <div className={classes.toolbarButtons}>
               <Button variant="contained" color="secondary">
        Watch a Demo Now
      </Button>
                </div>
                </div>
       </Container>
           </Box>


        </>
    )
}
