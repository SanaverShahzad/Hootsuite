import React from 'react'
import { useStyles } from '../Healthcare/Style'
import { Box, Container, Grid, Button,FormControlLabel, IconButton, Fab,Hidden} from "@material-ui/core";
import Users from '../Assets/img/health-care_191023_163429.svg'
import social from '../Assets/img/social-media_191023_163439.svg'
import health from '../Assets/img/health-care-guide_191023_163450.svg'



export default function Want() {
    const classes=useStyles();
    return (
        <>
                      <Box bgcolor="#fff" py={10}>
          <Container className="inner-container">
          <Box  my={2}  textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular" className={classes.extend}>Want to learn more?</Box>
        <div className={classes.textcntr}>
         <Grid container>
             <Grid item lg={4} md={4} sm={4} xs={12}>
             <Fab color="primary" aria-label="add" >
          <img src={Users} width="200px" height="200px" className={classes.Users} />
        </Fab>
        <Box  my={1}  textAlign="center" fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold" className={classes.extend}>Health Care and Social Media:</Box>
        <Box  my={2}  textAlign="center" fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" className={classes.extend}>5 Key Trends to Prepare for Success</Box>
        <div className={classes.toolbarButtons}>
               <Button variant="contained" color="primary">
        Watch a Demo Now
      </Button>
                </div>
             </Grid>
             <Grid item lg={4} md={4} sm={4} xs={12}>
             <Fab color="primary" aria-label="add" >
          <img src={social} width="200px" height="200px" className={classes.Users} />
        </Fab>
        <Box  my={1}  textAlign="center" fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold" className={classes.extend}>Social Media in Health Care:</Box>
        <Box  my={2}  textAlign="center" fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" className={classes.extend}>Stories from the Front Lines</Box>
        <div className={classes.toolbarButtons}>
               <Button variant="contained" color="primary">
        Watch a Demo Now
      </Button>
                </div>
             </Grid>
             <Grid item lg={4} md={4} sm={4} xs={12}>
             <Fab color="primary" aria-label="add" >
          <img src={Users} width="200px" height="200px" className={classes.Users} />
        </Fab>
        <Box  my={1}  textAlign="center" fontSize="30px" lineHeight="36px" color="#241f21" fontFamily="SourceSansPro-Bold" className={classes.extend}>Health Care Guide:</Box>
        <Box  my={2}  textAlign="center" fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" className={classes.extend}>Driving Patient Engagement</Box>
        <div className={classes.toolbarButtons}>
               <Button variant="contained" color="primary">
        Watch a Demo Now
      </Button>
                </div>
             </Grid>
         </Grid>
         </div>
          </Container>
          </Box>  
        </>
    )
}
