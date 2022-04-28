import React from 'react'
import {useStyles} from '../FinancialServices/Style'
import { Box, Container, Grid, Button, Hidden ,FormControlLabel} from "@material-ui/core";
import Publishicon from '../Assets/img/Publish_Icon-2.svg'



export default function Save() {
    const classes = useStyles();
    return (
        <>
           <Box bgcolor="#143059" py={7} > 
           <Container className="inner-container">
               <div className={classes.lookingtext}>
               <Box mt={1}  fontSize="20px" lineHeight="30px" color="#fff6e8" fontFamily="SourceSansPro-Bold" >DRIVE BUSINESS RESULTS WITH SOCIAL</Box>
               
               <Box my={2} mb={3} fontSize="48px" lineHeight="54px" color="#fff6e8" fontFamily="SourceSansPro-Bold" className={classes.Looking} >Looking for a tailored solution to help your advisors connect with new clients and increase revenue?</Box>
               <Box mt={1} mb={3}  fontSize="20px" lineHeight="30px" color="#fff6e8" fontFamily="SourceSansPro-Bold" >PEDDLE for Advisors helps your advisor network generate leads and foster relationships that turn prospects into customers.</Box>
               <Box mt={1}  fontSize="20px" lineHeight="30px" color="#fff6e8" fontFamily="SourceSansPro-Bold" >Social sellers see:</Box>
              <Box my={5}>
              <div className={classes.lookingtext}>
               <Grid container>
                   <Grid item lg={4} md={4} sm={4} xs={12}>
                   <Box mt={1}  fontSize="72px" lineHeight="72px" color="#fff6e8" fontFamily="SourceSansPro-Bold" >40%</Box>
                   <Box mt={1}  fontSize="20px" lineHeight="30px" color="#fff6e8" fontFamily="SourceSansPro-Regular" >more leads and opportunities</Box>
               
                   </Grid>
                   <Grid item lg={4} md={4} sm={4} xs={12}>
                   <Box mt={1}  fontSize="72px" lineHeight="72px" color="#fff6e8" fontFamily="SourceSansPro-Bold" >20%</Box>
                   <Box mt={1}  fontSize="20px" lineHeight="30px" color="#fff6e8" fontFamily="SourceSansPro-Regular" >higher lead volume and conversions</Box>
               
                   </Grid>
                   <Grid item lg={4} md={4} sm={4} xs={12}>
                   <Box mt={1}  fontSize="72px" lineHeight="72px" color="#fff6e8" fontFamily="SourceSansPro-Bold" >72%</Box>
                   <Box mt={1}  fontSize="20px" lineHeight="30px" color="#fff6e8" fontFamily="SourceSansPro-Regular" >higher chance to exceed quotas</Box>
               
                   </Grid>
               </Grid>
               </div>
               </Box>
               <div className={classes.toolbarButtons}>
                  
               <Button variant="contained" color="secondary">
               Compare Plans
      </Button>
                </div>
                </div>
       </Container>
           </Box>


        </>
    )
}
