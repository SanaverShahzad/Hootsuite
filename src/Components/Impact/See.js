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
              
               <Box my={3}   fontSize="40px" lineHeight="46px" color="#fff6e8" fontFamily="SourceSansPro-Bold" className={classes.savetxt}>Start measuring your social media ROI</Box>
               <Box my={2}   fontSize="20px" lineHeight="30px" color="#fff" fontFamily="SourceSansPro-Regular">See PEDDLE Impact in action.</Box>
              
               <div className={classes.toolbarButtons}>
                  
               <Button variant="contained" color="primary">
               Request a Demo
      </Button>
                </div>
                </div>
       </Container>
           </Box>


        </>
    )
}
