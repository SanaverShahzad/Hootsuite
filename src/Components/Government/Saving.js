import React from 'react'
import {useStyles} from '../FinancialServices/Style'
import { Box, Container, Grid, Button, Hidden ,FormControlLabel} from "@material-ui/core";
import Publishicon from '../Assets/img/saving_icon.png'



export default function Save() {
    const classes = useStyles();
    return (
        <>
           <Box bgcolor="#143059" py={7} > 
           <Container className="inner-container">
               <div className={classes.lookingtext}>
               <Box my={1}  fontSize="20px" lineHeight="30px" color="#fff6e8" fontFamily="SourceSansPro-Bold" >SAVING LIVES USING PEDDLE</Box>
               <img src={Publishicon} />
               <Box my={2} mb={3} fontSize="48px" lineHeight="54px" color="#fff6e8" fontFamily="SourceSansPro-Bold" className={classes.Looking} >Unlocking the value of social: Streamlining
and coordinating communications
in a crisis</Box>
               <Box mt={1} mb={3}  fontSize="20px" lineHeight="30px" color="#fff6e8" fontFamily="SourceSansPro-Bold" >The Regional Municipality of Wood Buffalo (RMWB) used Hootsuite to effectively manage crisis communication on social media during and after recent wildfires.</Box>
             
              <Box my={5}>
              <div className={classes.lookingtext}>
               <Grid container>
                   <Grid item lg={4} md={4} sm={4} xs={12}>
                   <Box mt={1}  fontSize="72px" lineHeight="72px" color="#fff6e8" fontFamily="SourceSansPro-Bold" >8</Box>
                   <Box mt={1}  fontSize="20px" lineHeight="30px" color="#fff6e8" fontFamily="SourceSansPro-Regular" >team members collaborated across the province of Alberta</Box>
               
                   </Grid>
                   <Grid item lg={4} md={4} sm={4} xs={12}>
                   <Box mt={1}  fontSize="72px" lineHeight="72px" color="#fff6e8" fontFamily="SourceSansPro-Bold" >4x</Box>
                   <Box mt={1}  fontSize="20px" lineHeight="30px" color="#fff6e8" fontFamily="SourceSansPro-Regular" >increase in Twitter followers over the course of the fires</Box>
               
                   </Grid>
                   <Grid item lg={4} md={4} sm={4} xs={12}>
                   <Box mt={1}  fontSize="72px" lineHeight="72px" color="#fff6e8" fontFamily="SourceSansPro-Bold" >88,000</Box>
                   <Box mt={1}  fontSize="20px" lineHeight="30px" color="#fff6e8" fontFamily="SourceSansPro-Regular" >residents in the affected areas evacuated successfully</Box>
               
                   </Grid>
               </Grid>
               </div>
               </Box>
               <div className={classes.toolbarButtons}>
                  
               <Button variant="contained" color="secondary">
               Learn More
      </Button>
                </div>
                </div>
       </Container>
           </Box>


        </>
    )
}
