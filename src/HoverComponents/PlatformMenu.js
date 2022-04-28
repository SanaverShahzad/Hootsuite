import React, {useEffect, useState} from 'react'
import { Container, Box, Drawer ,Grid, FormControlLabel, Button} from "@material-ui/core";
import DateRangeIcon from '@material-ui/icons/DateRange';
import { useStyles } from './Style'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import SearchIcon from '@material-ui/icons/Search';
import SpeakerIcon from '@material-ui/icons/Speaker';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
  Link
} from "react-router-dom";

export default function Platform({setPlatform}) {
  const classes = useStyles();

    return (
        <>
           {/* <Box bgcolor="#143059" py={3}> */}
<div onMouseEnter={setPlatform(true)}
               onMouseLeave={setPlatform(false)}  >


               <Container className="inner-container" 
               >
                   <Box py={2} bgcolor="#fff" className={classes.Mainmenu}>
                   <div className="hover-container">
                       <Grid container spacing={10}>
                           <Grid item lg={5}>
                               <Box fontSize="16px" borderBottom="2px solid #c5c1c0 " pb={1} lineHeight="30px" color="#b6b2b0" fontFamily="SourceSansPro-SemiBold"> Features </Box>
                             <Box mt={2}>
                               <div className={classes.Buttonlist}>
                               <FormControlLabel
        control={<DateRangeIcon fontSize="medium" />}
        label={
          <Link to="/publish">
        <Button  color="primary"> <Box textAlign="left"> publish</Box>
        <Box textAlign="left" fontFamily="SourceSansPro-Regular" > Share and schedule engaging content to your profiles</Box>
        </Button>
        </Link>
      }
      />
      </div>
      </Box>
      <div className={classes.Buttonlist}>
                               <FormControlLabel
        control={<EmojiPeopleIcon fontSize="medium" />}
        label={
          <Link to="/engage">
      <Button  color="primary"> <Box textAlign="left"> Engage</Box>
        <Box textAlign="left" fontFamily="SourceSansPro-Regular" >Address incoming messages and deliver timely replies</Box>
        </Button>
        </Link>
      }
      />
      </div>
      <div className={classes.Buttonlist}>
                               <FormControlLabel
        control={<SearchIcon fontSize="medium" />}
        label={
       <Link to="/monitor">
      <Button color="primary"> <Box textAlign="left"> Monitor</Box>
        <Box textAlign="left" fontFamily="SourceSansPro-Regular" >Stay informed about Market trends and competitors</Box>
        </Button>
        </Link>
      }
      />
      </div>
      <div className={classes.Buttonlist}>
                               <FormControlLabel
        control={<SpeakerIcon fontSize="medium" />}
        label={
          <Link to="/advertise">
        <Button  color="primary"> <Box textAlign="left"> Advertise</Box>
        <Box textAlign="left" fontFamily="SourceSansPro-Regular" >Promote your organic content and manage paid ads</Box>
        </Button>
        </Link>
        }
      />
      </div>
      <div className={classes.Buttonlist}>
                               <FormControlLabel
        control={<SignalCellularAltIcon fontSize="medium" />}
        label={
       <Link to="/analyze">
      <Button  color="primary"> <Box textAlign="left"> Analyze</Box>
        <Box textAlign="left" fontFamily="SourceSansPro-Regular" >Measure your results across all social networks</Box>
        </Button>
        </Link>
      }
      />
      </div>
                           </Grid>
                           <Grid item lg={3}>
                           <Box fontSize="16px" borderBottom="2px solid #c5c1c0 " pb={1} lineHeight="30px" color="#b6b2b0" fontFamily="SourceSansPro-SemiBold"> Additional Features</Box>
                        <Box mt={2}>
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={
          <Link to="/adds">
          <Button   color="secondary"> Ads </Button  >
          </Link>
      }
      />
                         </div>
                         </Box>
                        
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={
          <Link to="/impact">
          <Button   color="secondary"> Impact </Button>
          </Link>
      }
      />
                         </div>
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={
          <Link to="/insights">
          <Button   color="secondary"> Insights </Button>
          </Link>
      }
      />
                         </div>
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={
          <Link to="/mobileapp">
          <Button   color="secondary"> Mobile Apps </Button>
          </Link>
      }
      />
                         </div>
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={
          <Link to="/brandambassador">
          <Button  color="secondary">Brand Ambassador </Button>
          </Link>
      }
      />
                         </div>
                           </Grid>
                           <Grid item lg={4}>
                           <Box fontSize="16px" borderBottom="2px solid #c5c1c0 " pb={1} lineHeight="30px" color="#b6b2b0" fontFamily="SourceSansPro-SemiBold">  Networks / Integrations</Box>
                        <Box mt={2}>
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={
          <Link to="/facebook">
          <Button   color="secondary"> Facebook </Button>
          </Link>
      }
      />
                         </div>
                         </Box>
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={
          <Link to="/instagaram">  
        <Button   color="secondary"> Instagram </Button>
        </Link>
      }
      />
                         </div>
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={
       <Link to="/youtube">  
          <Button  color="secondary"> YouTube </Button>
     </Link>
      }
      />
                         </div>
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={
          <Link to="/linkedin"> 
        <Button  color="secondary">  LinkedIn </Button>
        </Link>
      }
      />
                         </div>
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={
          <Link to="/twitter"> 
          <Button   color="secondary"> Twitter </Button>
          </Link>
      }
      />
                         </div>
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={
          <Link to="/pinterest"> 
          <Button  color="secondary"> Pinterest </Button>
          </Link>
      }
      />
                         </div>
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={
          <Link to="/soical"> 
          <Button   color="secondary"> All Social Network Integrations </Button>
          </Link>
      }
      />
                         </div>
                         <div className={classes.Additionallist}>
                         <FormControlLabel
        control={<ChevronRightIcon fontSize="medium" />}
        label={
          <Link to="/app"> 
          <Button  color="secondary">Apps Directory & Partners</Button>
          </Link>
      }
      />
                         </div>
                           </Grid>
                       </Grid>
                   </div>
                   <Box textAlign="center" bgcolor="#2f6b9a" py={1} className={classes.featuresbtn} >
                     <Button color="secondary"> View all platform features</Button>
                     </Box> 
                   </Box>
                   
               </Container>
              
               </div>
           {/* </Box> */}
            </>
    )
}
