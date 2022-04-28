import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Container, Box, Drawer } from "@material-ui/core";
import Logo from "../Assets/img/logo.png";
import Drawerr from "../Home/Drawer";
import { Hidden } from "@material-ui/core";
import Platformhover from "../../HoverComponents/PlatformMenu";
import EnterpriseMenu from "../../HoverComponents/EnterpriseMenu";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  appbar: {
    height: "90px",
    backgroundColor: "#fff",
    boxShadow: "none",
    "& .MuiToolbar-regular": {
      minHeight: "90px",
    },
  },
  hvrstng: {
    fontSize: "16px",
    fontFamily: "SourceSansPro-SemiBold",
    lineHeight: "22px",
    color: "#241f21",
    cursor: "pointer",
    textTransform: "capitalize",
    paddingLeft: "20px",
    paddingBottom: "34px",
    paddingTop: "34px",
    "&:hover": {
      color: "#2f6b9a",
      background: "none",
    },
  },
  toolbarButtons: {
    marginLeft: "auto",
    "& .MuiButton-textPrimary": {
      textTransform: "capitalize",
      color: "#241f21",
      fontSize: "16px",
      fontFamily: "SourceSansPro-Regular",

      "&:hover": {
        border: "none",
      },
    },
    "& .MuiButton-containedSecondary": {
      padding: "7px 22px",
      backgroundColor: "#28863e !important",
      borderRadius: "0px !important",
      fontSize: "16px",
      fontFamily: "SourceSansPro-Bold",
      textTransform: "capitalize",
      boxShadow: "none",
    },
  },
}));

export default function ButtonAppBar() {
  const [Platform, setPlatform] = useState({
    Platmenu: false,
    enterprise: false,
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Container className="inner-container">
          <Toolbar>
            <Link to="/">
              <IconButton edge="start" color="inherit">
                <img src={Logo} width="125px" />
              </IconButton>
            </Link>
            <Hidden smDown>
              <Link to="/impact">
                <Button
                  pl={2}
                  className={classes.hvrstng}
                  onMouseEnter={() =>
                    setPlatform({ ...Platform, Platmenu: true })
                  }
                  onMouseLeave={() =>
                    setPlatform({ ...Platform, Platmenu: false })
                  }
                >
                  Platform
                </Button>
              </Link>
              <Link to="/Plans" >
              <Button
                className={classes.hvrstng}
                pl={3}
              
                color="#241f21"
              >
                {" "}
                Plans
              </Button>
              </Link>
              <Link to="/soicalmarketing" >
              <Button
               
                className={classes.hvrstng}
                pl={3}
                onMouseEnter={() =>
                  setPlatform({ ...Platform, enterprise: true })
                }
                onMouseLeave={() =>
                  setPlatform({ ...Platform, enterprise: false })
                }
              >
                {" "}
                Enterprise
              </Button>
              </Link>
              <Link to="/analyze" >
              <Button  className={classes.hvrstng} pl={3}>
                {" "}
                Resources
              </Button>
              </Link>
              <Link to="/highereducation" >
              <Button
                className={classes.hvrstng}
                pl={3}
              
              >
                {" "}
                Education
              </Button>
              </Link>
              <Box className={classes.toolbarButtons}>
                <Button color="primary">Log in</Button>
                <Button variant="contained" color="secondary">
                  Sign Up
                </Button>
              </Box>
            </Hidden>
            <Hidden mdUp>
              <div className={classes.toolbarButtons}>
                <Drawerr />
              </div>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      {/* platform coding  started */}

      {Platform.Platmenu && (
        <Platformhover
          setPlatform={(value) => () =>
            setPlatform({ ...Platform, Platmenu: value })}
        />
      )}
      {/* platform coding  ended */}

      {/* enterprise coding  started */}

      {Platform.enterprise && (
        <EnterpriseMenu
          setenterprise={(value) => () =>
            setPlatform({ ...Platform, enterprise: value })}
        />
      )}
      {/* enterprise coding  ended */}
    </div>
  );
}
