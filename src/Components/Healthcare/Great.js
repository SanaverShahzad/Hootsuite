import React from 'react'
import { Box, Container, Grid, Fab ,} from "@material-ui/core";
import Bookpost from '../Assets/img/Michael-Yoder.jpg'
import {useStyles} from '../Pinterest/Style'

export default function Integrating() {
    const classes = useStyles();
    return (
        <>
         <Box bgcolor="#fcbb47" py={5}>
          <Container className="inner-container">
          <Container className="inner-container">
             
              <Box className={classes.Integrating} my={2}  textAlign="center" fontSize="40px" lineHeight="60px" color="#241f21" fontFamily="SourceSansPro-Regular">
                  'Peddle is great for us. Just this morning I was looking at direct messages and comments, making assignments that notify coordinators at different hospitals. Hootsuite empowers our team to be autonomous and take ownership—without the risk'
              </Box>
              <Box textAlign="center">
              <Fab  color="secondary" aria-label="add">
          <img src={Bookpost} width="56px" className={classes.fbicon} />
        </Fab>
              </Box>
              <Box mt={1}  textAlign="center" fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Michael Yoder</Box>
              <Box   textAlign="center" fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Social Media Consultant Spectrum Health</Box>
           
              </Container>
              </Container>  
              </Box>

        </>
    )
}

