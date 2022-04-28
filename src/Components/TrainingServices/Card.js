import React from 'react'
import { Box, Container, Grid, Button, Divider} from "@material-ui/core";
import rocket  from '../Assets/img/rocket.svg'
import onboard  from '../Assets/img/onboard.svg'
import users  from '../Assets/img/users_191016_184210.svg'
import {useStyles} from '../TrainingServices/Style'



export default function Card() {
    const classes=useStyles();
    return (
        <>
          <Box py={5} textAlign="center" >
              <Container className="inner-container">
                  <Grid container> 
                  <Grid item lg={4} md={4} sm={4} xs={12}>
                      <img src={rocket}  width={125} height={125}  />
                      <Box my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold"> 2,500</Box>
                      <Box my={2} fontSize="16px" lineHeight="24px" color="#241f21" fontFamily="SourceSansPro-Regular"> enterprise organizations successfully launched</Box>
                 
                  </Grid>
                  <Grid item lg={4} md={4} sm={4} xs={12}>
                      <img src={onboard}  width={125} height={125}  />
                      <Box my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold"> 4,500</Box>
                      <Box my={2} fontSize="16px" lineHeight="24px" color="#241f21" fontFamily="SourceSansPro-Regular"> enterprise users onboarded seamlessly</Box>
                 
                  </Grid>
                  <Grid item lg={4} md={4} sm={4} xs={12}>
                      <img src={users}  width={125} height={125}  />
                      <Box my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold"> 200,000+</Box>
                      <Box my={2} fontSize="16px" lineHeight="24px" color="#241f21" fontFamily="SourceSansPro-Regular"> professionals trained on product and strategy</Box>
                 
                  </Grid>
                  </Grid>
                  <div className={classes.dividertop}>
                  <Divider/>
                  </div>
              </Container>
              
              </Box>  
        </>
    )
}
