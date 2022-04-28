import React from 'react'
import {useStyles} from '../FinancialServices/Style'
import { Box, Container, Grid, Button, Hidden ,FormControlLabel} from "@material-ui/core";
import Publishicon from '../Assets/img/campaign-icon.png'



export default function Save() {
    const classes = useStyles();
    return (
        <>
           <Box bgcolor="#143059" py={7} > 
           <Container className="inner-container">
               <div className={classes.lookingtext}>
               <Box my={1}  fontSize="20px" lineHeight="30px" color="#fff6e8" fontFamily="SourceSansPro-Bold" >INCREASING CAMPAIGN PERFORMANCE WITH  PEDDLE</Box>
               <img src={Publishicon} />
               <Box my={2} mb={3} fontSize="48px" lineHeight="54px" color="#fff6e8" fontFamily="SourceSansPro-Bold" className={classes.Looking} >How Georgia State University Built a Global Community of Brand Advocates
in a crisis</Box>
               <Box mt={1} mb={3}  fontSize="20px" lineHeight="30px" color="#fff6e8" fontFamily="SourceSansPro-Bold" >Discover how one of America’s most innovative universities united their brand storytelling with #TheStateWay</Box>
             
              <Box my={5}>
              <div className={classes.lookingtext}>
               <Grid container>
                   <Grid item lg={4} md={4} sm={4} xs={12}>
                   <Box mt={1}  fontSize="72px" lineHeight="72px" color="#fff6e8" fontFamily="SourceSansPro-Bold" >2.4</Box>
                   <Box mt={1}  fontSize="20px" lineHeight="30px" color="#fff6e8" fontFamily="SourceSansPro-Regular" >million social media impressions</Box>
               
                   </Grid>
                   <Grid item lg={4} md={4} sm={4} xs={12}>
                   <Box mt={1}  fontSize="72px" lineHeight="72px" color="#fff6e8" fontFamily="SourceSansPro-Bold" >#2</Box>
                   <Box mt={1}  fontSize="20px" lineHeight="30px" color="#fff6e8" fontFamily="SourceSansPro-Regular" >most innovative US university</Box>
               
                   </Grid>
                   <Grid item lg={4} md={4} sm={4} xs={12}>
                   <Box mt={1}  fontSize="72px" lineHeight="72px" color="#fff6e8" fontFamily="SourceSansPro-Bold" >90%</Box>
                   <Box mt={1}  fontSize="20px" lineHeight="30px" color="#fff6e8" fontFamily="SourceSansPro-Regular" >social media adoption rate among university executives

Learn More</Box>
               
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
