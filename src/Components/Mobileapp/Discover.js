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
          "I’ve definitely found myself using the PEDDLE Mobile App while on a long train ride, waiting in a line and basically anywhere that my computer isn’t readily available. It lets me continue my work from anywhere."
        </Box>
        <Box
          fontSize="20px"
          lineHeight="30px"
          textAlign="center"
          color="#241f21"
          fontFamily="SourceSansPro-Bold"
        >
          {" "}
          TONY CORTIZAS
        </Box>
        <Box
          fontSize="20px"
          mb={6}
          lineHeight="30px"
          textAlign="center"
          color="#241f21"
          fontFamily="SourceSansPro-Regular"
        >
          Vice President, Global Brand Marketing{" "}
          <span className={classes.hotels}> Meliá Hotels International </span>
        </Box>  
        </Container>
        </Box>
        </>
    )
}
