import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 347,
        backgroundColor: "transparent !important",
        boxShadow: "none",
        textAlign: "center",
        marginTop: "25px",
      },
      media: {
        height: 200,
        width: "200px",
        marginLeft:"auto",
        marginRight:"auto",
      },
      mobilemargin:{
        marginTop:"130px",
    },
      [theme.breakpoints.only("xs")]: {
        Unofficia:{
          fontSize:"34px",
        },
        media:{
          marginLeft:"auto",
          marginRight:"auto",
        },
        mobilemargin:{
            marginTop:"0px",
        },
      },
}));
