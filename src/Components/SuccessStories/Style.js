import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    root: {
   height:"451px",
   marginTop:"40px !important",
   boxShadow:"0 3px 13px 3px rgba(0,0,0,.25)",
   textAlign:"center",
   '&:hover':{
    transform: "translateY(-7px)",
    transition: "0.3s ease-in-out",
   },
   '& .CardActionArea':{
    paddingLeft:"20px",
    paddingRight:"20px",
   },
      },
      media: {
          maxWidth:"200px",
        height: 26,
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"60px",
        marginBottom:"60px",
        
      },
      Translink: {
        maxWidth:"140px",
      height: 62,
      marginLeft:"auto",
      marginRight:"auto",
      marginTop:"30px",
      marginBottom:"30px",
      
    },
      melia:{
        maxWidth:"558px",
        height: "422px",
        marginTop:"13px",
      },
      Tony:{
          fontFamily:"SourceSansPro-Bold",
      },
      toolbarButtons: {
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
      Customerimage:{
        textAlign:"center",
      },
      Dennis:{
        borderRadius:"50%",
      },
      Hongkongtext:{
        fontFamily:"SourceSansPro-Bold",
      },
      ratingStar:{
        '& .MuiRating-root':{
          color:"#241f21 !important",
        },
      },

      
     [theme.breakpoints.only("xs")]: {
      ratingStar:{
        '& .MuiFormControlLabel-root':{
          display:"grid",
        },
       
      },
     },
}));