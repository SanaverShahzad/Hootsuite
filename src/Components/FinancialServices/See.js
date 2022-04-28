import React from 'react'
import {useStyles} from '../FinancialServices/Style'
import { Box, Container, Grid, Button, Hidden ,FormControlLabel} from "@material-ui/core";
import Publishicon from '../Assets/img/Publish_Icon-2.svg'



export default function Save() {
    const classes = useStyles();
    return (
        <>
           <Box bgcolor="#eeebe8" py={7} > 
           <Container className="inner-container">
               <div className={classes.textcntr}>
               <Box mt={3} mb={4}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" >COLLABORATE AND INTEGRATE</Box>
               <Box mt={3} mb={4}  fontSize="48px" lineHeight="54px" color="#241f21" fontFamily="SourceSansPro-Bold" className={classes.savetxt}>74% of organizations say social media is owned by several different departments. 44% say there is no collaboration between them.</Box>
               <Box my={3}   fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" >Learn about social media’s changing role in the financial services industry—and get actionable recommendations on how to evolve your strategy.</Box>
               
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
