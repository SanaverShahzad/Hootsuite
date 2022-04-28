import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  fbicon: {
    borderRadius: "50%",
  },
  margnlft: {
    marginLeft: "115px",
  },
  adscrdwidth: {
    maxWidth: 558,
    height: 390,
    ["@media (min-width:1400px)"]: {
      maxWidth: "none",
    },
  },
  Share: {
    marginTop: "50px",
    marginLeft: "30px",
  },
  root: {
    maxWidth: 546,
    height: 301,
    textAlign: "center",
  },
  media: {
    width: 95,
    height: 95,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "15px",
    marginBottom: "10px",
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
      "&:hover": {
        backgroundColor: " #143059 !important",
        color: "#fff",
      },
    },
  },

  //  small media query is started
  [theme.breakpoints.only("sm")]: {
    Share: {
      marginTop: "0px",
    },
    campaign: {
      fontSize: "30px",
      lineHeight: "38px",
    },
    root: {
      maxWidth: 336,
      height: 356,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  //  small media query is ended

  //  mobile media query is started
  [theme.breakpoints.down("xs")]: {
    Integrating: {
      fontSize: "27px",
      lineHeight: "44px",
    },
    margnlft: {
      marginLeft: "15px",
    },
    Simplify: {
      fontSize: "21px",
      marginLeft: "5px",
    },
    adscrdwidth: {
      height: "auto",
    },
    Share: {
      marginTop: "0px",
      marginLeft: "10px",
    },
    campaign: {
      fontSize: "25px",
      lineHeight: "36px",
    },
    Quickly: {
      marginTop: "8px",
    },
    Directory: {
      fontSize: "21px",
    },
    Help: {
      fontSize: "14px",
    },
    root: {
      height: 390,
    },
    save: {
      fontSize: "27px",
    },
    applications: {
      fontSize: "18px",
    },
  },
  //  mobile media query is ended
}));
