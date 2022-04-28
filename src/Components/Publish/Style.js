import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    textcntr:{
        textAlign:"center !important",
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
      hereplan:{
        marginTop:"180px",
    },
    hereplan2:{
        marginTop:"140px",
    },
    hotels: {
        fontFamily: " SourceSansPro-Bold",
        paddingLeft: "4px",
      },
      Christina:{
          borderRadius:"50%",
      },
      Learn: {
        maxWidth: 261,
        height:"240px",
        textAlign:"center",
        boxShadow:"0 5px 18px 3px rgba(0,0,0,.1)",
        transition:"box-shadow .1s ease-out,transform .1s ease-out",
        marginTop:"30px",
        marginBottom:"30px",
        "&:hover":{
            transform:" translateY(4px)",
        },
      
      },
      Learnmedia: {
        height: "68px",
        width:"70px",
        marginTop:"20px",
        marginLeft:"auto",
        marginRight:"auto",
      },
      Engage:{
          "&:hover":{
              color:"#17354c",
          },
      },
      contentcenter:{
          textAlign:"center",
          marginTop:"10px"
      },
      contentcenter3:{
        textAlign:"center",
        
      },
      mobilemargin:{
          marginTop:"130px",
      },
     


    //    screen query started
    [theme.breakpoints.only("md")]: {
        hereplan:{
            marginTop:"140px",
        },
        contentcenter3:{
            marginTop:"10px"
          },
      },
    //   small screen query ended


    //    screen query started
    [theme.breakpoints.only("sm")]: {
        textcntr:{
            textAlign:"left",
            '& br':{
                display:"none",
            },
        },
        hereplan:{
            marginTop:"0px",
        },
        hereplan2:{
            marginTop:"0px",
        },
        
        contentcenter2:{
            textAlign:"center",
            marginTop:"10px"
        },
      },
    //   small screen query ended



    //  mobile  screen query started
    [theme.breakpoints.only("xs")]: {
        textcntr:{
            textAlign:"left",
            '& br':{
                display:"none",
            },
        },
        savetxt:{
            fontSize:"30px",
            lineHeight:"40px",
        },
        toolbarButtons: {
            "& .MuiFormControlLabel-root":{
                flexDirection:"column",
                marginLeft:"2px",
            },
            '& .MuiButton-containedPrimary':{
                marginLeft:"0px",
                marginTop:"20px"
            },
        },
        hereplan:{
            marginTop:"0px",
            textAlign:"center",
        },
        hereplan2:{
            marginTop:"0px",
            textAlign:"center",
        },
        secret:{
            fontSize:"29px",
            lineHeight:"45px"
          },
          Learn:{
            marginLeft:"auto",
            marginRight:"auto",
          },
          contentcenter2:{
            textAlign:"center",
            marginTop:"10px"
        },
        mobilemargin:{
            marginTop:"0px",
        },
        contentcenter3:{
            marginTop:"10px"
          },
      },
    //   mobile screen query ended
}));