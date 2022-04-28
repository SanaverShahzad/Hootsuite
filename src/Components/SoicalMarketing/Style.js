import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
   textcntr:{
      textAlign:"center !important",
  },
   across:{
      fontSize:"20px",
      lineHeight:"30px",
      color:"#241f21",
      fontFamily:"SourceSansPro-Regular",
   },
   heremargin:{
      marginTop:"30px",
      '& .MuiIconButton-root':{
         padding:"4px",
      },
   },
   toolbarButtons: {
      marginTop:"10px",
      "& .MuiButton-containedSecondary": {
        padding: "11px 22px",
        backgroundColor: "#28863e !important",
        borderRadius: "0px !important",
        fontSize: "16px",
        fontFamily: "SourceSansPro-Bold",
        textTransform: "capitalize",
        boxShadow: "none",
      },
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
    pandaimg:{
      textAlign:"center"
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
        pandaimg:{
           textAlign:"center"
        },
        extend:{
           fontSize:"25px",
           lineHeight:"34px",
        },
        textcntr:{
         textAlign:"left",
     },
     savetxt:{
      fontSize:"30px",
      lineHeight:"40px",
  },
  delivers:{
   fontSize:"24px",
},
     },
     // mobile query ended
}));
