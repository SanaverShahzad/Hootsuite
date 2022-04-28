import React from 'react'
import { Box, Container, Grid, Fab ,} from "@material-ui/core";
import Bookpost from '../Assets/img/karen.png'
import {useStyles} from '../Pinterest/Style'

export default function Integrating() {
    const classes = useStyles();
    return (
        <>
          <Container className="inner-container">
          <Container className="inner-container">
              <Box className={classes.Integrating} my={2}  textAlign="center" fontSize="40px" lineHeight="60px" color="#241f21" fontFamily="SourceSansPro-Regular">
                  'Integrating Pinterest along with the other social media platforms in PEDDLE is a game changer. With this integration, PEDDLE truly is the one-stop management tool all social media professionals need to adopt and have as part of their workplace.'
              </Box>
              <Box textAlign="center">
              <Fab  color="secondary" aria-label="add">
          <img src={Bookpost} width="56px" className={classes.fbicon} />
        </Fab>
              </Box>
              <Box mt={1}  textAlign="center" fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Karen Freberg</Box>
              <Box   textAlign="center" fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">University of Louisville</Box>
              </Container>
              </Container>  

        </>
    )
}

