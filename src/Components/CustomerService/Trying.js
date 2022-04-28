import React from 'react'

import { Box, Button, Container, Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    hotels: {
        fontFamily: " SourceSansPro-Bold",
        paddingLeft: "4px",
      },
      toolbarButtons: {
        
        textAlign:"center",
        
        '& .MuiButton-containedPrimary':{
           padding: "11px 22px",
         background: "transparent !important",
         borderRadius: "0px !important",
         fontSize: "17px",
         fontFamily: "SourceSansPro-Bold",
         textTransform: "capitalize",
         boxShadow: "none",
         border:"1px solid #143059 !important",
         marginLeft:"30px",
         color:"#143059 !important",
         '&:hover':{
             background:"#143059  !important",
             color:"#fff !important",
             cursor:"pointer",
         },
       },
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
          "We saw very quickly that people really appreciated that a brand talked back, that we listened to our customers, we listened to their problems and we tried to help them."
        </Box>
        <Box
          fontSize="20px"
          lineHeight="30px"
          textAlign="center"
          color="#241f21"
          fontFamily="SourceSansPro-Bold"
        >
          {" "}
          Andreas Maurer
        </Box>
        <Box
          fontSize="20px"
          mb={3}
          lineHeight="30px"
          textAlign="center"
          color="#241f21"
          fontFamily="SourceSansPro-Regular"
        >
        Head of Corporate PR  {" "}
          <span className={classes.hotels}> 1&1</span>
        </Box>  
         
        <div className={classes.toolbarButtons}>
                  
                  <Button variant="contained" color="primary">
                  Watch a Demo Now
         </Button>
                   </div>
        </Container>
        </Box>
        </>
    )
}
