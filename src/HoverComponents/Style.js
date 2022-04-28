import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    Mainmenu:{
        position:"absolute",
        top:90,
        zIndex: 200,
        left:130,
        width:"80%",
        transition:"opacity .25s ease-in 0s,visibility 0s ease-out .25s",
        boxShadow:"0 6px 15px 0 rgba(36,31,33,.1)",
    },
   
    Buttonlist:{
        
        '& svg':{
            color:"#2f6b9a",
            marginBottom:"auto",
            marginTop:"10px",
        },
        '& .MuiButton-textPrimary':{
            fontSize:"16px",
            color:"#241f21",
            lineHeight:"23px",
            textTransform:"capitalize",
            fontFamily:"SourceSansPro-SemiBold",
            cursor:"pointer",
            display:"block",
            marginLeft:"5px",
            "&:hover":{
                color:"#2f6b9a",
                background:"none",
            },
        },
    },
    Additionallist:{
        
        '& svg':{
            color:"#2f6b9a",
            
        },
        '& .MuiButton-textSecondary':{
            fontSize:"16px",
            color:"#241f21",
            lineHeight:"23px",
            textTransform:"capitalize",
            fontFamily:"SourceSansPro-Regular",
            cursor:"pointer",
            justifyContent:"left",
           
            "&:hover":{
                color:"#2f6b9a",
            },
        },
    },
    featuresbtn:{
        position:"relative",
        top:"16px",
        '& .MuiButton-textSecondary':{
            fontSize:"16px",
            color:"#fff",
            lineHeight:"23px",
            textTransform:"capitalize",
            fontFamily:"SourceSansPro-Bold",
        },
    
    },

}));