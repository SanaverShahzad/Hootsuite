import React from 'react'
import { Box, Container, Fab} from "@material-ui/core";
import {useStyles} from '../Publish/Style'
import Christina from '../Assets/img/christina-riley@2x.jpg'


export default function Incredibly() {
    const classes = useStyles();
    return (
        <>
          <Box py={2} bgcolor="#eeebe8">
          <Container className="inner-container">
          <Box
          mt={10}
          mb={3}
          fontSize="40px"
          lineHeight="60px"
          textAlign="center"
          color="#241f21"
          fontFamily="SourceSansPro-Regular"
          className={classes.secret}
        >
          {" "}
          "PEDDLE is incredibly helpful for our social media management. Being able to schedule posts in advance is a lifesaver when things get hectic.."
        </Box>
        <Box textAlign="center">
        <Fab size="medium" color="secondary" aria-label="add" className={classes.margin}>
          <img src={Christina} height="48px" width="48px"  className={classes.Christina} />
        </Fab>
        </Box>
        <Box
          fontSize="20px"
          lineHeight="30px"
          textAlign="center"
          color="#241f21"
          fontFamily="SourceSansPro-Bold"
        >
          {" "}
          Christina Riley
        </Box>
        <Box
          fontSize="20px"
          mb={6}
          lineHeight="30px"
          textAlign="center"
          color="#241f21"
          fontFamily="SourceSansPro-Regular"
        >
          Marketing and Communications Editor{" "}
          <span className={classes.hotels}> Scottish Ballet </span>
        </Box>
        </Container>
              </Box>  
        </>
    )
}
