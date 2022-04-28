import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    textcntr:{
        textAlign:"center !important",
    },
    
 
      Learn: {
        
        textAlign:"center",
        background:"transparent !important",
        marginTop:"30px",
        marginBottom:"30px",
        boxShadow:"none !important",
        
      
      },
      Learnmedia: {
        height: "125px",
        width:"125px",
        marginTop:"20px",
        marginLeft:"auto",
        marginRight:"auto",
      },
      Engage:{
          "&:hover":{
              color:"#17354c",
          },
      },
      toolbarButtons: {
        "& .MuiButton-containedSecondary": {
          padding: "12px 22px",
          backgroundColor: "transparent !important",
          borderRadius: "0px !important",
          fontSize: "18px",
          fontFamily: "SourceSansPro-Bold",
          textTransform: "capitalize",
          boxShadow: "none",
          color: "#143059",
          border: "1px solid #143059",
          "&:hover": {
            backgroundColor: " #143059 !important",
            color: "#fff",
          },
        },
      },


    // //    screen query started
    // [theme.breakpoints.only("md")]: {
    //     hereplan:{
    //         marginTop:"140px",
    //     },
    //   },
    // //   small screen query ended


    // //    screen query started
    // [theme.breakpoints.only("sm")]: {
    //     textcntr:{
    //         textAlign:"left",
    //     },
    //     hereplan:{
    //         marginTop:"0px",
    //     },
    //     hereplan2:{
    //         marginTop:"0px",
    //     },
    //   },
    // //   small screen query ended



    //  mobile  screen query started
    [theme.breakpoints.only("xs")]: {
       
        
          Learn:{
            marginLeft:"auto",
            marginRight:"auto",
          },
      },
    //   mobile screen query ended
}));