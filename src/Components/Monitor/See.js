import React from 'react'
import {useStyles} from '../Publish/Style'
import { Box, Container, Grid, Button, Hidden ,FormControlLabel} from "@material-ui/core";
import Publishicon from '../Assets/img/Publish_Icon-2.svg'



export default function Save() {
    const classes = useStyles();
    return (
        <>
           <Box bgcolor="#143059" py={7} > 
           <Container className="inner-container">
               <div className={classes.textcntr}>
              
               <Box mt={3} mb={4}  fontSize="34px" lineHeight="43px" color="#fff6e8" fontFamily="SourceSansPro-Regular" className={classes.savetxt}>See how PEDDLE helps you stay informed about industry trends and competitor activities</Box>
               
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
