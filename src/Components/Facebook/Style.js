import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({

    root: {
        maxWidth: 355,
        height:397,
        boxShadow:"none",
        '& .MuiButton-textPrimary':{
            textTransform:"capitalize !important",
            color:"#2f6b9a",
            cursor:"pointer",
            fontFamily:"SourceSansPro-Regular",
            fontSize:"15px",
            marginBottom:"15px",
        },
        '&:hover':{
            transform:" translateY(-5px)",
            transition :"0.2s ease-in-out"
        },
      },
      media: {
          width:"100%",
        height: "224px",
      },

        // medium screen qury started

        [theme.breakpoints.only("sm")]: {
            root: {
                maxWidth: 215,
                height:308,
                '& .MuiButton-textPrimary':{
                    marginTop:"-15px",
                },
            },
            media: {
                width:"215px",
              height: "136px",
            },
        },
        
        // medium screen qury started


}));