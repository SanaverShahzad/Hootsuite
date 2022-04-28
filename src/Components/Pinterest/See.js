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
              
               <Box mt={3} mb={4}  fontSize="34px" lineHeight="43px" color="#fff6e8" fontFamily="SourceSansPro-Regular" className={classes.savetxt}>Start publishing pins to Pinterest in PEDDLE</Box>
               
               <div className={classes.toolbarButtons}>
                  
               <Button variant="contained" color="primary">
               Compare Plans
      </Button>
                </div>
                </div>
       </Container>
           </Box>


        </>
    )
}
