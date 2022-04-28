import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    toolbarButtons: {
        marginTop:"10px",
       
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
       "& .MuiButton-containedSecondary":{
        padding: "11px 22px",
      background: "transparent !important",
      borderRadius: "0px !important",
      fontSize: "16px",
      fontFamily: "SourceSansPro-Bold",
      textTransform: "capitalize",
      boxShadow: "none",
      border:"1px solid #fff !important",
      marginLeft:"30px",

      '&:hover':{
          background:"#fff !important",
          color:"#143059 !important",
          cursor:"pointer",
      },
    },
      },
      textcntr:{
        textAlign:"center !important",
    },
    lookingtext:{
        textAlign:"center !important",
    },
    root: {
       boxShadow:"none",
      },
      media: {
          maxWidth:125,
        height: 125,
        marginTop:"15px",
       
        marginLeft:"auto",
        marginRight:"auto",
      },
      margincard:{
          marginTop:"20px",
      },
      

      //    screen query started
[theme.breakpoints.only("sm")]: {
    textcntr:{
        textAlign:"left",
    },
 },
 //    screen query ended

// mobile query started
    
[theme.breakpoints.only("xs")]: {
    
    textcntr:{
     textAlign:"left",
 },
 savetxt:{
     fontSize:"44px",
     lineHeight:"49px",
 },
 Looking:{
    fontSize:"45px",
    lineHeight:"50px",
},
 
 },
 // mobile query ended

}));