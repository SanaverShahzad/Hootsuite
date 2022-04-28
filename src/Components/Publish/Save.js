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
               <Box mt={2}>
                   <img src={Publishicon} width="128px" height="26px" />
               </Box>
               <Box mt={4} mb={2} fontSize="54px" lineHeight="60px" color="#fff6e8" fontFamily="SourceSansPro-Bold" className={classes.savetxt}>Save time creating quality content</Box>
               <Box my={2}  fontSize="20px" lineHeight="30px" color="#ffffff" fontFamily="SourceSansPro-Regular">Easily create, curate, review, and publish content that connects with all your audiences from a single dashboard.</Box>
               
               <div className={classes.toolbarButtons}>
                  
                  <FormControlLabel
        control={<Button variant="contained" color="secondary">
        Start Your Free 30-Day Trial
      </Button>}
        label={<Button variant="contained" color="primary">
        Start Your Free 30-Day Trial
      </Button>}
      />
                </div>
                </div>
       </Container>
           </Box>


        </>
    )
}
