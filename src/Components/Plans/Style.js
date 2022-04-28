import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    root: {
        position:"relative",
        bottom:"160px",
      },
      media: {
        height: 140,
      },
      bgcolor:{
          backgroundColor:"#2f6b9a",
          paddingTop:"20px",
          paddingBottom:"20px",
      },
      Professional:{
          textTransform:"uppercase"
      },
      toolbarButtons: {
          textAlign:"center",
        "& .MuiButton-containedSecondary": {
          padding: "11px 55px",
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
      listfeatures:{
          padding:"0px",
          marginLeft:"0px",
          marginRight:"0px",
          display:"flex",
          paddingTop:"5px",
          paddingBottom:"5px",
          '& svg':{
              color:"#28863e",
          },
         
         
      },
       cross:{
        color:"#f40732 !important",
      },
      iconpadding:{
        paddingLeft:"5px"
      },
}));