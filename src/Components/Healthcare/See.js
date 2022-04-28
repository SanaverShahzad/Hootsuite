import React from 'react'
import {useStyles} from '../SoicalMarketing/Style'
import { Box, Container, Grid, Button, Hidden ,FormControlLabel} from "@material-ui/core";
import Publishicon from '../Assets/img/Publish_Icon-2.svg'



export default function Save() {
    const classes = useStyles();
    return (
        <>
           <Box bgcolor="#fcbb47" py={7} > 
           <Container className="inner-container">
               <div className={classes.textcntr}>
              
               <Box mt={3} mb={4}  fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular" className={classes.savetxt}>Discover how Spectrum Health uses Hootsuite to scale social media across 23,000+ employees while successfully navigating HIPAA regulation</Box>
               
               <div className={classes.toolbarButtons}>
                  
               <Button variant="contained" color="primary">
               Watch a Demo Now
      </Button>
                </div>
                </div>
       </Container>
           </Box>


        </>
    )
}
