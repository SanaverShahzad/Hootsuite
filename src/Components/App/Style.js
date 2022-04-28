import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 546,
        height:375,
        textAlign:"center",
      },
      CardHow:{
        maxWidth: 546,
        height:487,
        textAlign:"center",
        '&:hover':{
          transform: "translateY(-7px)",
          transition: "0.3s ease-in-out",
         },
      },
      media: {
          width:124,
        height: 120,
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"15px",
        marginBottom:"10px",
      },
      media2: {
        width:158,
      height: 131,
      marginLeft:"auto",
      marginRight:"auto",
      marginTop:"15px",
      marginBottom:"10px",
    },
    How:{
      width:546,
      height: 270,

    },
      toolbarButtons: {
        "& .MuiButton-containedSecondary": {
          padding: "9px 30px",
          backgroundColor: "transparent !important",
          borderRadius: "0px !important",
          fontSize: "18px",
          fontFamily: "SourceSansPro-Bold",
          textTransform: "capitalize",
          boxShadow: "none",
          color: "#143059",
          border: "1px solid #143059",
          marginTop:"10px",
          "&:hover": {
            backgroundColor: " #143059 !important",
            color: "#fff",
          },
        },
      },
         // small Query started
         [theme.breakpoints.only("sm")]: {
            root: {
              marginLeft:"auto",
              marginRight:"auto",
            },
           
            
        },
        // small query ended Directory
          // Mobile Query started
          [theme.breakpoints.only("xs")]: {
         
            Directory:{
                fontSize:"21px",
            },
            Help:{
                fontSize:"14px",
            },
            root: {
                height:390,
              },
              save:{
                  fontSize:"27px",
              },
              applications:{
                fontSize:"18px",
            },
        },
        // mobile query ended 
}))