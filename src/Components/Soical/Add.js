import React from 'react'
import {useStyles} from '../Soical/Style'
import { Box, Container, Grid, Button, Hidden ,FormControlLabel} from "@material-ui/core";
import { Player } from 'video-react';
import AFDJ from '../Assets/img/Linkedin-Card-1.jpg'
export default function Add() {
    const classes = useStyles();
    return (
        <>
          <Box bgcolor="#eeebe8" py={7} mt={5}>
          <Container className="inner-container" >
              <Box textAlign="center" fontSize="34px"className={classes.addname} mb={4} lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular">Add your social networks to PEDDLE and save time managing your social media </Box>
              <Player
    width="70%"
      playsInline
      poster={AFDJ}
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
          
          </Container>
              </Box>  
        </>
    )
}
