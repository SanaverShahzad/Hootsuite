import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    fbicon:{
        borderRadius:"50%",
    },
    [theme.breakpoints.only("xs")]: {
        Integrating:{
            fontSize:"27px",
            lineHeight:"44px",
        },
    },
}));