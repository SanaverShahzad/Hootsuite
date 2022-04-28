import React from 'react'
import { Box, Container, Grid, Button, IconButton,} from "@material-ui/core";
import forrester from '../Assets/img/forrester-wave-badge-shadow-1.png'

import {useStyles} from '../SoicalMarketing/Style'
export default function Forrest() {
    return (
        <>
          <Box bgcolor="rgb(238, 235, 232)" py={8}>
          <Container className="inner-container">
              <Grid container>
                  <Grid item lg={2}>
                      <img  src={forrester} width="150px" height="150px" />
                  </Grid>
                  <Grid item lg={10}>
                  <Box  fontSize="40px" lineHeight="46px" color="#241f21" fontFamily="SourceSansPro-Bold">"PEDDLE leads the pack with its seller focus and scale."</Box>
                  <Box  my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular">The Forrester New Wave™: Sales Social Engagement Tools, Q2 2019</Box>
               
                  </Grid>
              </Grid>
              </Container>
              </Box>  
        </>
    )
}
