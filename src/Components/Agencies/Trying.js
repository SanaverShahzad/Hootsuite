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
        <Box pt={10} pb={5} bgcolor="#fff">
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
          "I love partnering with the Hootsuite team. The product has boosted our campaign results, driven additional in-market traffic to sales events, and collected valuable data for our marketing efforts. Their onboarding and customer success teams are experts in the field and I enjoy working with them to enhance our product offering."
        </Box>
        <Box
          fontSize="20px"
          lineHeight="30px"
          textAlign="center"
          color="#241f21"
          fontFamily="SourceSansPro-Bold"
        >
          {" "}
          Tim Wong
        </Box>
        <Box
          fontSize="20px"
          mb={6}
          lineHeight="30px"
          textAlign="center"
          color="#241f21"
          fontFamily="SourceSansPro-Regular"
        >
         Senior Digital Marketing Specialist {" "}
          <span className={classes.hotels}> Absolute Results</span>
        </Box>  
        </Container>
        </Box>
        </>
    )
}
