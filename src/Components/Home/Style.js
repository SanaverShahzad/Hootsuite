import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export const useStyles = makeStyles((theme) => ({
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
  },
  Lightupmrgn: {
    marginLeft: "136px !important",
    "& svg": {
      paddingTop: "6px",
    },
  },
  Learnbtn: {
    cursor: "pointer",
    textTransform: "capitalize",
    "&:hover": {
      color: "#d9d9d9",
    },
  },
  footersetting: {
    "& .MuiList-padding": {
      paddingTop: "0px",
      paddingBottom: "0px",
    },
    "& .MuiListItem-gutters": {
      paddingLeft: "0px",
      paddingRight: "0px",
    },
    "& .MuiButton-text": {
      padding: "6px 0px",
    },
    "& .MuiButton-textPrimary": {
      textTransform: "capitalize",
      color: "#fff",
      textAlign: "left !important",

      "&:hover": {
        color: "#2f6b9a",
      },
    },
    "& .MuiButton-label": {
      justifyContent: "end",
    },
  },
  btnstng: {
    marginTop: "-20px",
  },
  english: {
    "& svg": {
      paddingLeft: "3px",
      paddingRight: "3px",
    },
    "& .MuiButton-text": {
      fontFamily: " SourceSansPro-Bold",
      color: "#241f21",
      fontSize: "16px",
      textTransform: "capitalize",
    },
    "& .MuiIconButton-colorSecondary": {
      float: "right !important",
      padding: "3px",
      paddingTop: "10px",
      color: "#241f21",
    },
  },
  bottomfooter: {
    color: "rgb(80, 76, 77) !important",
    marginTop: "0px !important",
    fontSize: "14px !important",
    "&:hover": {
      color: "rgb(47, 107, 154) !important",
    },
  },
  trustimg: {
    textAlign: "center",
    
  },
  //  medium screen media query started
  [theme.breakpoints.only("md")]: {
    Lightupmrgn: {
      marginLeft: "25px !important",
    },
  },

  //  medium screen media query ended
  //  small screen media query started
  [theme.breakpoints.only("sm")]: {
    mrlft: {
      marginLeft: "40px",
    },
    Social: {
      marginTop: "40px",
    },
    socialmedia: {
      marginBottom: "30px",
    },
    compare: {
      marginBottom: "60px",
    },
    trustimg: {
      textAlign: "center",
      
    },
    Lightupmrgn: {
      marginLeft: "25px !important",
    },
    Applestoreimg:{
      width:"70px",
    },
    Lightupimg:{
      marginTop:"30px",
      marginLeft:"10px",
    },
    Success:{
      marginTop:"20px"
    },
  },

  //  small screen media query ended
  [theme.breakpoints.only("xs")]: {
    mrlft: {
      marginLeft: "0px",
    },
    Social: {
      marginTop: "40px",
    
    },
    Social2: {
      fontSize:"43px",
    lineHeight:"47px",
    
    },
   

    socialmedia: {
      marginBottom: "30px",
    },
    compare: {
      marginBottom: "60px",
    },
    trustimg: {
      textAlign: "center",
    },
    Lightupmrgn: {
      marginLeft: "0px !important",
    },
    Applestoreimg:{
      width:"70px",
    },
    Trusted:{
      fontSize:"35px",
    },
    Marketo:{
      width:"130px",
    },
    Lightupimg:{
      marginTop:"30px",
      marginLeft:"10px",
    },
    btnstng:{
      marginLeft:"auto",
      marginRight:"auto",
    },
    btnstng2:{
      marginLeft:"auto",
      marginRight:"auto",
    },
    paddingbtm:{
      paddingBottom:"30px"
    },
    Success:{
      marginTop:"20px"
    },
  },
   //  small screen media query started



   //  small screen media query ended
}));
