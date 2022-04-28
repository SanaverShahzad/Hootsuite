import React from 'react'
import { Box, Button, Container, Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pinmutual  from '../Assets/img/OsloMet (1).png'
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
              <Box textAlign="center"> <img  src={Pinmutual} width={100} height={62} /> </Box>
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
          "When we put things in Amplify, we get a higher reach compared to our main Facebook Page."
        </Box>
        <Box
          fontSize="20px"
          lineHeight="30px"
          textAlign="center"
          color="#241f21"
          fontFamily="SourceSansPro-Bold"
        >
          {" "}
          Hallvard Lavoll
        </Box>
        <Box
          fontSize="20px"
          mb={6}
          lineHeight="30px"
          textAlign="center"
          color="#241f21"
          fontFamily="SourceSansPro-Regular"
        >
          Social Media Manager{" "}
          <span className={classes.hotels}> OsloMet </span>
        </Box>  
        </Container>
        </Box>
        </>
    )
}
