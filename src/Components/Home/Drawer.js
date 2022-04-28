import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import MenuIcon from '@material-ui/icons/Menu';
import {IconButton,Box, FormControlLabel,Fab,Collapse } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Logo from "../Assets/img/logo.png";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles({
  Drawerwidth:{
  '& .MuiDrawer-paperAnchorRight':{
    width:"330px  "
  },
  },
  
  list: {
 
    '& .MuiIconButton-colorPrimary':{
      float:"right",
      color:"rgb(36, 31, 33)",
      marginTop:"20px",
      marginBottom:"10px",
    },
  },
  toolbarButtons: {
    marginTop:"10px",
    "& .MuiButton-containedSecondary": {
      padding: "12px 40px",
      backgroundColor: "#28863e !important",
      borderRadius: "0px !important",
      fontSize: "16px",
      fontFamily: "SourceSansPro-Bold",
      textTransform: "capitalize",
      boxShadow: "none",
      marginLeft:"10px",
    },
    '& .MuiButton-containedPrimary':{
       padding: "11px 45px",
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
  fullList: {
    width: 'auto',
  },
  Logo:{
    marginTop:"10px",
    marginBottom:"10px",
  },
  platform:{
     background: "transparent !important",
     borderRadius: "0px !important",
     fontSize: "20px",
     fontFamily: "SourceSansPro-Bold",
     textTransform: "capitalize",
     boxShadow: "none",
   marginTop:"10px",
   
     color:"#241f21 !important",
     paddingLeft:"15px",
     '&:hover':{
      background: "transparent !important",
         color:"#241f21 !important",
         cursor:"pointer",
     },
     '& .MuiButton-label':{
       justifyContent:"end",
     },
     '& svg':{
       marginLeft:"auto",
     },
  },
  Dividermargin:{
    marginTop:"10px",
  },
  Drawerlistbutton:{
    marginLeft:"45px",
    marginRight:"0px",
    marginTop:"15px",
    
    display:"flex",
    '& .MuiFab-secondary':{
      height:"36px",
      width:"36px",
      backgroundColor:"#fff !important",
    },
    '& .MuiButton-text':{
      textTransform:"capitalize",
      fontSize:"16px",
      justifyContent:"end",
    },
  },
  listheading:{
    textTransform:"uppercase"
  },
 
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  // collapse funcations
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  // collapse funcations ended
    // collapse funcations
    const [open2, setOpen2] = React.useState(false);
    const handleClick2 = () => {
      setOpen2(!open2);
    };
    // collapse funcations ended
       // collapse funcations
       const [open3, setOpen3] = React.useState(false);
       const handleClick3 = () => {
         setOpen3(!open3);
       };
       // collapse funcations ended
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
   <div className={classes.list}
   onKeyDown={toggleDrawer(anchor, false)}>
    <div>

      <IconButton href="/" className={classes.Logo}>
      <img src={Logo} height="40px" width={125} />
      </IconButton>
      <IconButton aria-label="delete" color="primary"  onClick={toggleDrawer(anchor, false)}>
    <CloseIcon className={classes.CloseIcon} />
  </IconButton>
  <div className={classes.toolbarButtons}>
              <Button variant="contained" color="secondary">Log in</Button>
              <Button variant="contained" color="primary">
                Sign Up
              </Button>
            </div>
            <Box bgcolor="#e2e0df"  mt={3}>
            <Divider/>
           
            <Button onClick={handleClick} fullWidth className={classes.platform}>Platform {open ? <ExpandLess /> : <ExpandMore />}</Button>
        
            <Collapse in={open} timeout="auto" unmountOnExit>
        {/* list drawer one started */}
        
           <Box marginLeft="30px" mt={2}  className={classes.listheading} fontSize="16px" lineHeight="24px" color="#241f21" fontFamily="SourceSansPro-Bold" > Features</Box>
         <div className={classes.Drawerlistbutton}>
           <FormControlLabel
           
        control={ <Fab size="small" color="secondary" aria-label="add" >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="#2F6B9A"><path d="M6 12H4C3.63 12 3.33 12.3 3.33 12.67V14.67C3.33 15.03 3.63 15.33 4 15.33H6C6.37 15.33 6.67 15.03 6.67 14.67V12.67C6.67 12.3 6.37 12 6 12Z" fill="#2F6B9A"></path><path d="M6 8H4C3.63 8 3.33 8.3 3.33 8.67V10.67C3.33 11.03 3.63 11.33 4 11.33H6C6.37 11.33 6.67 11.03 6.67 10.67V8.67C6.67 8.3 6.37 8 6 8Z" fill="#2F6B9A"></path><path d="M10 12H8C7.63 12 7.33 12.3 7.33 12.67V14.67C7.33 15.03 7.63 15.33 8 15.33H10C10.37 15.33 10.67 15.03 10.67 14.67V12.67C10.67 12.3 10.37 12 10 12Z" fill="#2F6B9A"></path><path d="M10 8H8C7.63 8 7.33 8.3 7.33 8.67V10.67C7.33 11.03 7.63 11.33 8 11.33H10C10.37 11.33 10.67 11.03 10.67 10.67V8.67C10.67 8.3 10.37 8 10 8Z" fill="#2F6B9A"></path><path d="M14 8H12C11.63 8 11.33 8.3 11.33 8.67V10.67C11.33 11.03 11.63 11.33 12 11.33H14C14.37 11.33 14.67 11.03 14.67 10.67V8.67C14.67 8.3 14.37 8 14 8Z" fill="#2F6B9A"></path><path d="M4.33 4C4.15 4 4 3.82 4 3.6V0.4C4 0.18 4.15 0 4.33 0 4.52 0 4.67 0.18 4.67 0.4V3.6C4.67 3.82 4.52 4 4.33 4Z" fill="#2F6B9A"></path><path d="M16.83 1.33H14.87V3.28C14.87 3.93 14.34 4.46 13.7 4.46 13.05 4.46 12.52 3.93 12.52 3.28V1.33H5.48V3.28C5.48 3.93 4.95 4.46 4.3 4.46 3.66 4.46 3.13 3.93 3.13 3.28V1.33H1.17C0.53 1.33 0 1.86 0 2.5V16.16C0 16.81 0.53 17.33 1.17 17.33H16.83C17.47 17.33 18 16.81 18 16.16V2.5C18 1.86 17.47 1.33 16.83 1.33ZM17.22 16.16C17.22 16.38 17.04 16.55 16.83 16.55H1.17C0.96 16.55 0.78 16.38 0.78 16.16V6.41H17.22V16.16Z" fill="#2F6B9A"></path><path d="M13.67 4C13.85 4 14 3.82 14 3.6V0.4C14 0.18 13.85 0 13.67 0 13.48 0 13.33 0.18 13.33 0.4V3.6C13.33 3.82 13.48 4 13.67 4Z" fill="#2F6B9A"></path></svg>
      </Fab>}
        label={<Button  href="/publish" >publish</Button>}
      />
      </div>
       <div className={classes.Drawerlistbutton}>
       <FormControlLabel     
        control={ <Fab size="small" color="secondary" aria-label="add" >
      <svg width="18" height="18" viewBox="0 0 20 20" fill="#2F6B9A"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.16 10.19C10.57 10.19 12.43 7.45 12.43 5.1V4.31C12.43 1.93 10.52 0 8.16 0 5.81 0 3.9 1.93 3.9 4.31V5.1C3.9 7.45 5.76 10.19 8.16 10.19Z" fill="#2F6B9A"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.61 15.21C8.62 14.2 8.45 12.69 9.08 11.5 6.16 11.21 3.55 11.77 2.24 12.17 0.9 12.57 0 13.79 0 15.2V16.84C0 17.05 0.34 17.37 0.56 17.37H11.74L9.61 15.21Z" fill="#2F6B9A"></path><path d="M17.33 11.24C16.84 10.75 16.16 10.5 15.47 10.57 14.95 10.63 14.47 10.85 14.1 11.21 13.73 10.85 13.26 10.63 12.74 10.57 12.05 10.5 11.37 10.75 10.88 11.24 9.98 12.14 9.98 13.61 10.88 14.52L13.83 17.49C13.9 17.56 14 17.6 14.1 17.6 14.21 17.6 14.31 17.56 14.38 17.49L17.33 14.52C18.22 13.61 18.22 12.14 17.33 11.24Z" fill="#2F6B9A"></path></svg>   </Fab>}
        label={<Button href="/engage">Engage</Button>}
      />
      </div>
      <div className={classes.Drawerlistbutton}>
       <FormControlLabel
           
        control={ <Fab size="small" color="secondary" aria-label="add" >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="#2F6B9A"><path d="M14.29 12.71C15.3 11.36 15.86 9.79 15.86 7.99 15.86 3.6 12.38 0 7.99 0 3.6 0 0 3.6 0 7.99 0 12.38 3.6 15.98 7.99 15.98 9.79 15.98 11.48 15.41 12.71 14.4L16.09 17.77C16.31 18 16.65 18.11 16.88 18.11 17.1 18.11 17.44 18 17.66 17.77 18.11 17.33 18.11 16.65 17.66 16.2L14.29 12.71ZM7.99 13.61C4.84 13.61 2.25 11.14 2.25 7.99 2.25 4.84 4.84 2.25 7.99 2.25 11.14 2.25 13.73 4.84 13.73 7.99 13.73 11.14 11.14 13.61 7.99 13.61Z" fill="#2F6B9A"></path></svg>     </Fab>}
        label={<Button href="/monitor">Monitor</Button>}
      />
      </div>
      <div className={classes.Drawerlistbutton}>
       <FormControlLabel
        control={ <Fab size="small" color="secondary" aria-label="add" >
      <svg width="18" height="18" viewBox="0 0 20 20" fill="#2F6B9A"><path d="M13.52 4.65C13.42 4.65 13.31 4.67 13.21 4.68 13.05 5.43 12.97 6.19 12.98 6.95 12.97 7.72 13.05 8.48 13.21 9.22 13.31 9.24 13.42 9.25 13.52 9.26 14.72 9.26 15.7 8.22 15.7 6.95 15.7 5.68 14.72 4.65 13.52 4.65Z" fill="#2F6B9A"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.64 13.23L4.19 11.77 6.41 17.16C6.68 17.82 7.34 18.26 8.06 18.26 8.29 18.26 8.51 18.21 8.72 18.13 9.63 17.77 10.07 16.74 9.71 15.84L8.64 13.23Z" fill="#2F6B9A"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.34 0.26C14.07 0.26 13.81 0.31 13.56 0.41V0.41L2.12 4.24C0.85 4.55-0.03 5.72 0 7.03 -0.05 8.35 0.81 9.53 2.07 9.86L13.56 13.71V13.71C13.81 13.81 14.07 13.86 14.34 13.86 16.39 13.86 18 10.87 18 7.06 18 3.24 16.39 0.26 14.34 0.26ZM14.34 12.73C13.15 12.73 11.81 10.4 11.81 7.06 11.81 3.72 13.15 1.39 14.34 1.39 15.54 1.39 16.88 3.72 16.88 7.06 16.88 10.4 15.54 12.73 14.34 12.73Z" fill="#2F6B9A"></path></svg>    </Fab>}
        label={<Button href="/advertise">Advertise</Button>}
      /> 
      </div>
      <div className={classes.Drawerlistbutton}> 

      <FormControlLabel
      
   control={ <Fab size="small" color="secondary" aria-label="add" >
 <svg width="18" height="18" viewBox="0 0 20 20" fill="#2F6B9A"><path d="M9.33 10H6.67C6.3 10 6 10.33 6 10.73V17.27C6 17.67 6.3 18 6.67 18H9.33C9.7 18 10 17.67 10 17.27V10.73C10 10.33 9.7 10 9.33 10Z" fill="#2F6B9A"></path><path d="M3.33 13.33H0.67C0.3 13.33 0 13.63 0 14V17.33C0 17.7 0.3 18 0.67 18H3.33C3.7 18 4 17.7 4 17.33V14C4 13.63 3.7 13.33 3.33 13.33Z" fill="#2F6B9A"></path><path d="M15.33 7.33H12.67C12.3 7.33 12 7.65 12 8.04V17.29C12 17.68 12.3 18 12.67 18H15.33C15.7 18 16 17.68 16 17.29V8.04C16 7.65 15.7 7.33 15.33 7.33Z" fill="#2F6B9A"></path><path d="M8.47 6.47L12.67 2.28V4.67H14V0.67C14 0.3 13.7 0 13.33 0H9.33V1.33H11.72L8 5.06 5.8 2.86C5.54 2.6 5.12 2.6 4.86 2.86L1.53 6.2 2.47 7.14 5.33 4.28 7.53 6.47C7.79 6.73 8.21 6.73 8.47 6.47Z" fill="#2F6B9A"></path></svg>  </Fab>}
   label={<Button href="/analyze">Analyze</Button>}
 />
      </div>
      {/* list drawer one ended */}
   {/* list drawer one started */}
        
   <Box mt={3} marginLeft="30px"  className={classes.listheading} fontSize="16px" lineHeight="24px" color="#241f21" fontFamily="SourceSansPro-Bold" > Features</Box>
         <div className={classes.Drawerlistbutton}>
         <Button href="/adds">Ads</Button>
      </div>
      
      <div className={classes.Drawerlistbutton}>
         <Button href="/impact">Impact</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button href="/insights">Insights</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button href="/mobileapp">Mobile Apps</Button>
      </div>
      
      {/* list drawer one ended */}
      {/* list drawer one started */}
        
   <Box mt={3} marginLeft="30px"  className={classes.listheading} fontSize="16px" lineHeight="24px" color="#241f21" fontFamily="SourceSansPro-Bold" > Networks / Integrations</Box>
         <div className={classes.Drawerlistbutton}>
         <Button href="/facebook">Facebook</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button href="/instagaram">Instagram</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button href="/youtube">YouTube</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button href="/linkedin">LinkedIn</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button  href="/twitter">Twitter</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button href="/pinterest">Pinterest</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button href="/soical">All Social Network Integrations</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button href="/app">Apps Directory & Partners</Button>
      </div>
      
      {/* list drawer one ended */}
      </Collapse>
           <div className={classes.Dividermargin}>
            <Divider/>
            </div>
            </Box>
             {/*plans button started  */}
             <Box bgcolor="#e2e0df"  >
            
           
            <Button  fullWidth className={classes.platform} href="/Plans">Plans  </Button>
            <div className={classes.Dividermargin}>
            <Divider/>
            </div>
         </Box>
         {/*plans button ended  */}
            
           

            {/*enterprise button started  */}
            <Box bgcolor="#e2e0df"  >
            
           
            <Button onClick={handleClick2} fullWidth className={classes.platform}>Enterprise {open2 ? <ExpandLess /> : <ExpandMore />} </Button>
        
            <Collapse in={open2} timeout="auto" unmountOnExit>
       
   {/* list drawer one started */}
        
   <Box mt={3} marginLeft="30px"  className={classes.listheading} fontSize="16px" lineHeight="24px" color="#241f21" fontFamily="SourceSansPro-Bold" > Solutions</Box>
         <div className={classes.Drawerlistbutton}>
         <Button href="/soicalmarketing">Social Marketing</Button>
      </div>
      
      <div className={classes.Drawerlistbutton}>
         <Button href="/socialselling">Social Selling</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button href="/customerservice">Customer Service</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button href="/employeeAdvocacy">Employee Advocacy</Button>
      </div>
     
      
      {/* list drawer one ended */}
      {/* list drawer one started */}
        
   <Box mt={3} marginLeft="30px"  className={classes.listheading} fontSize="16px" lineHeight="24px" color="#241f21" fontFamily="SourceSansPro-Bold" > Industries</Box>
         <div className={classes.Drawerlistbutton}>
         <Button href="/financialservices">Financial Services</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button href="/government" >Government</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button href="/healthcare">Health Care</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button href="/highereducation">Higher Education</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button   href="/Agencies">Agencies</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button href="/Successstories">Success Stories</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button href="trainingservices">Training and Services</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button href="/publish">Partners</Button>
      </div>
      
      {/* list drawer one ended */}
      </Collapse>
           <div className={classes.Dividermargin}>
            <Divider/>
            </div>
            </Box>

            {/* enterprise button ended */}
             {/*enterprise button started  */}
             <Box bgcolor="#e2e0df"  >
            
           
            <Button onClick={handleClick3} fullWidth className={classes.platform}>Resources {open3 ? <ExpandLess /> : <ExpandMore />} </Button>
        
            <Collapse in={open3} timeout="auto" unmountOnExit>
       
   {/* list drawer one started */}
        
   <Box mt={3} marginLeft="30px" className={classes.listheading} fontSize="16px" lineHeight="24px" color="#241f21" fontFamily="SourceSansPro-Bold" > Resources</Box>
         <div className={classes.Drawerlistbutton}>
         <Button href="/soicalmarketing">Blog</Button>
      </div>
      
      <div className={classes.Drawerlistbutton}>
         <Button href="/socialselling">Resources Library</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button href="/customerservice">Webinars</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button href="/employeeAdvocacy">Social Media Trends</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button href="/employeeAdvocacy">Case Studies</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button href="/employeeAdvocacy">Help Center</Button>
      </div>
      {/* list drawer one ended */}
      {/* list drawer one started */}
        
   <Box mt={3} marginLeft="30px" className={classes.listheading} fontSize="16px" lineHeight="24px" color="#241f21" fontFamily="SourceSansPro-Bold" >Hootsuite Academy (Social Media Education)</Box>
         <div className={classes.Drawerlistbutton}>
         <Button href="/financialservices">Courses</Button>
      </div>
      <div className={classes.Drawerlistbutton}>
         <Button href="/government" >Certifications</Button>
      </div>
     
      {/* list drawer one ended */}
      </Collapse>
           <div className={classes.Dividermargin}>
            <Divider/>
            </div>
            </Box>

            {/* enterprise button ended */}
    </div>
    </div>
   
  );

  return (
    <div>
      
      {[ 'right',].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon/></Button>
          <Drawer className={classes.Drawerwidth} anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      
    </div>
  );
}
