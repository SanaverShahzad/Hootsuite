import React from 'react'

import { Box, Button, Container, Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    hotels: {
        fontFamily: " SourceSansPro-Bold",
        paddingLeft: "4px",
      },
    [theme.breakpoints.only("xs")]: {
        secret:{
          fontSize:"29px",
        },
    },
}));



export default function Discover() {
    const classes = useStyles();
    return (
        <>
        <Box pt={10} pb={5} bgcolor="#eeebe8">
          <Container className="inner-container">
              
        <Box
          
          mb={3}
          fontSize="40px"
          lineHeight="60px"
          textAlign="center"
          color="#241f21"
          fontFamily="SourceSansPro-Regular"
          className={classes.secret}
        >
          {" "}
          "Trying to maintain the University’s reputation, from a digital communications perspective, and not have PEDDLE would be madness."
        </Box>
        <Box
          fontSize="20px"
          lineHeight="30px"
          textAlign="center"
          color="#241f21"
          fontFamily="SourceSansPro-Bold"
        >
          {" "}
          Barney Brown
        </Box>
        <Box
          fontSize="20px"
          mb={6}
          lineHeight="30px"
          textAlign="center"
          color="#241f21"
          fontFamily="SourceSansPro-Regular"
        >
          Digital Communications Manager {" "}
          <span className={classes.hotels}> University of Cambridge </span>
        </Box>  
        </Container>
        </Box>
        </>
    )
}
