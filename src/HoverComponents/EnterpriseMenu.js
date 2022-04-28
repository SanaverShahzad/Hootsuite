import React, {useEffect, useState} from 'react'
import { Container, Box, Drawer ,Grid, FormControlLabel, Button} from "@material-ui/core";
import DateRangeIcon from '@material-ui/icons/DateRange';
import { useStyles } from './Style'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import SearchIcon from '@material-ui/icons/Search';
import SpeakerIcon from '@material-ui/icons/Speaker';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from "react-router-dom";

export default function Platform({setenterprise}) {
  const classes = useStyles();

    return (
        <>
           {/* <Box bgcolor="#143059" py={3}> */}
<div onMouseEnter={setenterprise(true)}
               onMouseLeave={setenterprise(false)}  >


               <Container className="inner-container" 
               >
                   <Box py={2} bgcolor="#fff" className={classes.Mainmenu}>
                   <div className="hover-container">
                       <Grid container spacing={6}>
                           
                           <Grid item lg={4}>
                           <Box fontSize="16px" borderBottom="2px solid #c5c1c0 " pb={1} lineHeight="30px" color="#b6b2b0" fontFamily="SourceSansPro-SemiBold"> Solutions</Box>
                        <Box mt={2}>
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={
        <Link to="/soicalmarketing">
        <Button  color="secondary">Social Marketing </Button>
        </Link>
        
      }
      />
                         </div>
                         </Box>
                        
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={  
          <Link to="/socialselling">
        <Button   color="secondary"> Social Selling</Button>
        </Link>
        }
      />
                         </div>
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={
          <Link to="/customerservice">
          <Button   color="secondary"> Customer Service</Button>
          </Link>
      }
      />
                         </div>
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={
          <Link to="/employeeAdvocacy">
        <Button   color="secondary">  Employee Advocacy </Button>
        </Link>
        }
      />
                         </div>
                           </Grid>
                           <Grid item lg={3}>
                           <Box fontSize="16px" borderBottom="2px solid #c5c1c0 " pb={1} lineHeight="30px" color="#b6b2b0" fontFamily="SourceSansPro-SemiBold"> Industries</Box>
                        <Box mt={2}>
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={
          <Link to="/financialservices">
          <Button  color="secondary">Financial Services </Button>
          </Link>
      }
      />
                         </div>
                         </Box>
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={
          <Link to="/government">
          <Button   color="secondary"> Government</Button>
          </Link>
      }
      />
                         </div>
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={
          <Link to="/healthcare">  
        <Button  color="secondary"> Health Care </Button>
        </Link>
      }
      />
                         </div>
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={
         <Link to="/highereducation"> 
          <Button  color="secondary"> Higher Education </Button>
          </Link> 
      }
      />
                         </div>
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={
          <Link to="/Agencies"> 
        <Button  color="secondary">Agencies</Button>
        </Link>
      }
      />
                         </div>
                        
                           </Grid>
                           <Grid item lg={5}>
                             
                             
                               <div className={classes.Buttonlist}>
                               <Link to="/Successstories">
                               <Button  color="primary"> <Box textAlign="left">Success Stories</Box>
        <Box textAlign="left" fontFamily="SourceSansPro-Regular" >See how our customers are exceeding their goals with PEDDLE.</Box>
        </Button>
        </Link>
      </div>
      
      <div className={classes.Buttonlist}>
      <Link to="/trainingservices">
                               <Button  color="primary"> <Box textAlign="left"> Training and Services</Box>
        <Box textAlign="left" fontFamily="SourceSansPro-Regular" >Set your team up for success with our professional onboarding, training and support.</Box>
        </Button>
        </Link>
      </div>
      <div className={classes.Buttonlist}>
      <Link to="/publish">
                               <Button  color="primary"> <Box textAlign="left">Partners</Box>
        <Box textAlign="left" fontFamily="SourceSansPro-Regular" > Do more with social media with our best-of-breed partnerships.</Box>
        </Button>
        </Link>
      </div>
      
                           </Grid>
                       </Grid>
                   </div>
                   <Box textAlign="center" bgcolor="#2f6b9a"  py={1} className={classes.featuresbtn} >
                   
                     <Button color="secondary"> View all platform features</Button>
                     </Box> 
                   </Box>
               </Container>
               </div>
           {/* </Box> */}
            </>
    )
}
