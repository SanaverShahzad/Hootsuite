import React from 'react'
import { Box, Container, Grid, Button,} from "@material-ui/core";
import {useStyles} from '../Soical/Style'
import Review from '../Assets/img/ReviewT-1.svg'
import Chute from '../Assets/img/chute-1.svg'
import Trello from '../Assets/img/Trello.png'
import Slack from '../Assets/img/Slack_180625_214907.png'

export default function Visit() {
    const classes = useStyles();
    return (
        <div>
            <Box py={5} textAlign="center">
                <Box   fontSize="34px"className={classes.addname} mb={4} lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular">Visit our App Directory to see all our integrations</Box>
            
            <Grid container justify="center">
            <Grid item lg={8} md={8} sm={8} xs={10}>
                <Grid container>
                <Grid item lg={3} md={3} sm={6} xs={6}>
                <img src={Review} className={classes.Review} />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={6}>
                <img src={Chute}  className={classes.Review}/>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={6}>
                <img src={Trello} className={classes.Trello} />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={6}>
                <img src={Slack}  className={classes.Trello}/>
            </Grid>
                </Grid>
            
            </Grid>
            </Grid>
            <div className={classes.toolbarButtons}>
            <Button variant="contained" color="secondary">
            Learn more
      </Button>
               
      
                </div>
            </Box>
        </div>
    )
}
