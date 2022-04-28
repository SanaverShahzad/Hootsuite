import React from 'react'
import { Box, Button, Container, Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pinmutual  from '../Assets/img/Penn.png'
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
        <Box pt={10} pb={5} bgcolor="#fff">
          <Container className="inner-container">
              <Box textAlign="center"> <img  src={Pinmutual} width={156} height={55} /> </Box>
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
          "PEDDLE provides added flexibility, extensive training, and educational opportunities that will help our Advisers become experts in social prospecting and selling."
        </Box>
        <Box
          fontSize="20px"
          lineHeight="30px"
          textAlign="center"
          color="#241f21"
          fontFamily="SourceSansPro-Bold"
        >
          {" "}
          Rob Bonsall
        </Box>
        <Box
          fontSize="20px"
          mb={6}
          lineHeight="30px"
          textAlign="center"
          color="#241f21"
          fontFamily="SourceSansPro-Regular"
        >
          Director of Social Media {" "}
          <span className={classes.hotels}> Penn Mutual </span>
        </Box>  
        </Container>
        </Box>
        </>
    )
}
