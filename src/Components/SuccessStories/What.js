import React from 'react'
import {useStyles} from '../SuccessStories/Style'
import { Box, Container, Grid, Fab ,FormControlLabel} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';

export default function What() {
    const classes=useStyles();
    const [value, setValue] = React.useState(5);
    
    return (
        <>
          <Box py={5} bgcolor="#eeebe8">
              <Container className="inner-container">
          <Box  py={4} fontSize="48px" lineHeight="54px" color="#241f21" fontFamily="SourceSansPro-Bold">What our customers say about us:</Box>
          <div className={classes.ratingStar}>
          <FormControlLabel
        control={ <Rating name="simple-controlled" value={value} />}
        label={<Box pl={1} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold"> Peddle is a game-changer</Box>}
      />
      <Box mt={2} mb={4} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Italic">Hootsuite does one key thing - saves us time! We are able to schedule content, report, review content and work across teams efficiently and effectively. Hootsuite also gives us next level social media monitoring that has been invaluable to our organisation.</Box>

      </div>
      <div className={classes.ratingStar}>
          <FormControlLabel
        control={ <Rating name="simple-controlled" value={value} />}
        label={<Box pl={1} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold"> Peddle is an excellent social media tool</Box>}
      />
      <Box mt={2} mb={4} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Italic">"It makes the social world more manageable and measurable. I can manage all the profiles from one dashboard and am able to preschedule and automate content which is then measured with analytics. The team settings are also a fabulous help as multiple people can contribute and all be on the same page."</Box>

      </div>
      <div className={classes.ratingStar}>
          <FormControlLabel
        control={ <Rating name="simple-controlled" value={value} />}
        label={<Box pl={1} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold"> Great social network management service</Box>}
      />
      <Box mt={2} mb={4} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Italic">"This tool immensely improves the management process of social networks. It is very easy to program and control the publications of multiple social networks in a single panel with an efficiency that I have not seen in any other tool."</Box>

      </div>
         
          </Container>
        </Box>  
        </>
    )
}
