import React from 'react'
import { Box, Container, Grid, Button,FormControlLabel, IconButton, Fab,Hidden} from "@material-ui/core";
import { useStyles } from '../Healthcare/Style'
import Users from '../Assets/img/users_191023_163254.svg'
import Education from '../Assets/img/education_191023_163303.svg'
import platform from '../Assets/img/platform_191023_163343.svg'
import analytics from '../Assets/img/analytics_191023_163354.svg'

export default function Global() {
    const classes=useStyles();
    return (
        <div>
            <Box bgcolor="#fff" py={4}>
          <Container className="inner-container">
          <Box  my={2}  textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular" className={classes.extend}>The global leader in social media management</Box>
            <div className={classes.Mainclass}>
              <Grid container spacing={4}> 
              <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Grid container>
                      <Grid item lg={2} md={2} sm={3} xs={3}>
                      <Fab color="secondary" aria-label="add" >
          <img src={Users} width="75px" height="75px" className={classes.Users} />
        </Fab>
                      </Grid>
                      <Grid item lg={10} md={10} sm={9} xs={9}> 
                      <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">The most widely used social media management platform in health care <span className={classes.across}> , trusted by over 50 of the Top 100 Social Hospitals.
(source - nursejournal.org).</span> </Box>
                      </Grid>
                  </Grid>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Grid container>
                      <Grid item lg={2} md={2} sm={3} xs={3}>
                      <Fab color="secondary" aria-label="add" >
          <img src={Education} width="75px" height="75px" className={classes.Users} />
        </Fab>
                      </Grid>
                      <Grid item lg={10} md={10} sm={9} xs={9}> 
                      <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">The most sophisticated social media education programs in health care, <span className={classes.across}>including the only social media certification program offered in conjunction with the Mayo Clinic.
</span> </Box>
                      </Grid>
                  </Grid>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Grid container>
                      <Grid item lg={2} md={2} sm={3} xs={3}>
                      <Fab color="secondary" aria-label="add" >
          <img src={platform} width="75px" height="75px" className={classes.Users} />
        </Fab>
                      </Grid>
                      <Grid item lg={10} md={10} sm={9} xs={9}> 
                      <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Consistently rated the easiest to use social media management platform <span className={classes.across}>by health care professionals.
</span> </Box>
                      </Grid>
                  </Grid>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Grid container>
                      <Grid item lg={2} md={2} sm={3} xs={3}>
                      <Fab color="secondary" aria-label="add" >
          <img src={analytics} width="75px" height="75px" className={classes.Users} />
        </Fab>
                      </Grid>
                      <Grid item lg={10} md={10} sm={9} xs={9}> 
                      <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">A robust analytics and enterprise reporting platform <span className={classes.across}>perfect for any organization.
</span> </Box>
                      </Grid>
                  </Grid>
              </Grid>


              </Grid>
              </div>
          </Container>
          </Box>
             
        </div>
    )
}
