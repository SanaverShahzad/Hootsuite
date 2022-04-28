import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 261,
        height:304,
        textAlign:"center",
        boxShadow:" 0 5px 18px 3px rgba(0,0,0,.1)",
        transition:" box-shadow .1s ease-out,transform .1s ease-out",
        '&:hover':{
            boxShadow: "0 5px 20px 3px rgba(0,0,0,.2)",
    transform: "translateY(-4px)",
    
        },
        '& .MuiCardActionArea-root':{
          height:"100%",
        },
      },
      media: {
        height: 48,
        width:48,
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"25px",
        
      },
      learn:{
        textTransform:"capitalize",
      },
      cardmrgn:{
        marginTop:"25px",
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
          marginTop:"30px",
        },
        
      },

      // small Query started
      [theme.breakpoints.only("sm")]: {
        root: {
          maxWidth: 205,
        },
        Trello:{
          marginTop:"15px",
        },
        
    },
    // small query ended

    // mobile query started
     // small Query started
     [theme.breakpoints.only("xs")]: {
      root: {
        maxWidth:"none",
        
      },
      cardsmall:{
        marginTop:"25px",
      },
      addname:{
        fontSize:"26px !important",
        lineHeight:"37px",
      },
      Trello:{
        marginTop:"15px",
        width:"100px",
      },
      Review:{
        
        width:"150px",
      },
  },
}));