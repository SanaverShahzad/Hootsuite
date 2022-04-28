import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    textcntr:{
        textAlign:"center",
        '& .MuiFab-primary':{
          height:"200px !important",
          width:"200px !important",
          background:"none",
          border:"2px solid #c5c1c0",
          boxShadow:"none",
        
        },
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
          border:"1px solid #c5c1c0 !important",
          marginLeft:"30px",
          color:"#241f21",

          '&:hover':{
              background:"#fff !important",
              color:"#2f6b9a !important",
              cursor:"pointer",
              border:"1px solid #2f6b9a !important",
          },
        },
      },
      Mainclass:{
        '& .MuiFab-secondary':{
          height:"75px !important",
          width:"75px !important",
          background:"none",
          border:"2px solid #c5c1c0",
          boxShadow:"none",
          top:"15px",
        },
      },
      Users:{
        borderRadius:"50%"
      },
      across:{
        fontSize:"20px",
        lineHeight:"30px",
        color:"#241f21",
        fontFamily:"SourceSansPro-Regular",
     },

      [theme.breakpoints.only("xs")]: {
        savetxt:{
            fontSize:"31px",
            lineHeight:"42px",
            marginTop:"0px",
        },
        extend:{
          fontSize:"25px",
          lineHeight:"34px",
       },
       toolbarButtons: {
       
        '& .MuiButton-containedPrimary':{
          marginBottom:"20px",
        },
      },
      },
}));
