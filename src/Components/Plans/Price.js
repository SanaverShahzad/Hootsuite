import React from 'react'
import {useStyles} from '../Plans/Style'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid, Container,Box,Divider,FormControlLabel} from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
export default function Price() {
    const classes=useStyles();
    return (
        <>
        <Container className="inner-container">
          <Grid container spacing={4} justify="center">
            <Grid item lg={4} md={4} sm={6} xs={12} >
            <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.bgcolor}>
            <Box className={classes.Professional} textAlign="center" fontSize="22px" lineHeight="36px" color="#fff6e8" fontFamily="SourceSansPro-Bold"> BRONZE </Box>
        </CardContent>
        <CardContent>
        <Box  textAlign="center" fontSize="48px" lineHeight="72px" color="#241f21" fontFamily="SourceSansPro-Bold">10 USD </Box>
        <div className={classes.toolbarButtons}>
                  <Button variant="contained" color="secondary">
                  Free 30-Day Trial
                  </Button>
                   </div>
                   <Box mt={3}><Divider/></Box>
                   <Box fontSize="16px" lineHeight="24px" my={2} color="#241f21" fontFamily="SourceSansPro-Bold">Core Features</Box>
                   <FormControlLabel
                   className={classes.listfeatures}
        control={<DoneIcon fontSize="small" />}
        label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Dashboard</Box>}
      />
         <FormControlLabel
                   className={classes.listfeatures}
        control={<DoneIcon fontSize="small" />}
        label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Manage Social Networks</Box>}
      />
         <FormControlLabel
                   className={classes.listfeatures}
        control={<DoneIcon fontSize="small" />}
        label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Create and Schedule Posts</Box>}
      />
              <FormControlLabel
                          className={classes.listfeatures}
                control={<DoneIcon fontSize="small" />}
                label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Create and Publish
                Opportunities (Limited to 1) </Box>}
              />
              <FormControlLabel
              className={classes.listfeatures}
        control={<DoneIcon fontSize="small" />}
        label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Enter B2B Partnerships (Limited to 1)</Box>}
        />
      <FormControlLabel
                   className={classes.listfeatures}
        control={<ClearIcon className={classes.cross} fontSize="small" />}
        label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Contacts Feature</Box>}
      />
        <FormControlLabel
                          className={classes.listfeatures}
                control={<DoneIcon fontSize="small" />}
                label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Team Members (Limited to 2)</Box>}
              />
                <FormControlLabel
                          className={classes.listfeatures}
                control={<DoneIcon fontSize="small" />}
                label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Analytics</Box>}
              />
              <FormControlLabel
              className={classes.listfeatures}
        control={<DoneIcon fontSize="small" />}
        label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Brand Ambassadors  (Limited to 5) </Box>}
        />
      <Box my={2} textAlign="center" ><svg viewBox="6 12.3 20 20" fill="none" height="24px" width="24px" id="icon-pl251SocialCircleInstagram"><path d="M26 22.3c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10zm-12.4-5.6c-.7 0-1.6.3-2.3.9-.6.7-.9 1.6-.9 2.3v4.4c0 .8.2 1.7.9 2.4.5.6 1.5.9 2.3.9H18c.9 0 1.7-.4 2.3-.8l.1-.1.1-.1c.4-.6.8-1.4.8-2.3v-2.2-2.2c0-.8-.4-1.8-.9-2.3-.7-.7-1.6-.9-2.4-.9h-4.4zm4.5 1c.7 0 1.1.1 1.6.6.4.4.5.8.6 1.6v4.4c-.1.8-.2 1.3-.6 1.7-.4.4-.9.5-1.7.6h-4.4c-.8-.1-1.2-.2-1.6-.6-.5-.5-.6-.9-.6-1.6v-2.3-2.2c0-.7.1-1.2.6-1.6.4-.5.9-.6 1.6-.6h4.5zm-2.3 1.6c-1.5 0-2.8 1.3-2.8 2.8 0 1.6 1.3 2.8 2.8 2.8 1.6 0 2.8-1.2 2.8-2.8 0-1.5-1.2-2.8-2.8-2.8zm0 4.7c-1 0-1.8-.9-1.8-1.9 0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.9-1.9 1.9zm3-4.1c.3 0 .6-.3.6-.7 0-.3-.3-.6-.6-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7z" fill="#D93175" class="i__p0 i--icon-pl251SocialCircleInstagram__p0"></path></svg> <span className={classes.iconpadding}> <svg fill="none" viewBox="0 0 21 20" height="24px" width="24px" id="icon-pl251SocialCircleFacebook"><path d="M10.1 0c-2 0-3.9.6-5.6 1.7C2.9 2.8 1.6 4.3.8 6.2.1 8-.1 10 .3 11.9c.4 2 1.3 3.8 2.7 5.2 1.4 1.4 3.2 2.3 5.1 2.7 2 .4 4 .2 5.8-.6 1.8-.7 3.4-2 4.5-3.6 1.1-1.7 1.7-3.6 1.7-5.6 0-2.7-1.1-5.2-2.9-7.1C15.3 1.1 12.7 0 10.1 0zm2.8 5.9c0 .1-.1.1-.1.1 0 .1 0 .1-.1.1h-1.2c-.1 0-.3 0-.4.1-.1.1-.1.3-.1.4v1.3h1.8V8l-.1 1.8c0 .1 0 .1-.1.1 0 0 0 .1-.1.1H11v5.8c0 .1 0 .1-.1.1 0 .1 0 .1-.1.1H8.7c-.1 0-.1 0-.1-.1-.1 0-.1 0-.1-.1V10H7.4s0-.1-.1-.1V8v-.1H8.5V6.2c0-.6.2-1.2.7-1.6.4-.4.9-.6 1.5-.6h2c.1 0 .1 0 .1.1 0 0 .1 0 .1.1v1.7z" fill="#297EEB" class="i__p0 i--icon-pl251SocialCircleFacebook__p0"></path></svg></span> 
      <span className={classes.iconpadding}><svg fill="none" height="24px" width="24px" viewBox="0 0 21 20" id="icon-pl251SocialCircleTwitter"><path d="M10.2 0c-2 0-3.9.6-5.6 1.7C3 2.8 1.7 4.3.9 6.2.2 8 0 10 .4 12c.4 1.9 1.3 3.7 2.7 5.1 1.4 1.4 3.2 2.3 5.1 2.7 2 .4 4 .2 5.8-.6 1.8-.7 3.4-2 4.5-3.6 1.1-1.7 1.7-3.6 1.7-5.6 0-2.7-1.1-5.2-3-7.1-1.8-1.8-4.4-2.9-7-2.9zm6.4 6.4v.1c-.3.4-.6.7-1 1 0 .1-.1.1-.1.2 0 1.9-.5 3.8-1.9 5.2-1.8 1.8-4.5 2.3-6.9 1.6-.4-.1-.9-.3-1.3-.5-.1-.1-.3-.2-.4-.3h.1c.7 0 1.4-.1 2-.3.4-.1 1.1-.3 1.3-.7h-.2c-.7-.2-1.5-.5-1.9-1.6-.1-.1 0-.1 0-.1h1c-.2-.1-.3-.1-.4-.1-.4-.2-.7-.5-1-.8-.3-.4-.4-.8-.5-1.2v-.3s0-.1.1 0c.3.1.6.2.9.2-.1 0-.2-.1-.3-.2-.7-.7-1-2.1-.4-2.9.1-.1.1-.1.1 0 1.3 1.5 2.9 2.2 4.9 2.4-.1-.3-.1-.7 0-1 .1-.4.3-.7.5-1 .2-.2.5-.5.8-.6.3-.2.6-.3.9-.3h.1-.1.1c.6 0 1.2.2 1.7.6l.1.1h.1c0 .1 0 .1 0 0 .5-.1 1-.3 1.4-.5h.1v.1c-.1.2-.2.5-.4.7-.1.1-.4.5-.6.5.4-.1.8-.2 1.2-.4v.1z" fill="#2AA3EF" class="i__p0 i--icon-pl251SocialCircleTwitter__p0"></path></svg></span>
      <span className={classes.iconpadding}> <svg fill="none"height="24px" width="24px" viewBox="0 0 21 20" id="icon-pl251SocialCircleYoutube"><path d="M12.1 9.9L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zM10.3 0c-2 0-4 .6-5.6 1.7C3.1 2.8 1.8 4.3 1 6.2.3 8 .1 10 .5 12c.3 1.9 1.3 3.7 2.7 5.1 1.4 1.4 3.2 2.3 5.1 2.7 1.9.4 4 .2 5.8-.6 1.8-.7 3.4-2 4.5-3.6 1.1-1.7 1.7-3.6 1.7-5.6 0-2.7-1.1-5.2-3-7.1-1.8-1.8-4.4-2.9-7-2.9zm5.9 11.6c0 .7-.2 1.3-.7 1.8-.5.5-1.1.8-1.8.8H7c-.7 0-1.3-.3-1.8-.8s-.7-1.1-.7-1.8V8.5c0-.7.2-1.3.7-1.8.5-.5 1.1-.8 1.8-.8h6.7c.7 0 1.3.3 1.8.8s.7 1.1.7 1.8v3.1zm-4.1-1.7L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1z" fill="#D32727" class="i__p0 i--icon-pl251SocialCircleYoutube__p0"></path></svg></span>
      <span className={classes.iconpadding}><svg fill="none" height="24px" width="24px" viewBox="0 0 21 20" id="icon-pl251SocialCircleLinkedin"><path d="M11.3 8.8h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm-1-8.8C8.4 0 6.4.6 4.8 1.7 3.1 2.8 1.9 4.3 1.1 6.2.4 8 .2 10 .5 12c.4 1.9 1.4 3.7 2.8 5.1 1.4 1.4 3.2 2.3 5.1 2.7 1.9.4 3.9.2 5.8-.6 1.8-.7 3.4-2 4.5-3.6 1.1-1.7 1.6-3.6 1.6-5.6 0-2.7-1-5.2-2.9-7.1C15.5 1.1 13 0 10.3 0zM7.8 14.5v.1c0 .1-.1.1-.1.1H5.8c-.1 0-.1 0-.2-.1V8v-.1h2.2v6.6zM6.6 7c-.2 0-.4-.1-.6-.2-.2-.1-.4-.3-.5-.6-.1-.2-.1-.4 0-.7 0-.2.1-.4.3-.6.2-.1.4-.3.6-.3.2-.1.5 0 .7.1.2.1.4.2.6.4.1.2.2.4.2.7 0 .1-.1.3-.1.4-.1.2-.2.3-.3.4-.1.2-.2.2-.4.3-.1.1-.3.1-.5.1zm9.4 7.5v.1c-.1.1-.1.1-.2.1h-1.9-.1v-.1l-.1-.1V11c0-.9-.3-1.5-1.1-1.5-.3 0-.5.1-.7.2-.2.2-.4.4-.5.6 0 .2-.1.4 0 .6v3.6l-.1.1c0 .1-.1.1-.1.1h-2c0-.1 0-.1-.1-.1v-.1V8v-.1h2.2V8h.1v.8c.2-.3.5-.6.8-.8.4-.2.8-.3 1.2-.3 1.5 0 2.6 1 2.6 3.1v3.7zm-4.6-5.6v-.1l-.1.1h.1zm-.1 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1z" fill="#1178B3" class="i__p0 i--icon-pl251SocialCircleLinkedin__p0"></path></svg></span>
      <span className={classes.iconpadding}> <svg fill="none" height="24px" width="24px" viewBox="0 0 21 20" id="icon-pl251SocialCirclePinterest"><path d="M10.4 0C8.5 0 6.5.6 4.9 1.7 3.2 2.8 2 4.3 1.2 6.2.4 8 .2 10 .6 12c.4 1.9 1.4 3.7 2.8 5.1 1.4 1.4 3.1 2.3 5.1 2.7 1.9.4 3.9.2 5.8-.6 1.8-.7 3.4-2 4.4-3.6 1.1-1.7 1.7-3.6 1.7-5.6 0-2.7-1-5.2-2.9-7.1C15.6 1.1 13.1 0 10.4 0zm.8 13.2c-.7 0-1-.4-1.6-.7-.2 1.3-.5 2.5-1.2 3.4-.1.1-.1.1-.2.1H8c-.1 0-.1 0-.2-.1v-.2c-.2-2.1.6-3.7.9-5.5-.7-1.1.1-3.4 1.5-2.8 1.8.7-1.5 4.2.7 4.6 2.3.5 3.2-3.9 1.8-5.4-2-2.1-6 0-5.5 2.9.1.6.6.9.5 1.4v.2l-.2.2c-.1 0-.2.1-.2.1-.1 0-.2 0-.3-.1-.9-.4-1.2-1.3-1.1-2.5.1-2.3 2-3.8 4-4.1 2.4-.2 4.7.9 5.1 3.3.3 2.6-1.2 5.4-3.8 5.2z" fill="#BB0E23" class="i__p0 i--icon-pl251SocialCirclePinterest__p0"></path></svg></span>
       </Box>
        <Divider/>
        <Box my={2}>
        <div className={classes.toolbarButtons}>
                  <Button variant="contained" color="secondary">
                  Free 30-Day Trial
                  </Button>
                   </div>
                   </Box>
        </CardContent>
    
      </CardActionArea>
    
    </Card>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12} >
            <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.bgcolor}>
            <Box className={classes.Professional} textAlign="center" fontSize="22px" lineHeight="36px" color="#fff6e8" fontFamily="SourceSansPro-Bold"> SILVER </Box>
        </CardContent>
        <CardContent>
        <Box  textAlign="center" fontSize="48px" lineHeight="72px" color="#241f21" fontFamily="SourceSansPro-Bold">15 USD </Box>
        <div className={classes.toolbarButtons}>
                  <Button variant="contained" color="secondary">
                  Free 30-Day Trial
                  </Button>
                   </div>
                   <Box mt={3}><Divider/></Box>
                   <Box fontSize="16px" lineHeight="24px" my={2} color="#241f21" fontFamily="SourceSansPro-Bold">Core Features</Box>
                   <FormControlLabel
                   className={classes.listfeatures}
        control={<DoneIcon fontSize="small" />}
        label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Dashboard</Box>}
      />
         <FormControlLabel
                   className={classes.listfeatures}
        control={<DoneIcon fontSize="small" />}
        label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Manage Social Networks</Box>}
      />
         <FormControlLabel
                   className={classes.listfeatures}
        control={<DoneIcon fontSize="small" />}
        label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Create and Schedule Posts</Box>}
      />
              <FormControlLabel
                          className={classes.listfeatures}
                control={<DoneIcon fontSize="small" />}
                label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Create and Publish
                Opportunities (Limited to 10) </Box>}
              />
              <FormControlLabel
              className={classes.listfeatures}
        control={<DoneIcon fontSize="small" />}
        label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Enter B2B Partnerships (Limited to 5)</Box>}
        />
    
        <FormControlLabel
                   className={classes.listfeatures}
        control={<ClearIcon className={classes.cross} fontSize="small" />}
        label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Contacts Feature</Box>}
      />
        <FormControlLabel
                          className={classes.listfeatures}
                control={<DoneIcon fontSize="small" />}
                label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Team Members (Limited to 5)</Box>}
              />
                <FormControlLabel
                          className={classes.listfeatures}
                control={<DoneIcon fontSize="small" />}
                label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Analytics</Box>}
              />
              <FormControlLabel
              className={classes.listfeatures}
        control={<DoneIcon fontSize="small" />}
        label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Brand Ambassadors  (Limited to 10) </Box>}
        />
      <Box my={2} textAlign="center" ><svg viewBox="6 12.3 20 20" fill="none" height="24px" width="24px" id="icon-pl251SocialCircleInstagram"><path d="M26 22.3c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10zm-12.4-5.6c-.7 0-1.6.3-2.3.9-.6.7-.9 1.6-.9 2.3v4.4c0 .8.2 1.7.9 2.4.5.6 1.5.9 2.3.9H18c.9 0 1.7-.4 2.3-.8l.1-.1.1-.1c.4-.6.8-1.4.8-2.3v-2.2-2.2c0-.8-.4-1.8-.9-2.3-.7-.7-1.6-.9-2.4-.9h-4.4zm4.5 1c.7 0 1.1.1 1.6.6.4.4.5.8.6 1.6v4.4c-.1.8-.2 1.3-.6 1.7-.4.4-.9.5-1.7.6h-4.4c-.8-.1-1.2-.2-1.6-.6-.5-.5-.6-.9-.6-1.6v-2.3-2.2c0-.7.1-1.2.6-1.6.4-.5.9-.6 1.6-.6h4.5zm-2.3 1.6c-1.5 0-2.8 1.3-2.8 2.8 0 1.6 1.3 2.8 2.8 2.8 1.6 0 2.8-1.2 2.8-2.8 0-1.5-1.2-2.8-2.8-2.8zm0 4.7c-1 0-1.8-.9-1.8-1.9 0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.9-1.9 1.9zm3-4.1c.3 0 .6-.3.6-.7 0-.3-.3-.6-.6-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7z" fill="#D93175" class="i__p0 i--icon-pl251SocialCircleInstagram__p0"></path></svg> <span className={classes.iconpadding}> <svg fill="none" viewBox="0 0 21 20" height="24px" width="24px" id="icon-pl251SocialCircleFacebook"><path d="M10.1 0c-2 0-3.9.6-5.6 1.7C2.9 2.8 1.6 4.3.8 6.2.1 8-.1 10 .3 11.9c.4 2 1.3 3.8 2.7 5.2 1.4 1.4 3.2 2.3 5.1 2.7 2 .4 4 .2 5.8-.6 1.8-.7 3.4-2 4.5-3.6 1.1-1.7 1.7-3.6 1.7-5.6 0-2.7-1.1-5.2-2.9-7.1C15.3 1.1 12.7 0 10.1 0zm2.8 5.9c0 .1-.1.1-.1.1 0 .1 0 .1-.1.1h-1.2c-.1 0-.3 0-.4.1-.1.1-.1.3-.1.4v1.3h1.8V8l-.1 1.8c0 .1 0 .1-.1.1 0 0 0 .1-.1.1H11v5.8c0 .1 0 .1-.1.1 0 .1 0 .1-.1.1H8.7c-.1 0-.1 0-.1-.1-.1 0-.1 0-.1-.1V10H7.4s0-.1-.1-.1V8v-.1H8.5V6.2c0-.6.2-1.2.7-1.6.4-.4.9-.6 1.5-.6h2c.1 0 .1 0 .1.1 0 0 .1 0 .1.1v1.7z" fill="#297EEB" class="i__p0 i--icon-pl251SocialCircleFacebook__p0"></path></svg></span> 
      <span className={classes.iconpadding}><svg fill="none" height="24px" width="24px" viewBox="0 0 21 20" id="icon-pl251SocialCircleTwitter"><path d="M10.2 0c-2 0-3.9.6-5.6 1.7C3 2.8 1.7 4.3.9 6.2.2 8 0 10 .4 12c.4 1.9 1.3 3.7 2.7 5.1 1.4 1.4 3.2 2.3 5.1 2.7 2 .4 4 .2 5.8-.6 1.8-.7 3.4-2 4.5-3.6 1.1-1.7 1.7-3.6 1.7-5.6 0-2.7-1.1-5.2-3-7.1-1.8-1.8-4.4-2.9-7-2.9zm6.4 6.4v.1c-.3.4-.6.7-1 1 0 .1-.1.1-.1.2 0 1.9-.5 3.8-1.9 5.2-1.8 1.8-4.5 2.3-6.9 1.6-.4-.1-.9-.3-1.3-.5-.1-.1-.3-.2-.4-.3h.1c.7 0 1.4-.1 2-.3.4-.1 1.1-.3 1.3-.7h-.2c-.7-.2-1.5-.5-1.9-1.6-.1-.1 0-.1 0-.1h1c-.2-.1-.3-.1-.4-.1-.4-.2-.7-.5-1-.8-.3-.4-.4-.8-.5-1.2v-.3s0-.1.1 0c.3.1.6.2.9.2-.1 0-.2-.1-.3-.2-.7-.7-1-2.1-.4-2.9.1-.1.1-.1.1 0 1.3 1.5 2.9 2.2 4.9 2.4-.1-.3-.1-.7 0-1 .1-.4.3-.7.5-1 .2-.2.5-.5.8-.6.3-.2.6-.3.9-.3h.1-.1.1c.6 0 1.2.2 1.7.6l.1.1h.1c0 .1 0 .1 0 0 .5-.1 1-.3 1.4-.5h.1v.1c-.1.2-.2.5-.4.7-.1.1-.4.5-.6.5.4-.1.8-.2 1.2-.4v.1z" fill="#2AA3EF" class="i__p0 i--icon-pl251SocialCircleTwitter__p0"></path></svg></span>
      <span className={classes.iconpadding}> <svg fill="none"height="24px" width="24px" viewBox="0 0 21 20" id="icon-pl251SocialCircleYoutube"><path d="M12.1 9.9L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zM10.3 0c-2 0-4 .6-5.6 1.7C3.1 2.8 1.8 4.3 1 6.2.3 8 .1 10 .5 12c.3 1.9 1.3 3.7 2.7 5.1 1.4 1.4 3.2 2.3 5.1 2.7 1.9.4 4 .2 5.8-.6 1.8-.7 3.4-2 4.5-3.6 1.1-1.7 1.7-3.6 1.7-5.6 0-2.7-1.1-5.2-3-7.1-1.8-1.8-4.4-2.9-7-2.9zm5.9 11.6c0 .7-.2 1.3-.7 1.8-.5.5-1.1.8-1.8.8H7c-.7 0-1.3-.3-1.8-.8s-.7-1.1-.7-1.8V8.5c0-.7.2-1.3.7-1.8.5-.5 1.1-.8 1.8-.8h6.7c.7 0 1.3.3 1.8.8s.7 1.1.7 1.8v3.1zm-4.1-1.7L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1z" fill="#D32727" class="i__p0 i--icon-pl251SocialCircleYoutube__p0"></path></svg></span>
      <span className={classes.iconpadding}><svg fill="none" height="24px" width="24px" viewBox="0 0 21 20" id="icon-pl251SocialCircleLinkedin"><path d="M11.3 8.8h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm-1-8.8C8.4 0 6.4.6 4.8 1.7 3.1 2.8 1.9 4.3 1.1 6.2.4 8 .2 10 .5 12c.4 1.9 1.4 3.7 2.8 5.1 1.4 1.4 3.2 2.3 5.1 2.7 1.9.4 3.9.2 5.8-.6 1.8-.7 3.4-2 4.5-3.6 1.1-1.7 1.6-3.6 1.6-5.6 0-2.7-1-5.2-2.9-7.1C15.5 1.1 13 0 10.3 0zM7.8 14.5v.1c0 .1-.1.1-.1.1H5.8c-.1 0-.1 0-.2-.1V8v-.1h2.2v6.6zM6.6 7c-.2 0-.4-.1-.6-.2-.2-.1-.4-.3-.5-.6-.1-.2-.1-.4 0-.7 0-.2.1-.4.3-.6.2-.1.4-.3.6-.3.2-.1.5 0 .7.1.2.1.4.2.6.4.1.2.2.4.2.7 0 .1-.1.3-.1.4-.1.2-.2.3-.3.4-.1.2-.2.2-.4.3-.1.1-.3.1-.5.1zm9.4 7.5v.1c-.1.1-.1.1-.2.1h-1.9-.1v-.1l-.1-.1V11c0-.9-.3-1.5-1.1-1.5-.3 0-.5.1-.7.2-.2.2-.4.4-.5.6 0 .2-.1.4 0 .6v3.6l-.1.1c0 .1-.1.1-.1.1h-2c0-.1 0-.1-.1-.1v-.1V8v-.1h2.2V8h.1v.8c.2-.3.5-.6.8-.8.4-.2.8-.3 1.2-.3 1.5 0 2.6 1 2.6 3.1v3.7zm-4.6-5.6v-.1l-.1.1h.1zm-.1 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1z" fill="#1178B3" class="i__p0 i--icon-pl251SocialCircleLinkedin__p0"></path></svg></span>
      <span className={classes.iconpadding}> <svg fill="none" height="24px" width="24px" viewBox="0 0 21 20" id="icon-pl251SocialCirclePinterest"><path d="M10.4 0C8.5 0 6.5.6 4.9 1.7 3.2 2.8 2 4.3 1.2 6.2.4 8 .2 10 .6 12c.4 1.9 1.4 3.7 2.8 5.1 1.4 1.4 3.1 2.3 5.1 2.7 1.9.4 3.9.2 5.8-.6 1.8-.7 3.4-2 4.4-3.6 1.1-1.7 1.7-3.6 1.7-5.6 0-2.7-1-5.2-2.9-7.1C15.6 1.1 13.1 0 10.4 0zm.8 13.2c-.7 0-1-.4-1.6-.7-.2 1.3-.5 2.5-1.2 3.4-.1.1-.1.1-.2.1H8c-.1 0-.1 0-.2-.1v-.2c-.2-2.1.6-3.7.9-5.5-.7-1.1.1-3.4 1.5-2.8 1.8.7-1.5 4.2.7 4.6 2.3.5 3.2-3.9 1.8-5.4-2-2.1-6 0-5.5 2.9.1.6.6.9.5 1.4v.2l-.2.2c-.1 0-.2.1-.2.1-.1 0-.2 0-.3-.1-.9-.4-1.2-1.3-1.1-2.5.1-2.3 2-3.8 4-4.1 2.4-.2 4.7.9 5.1 3.3.3 2.6-1.2 5.4-3.8 5.2z" fill="#BB0E23" class="i__p0 i--icon-pl251SocialCirclePinterest__p0"></path></svg></span>
       </Box>
        <Divider/>
        <Box my={2}>
        <div className={classes.toolbarButtons}>
                  <Button variant="contained" color="secondary">
                  Free 30-Day Trial
                  </Button>
                   </div>
                   </Box>
        </CardContent>
    
      </CardActionArea>
    
    </Card>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12} >
            <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.bgcolor}>
            <Box className={classes.Professional} textAlign="center" fontSize="22px" lineHeight="36px" color="#fff6e8" fontFamily="SourceSansPro-Bold"> GOLD </Box>
        </CardContent>
        <CardContent>
        <Box  textAlign="center" fontSize="48px" lineHeight="72px" color="#241f21" fontFamily="SourceSansPro-Bold">20 USD </Box>
        <div className={classes.toolbarButtons}>
                  <Button variant="contained" color="secondary">
                  Free 30-Day Trial
                  </Button>
                   </div>
                   <Box mt={3}><Divider/></Box>
                   <Box fontSize="16px" lineHeight="24px" my={2} color="#241f21" fontFamily="SourceSansPro-Bold">Core Features</Box>
                   <FormControlLabel
                   className={classes.listfeatures}
        control={<DoneIcon fontSize="small" />}
        label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Dashboard</Box>}
      />
         <FormControlLabel
                   className={classes.listfeatures}
        control={<DoneIcon fontSize="small" />}
        label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Manage Social Networks</Box>}
      />
         <FormControlLabel
                   className={classes.listfeatures}
        control={<DoneIcon fontSize="small" />}
        label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Create and Schedule Posts</Box>}
      />
              <FormControlLabel
                          className={classes.listfeatures}
                control={<DoneIcon fontSize="small" />}
                label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Create and Publish
                Opportunities (Limited to 20) </Box>}
              />
              <FormControlLabel
              className={classes.listfeatures}
        control={<DoneIcon fontSize="small" />}
        label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Enter B2B Partnerships (Limited to 10)</Box>}
        />
         <FormControlLabel
                   className={classes.listfeatures}
        control={<ClearIcon className={classes.cross} fontSize="small" />}
        label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Contacts Feature</Box>}
      />
        <FormControlLabel
                          className={classes.listfeatures}
                control={<DoneIcon fontSize="small" />}
                label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Team Members (Limited to 10)</Box>}
              />
                <FormControlLabel
                          className={classes.listfeatures}
                control={<DoneIcon fontSize="small" />}
                label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Analytics</Box>}
              />
              <FormControlLabel
              className={classes.listfeatures}
        control={<DoneIcon fontSize="small" />}
        label={   <Box fontSize="16px" pl={1} lineHeight="24px"  color="#241f21" fontFamily="SourceSansPro-Regular">Brand Ambassadors  (Limited to 20) </Box>}
        />
      <Box my={2} textAlign="center" ><svg viewBox="6 12.3 20 20" fill="none" height="24px" width="24px" id="icon-pl251SocialCircleInstagram"><path d="M26 22.3c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10zm-12.4-5.6c-.7 0-1.6.3-2.3.9-.6.7-.9 1.6-.9 2.3v4.4c0 .8.2 1.7.9 2.4.5.6 1.5.9 2.3.9H18c.9 0 1.7-.4 2.3-.8l.1-.1.1-.1c.4-.6.8-1.4.8-2.3v-2.2-2.2c0-.8-.4-1.8-.9-2.3-.7-.7-1.6-.9-2.4-.9h-4.4zm4.5 1c.7 0 1.1.1 1.6.6.4.4.5.8.6 1.6v4.4c-.1.8-.2 1.3-.6 1.7-.4.4-.9.5-1.7.6h-4.4c-.8-.1-1.2-.2-1.6-.6-.5-.5-.6-.9-.6-1.6v-2.3-2.2c0-.7.1-1.2.6-1.6.4-.5.9-.6 1.6-.6h4.5zm-2.3 1.6c-1.5 0-2.8 1.3-2.8 2.8 0 1.6 1.3 2.8 2.8 2.8 1.6 0 2.8-1.2 2.8-2.8 0-1.5-1.2-2.8-2.8-2.8zm0 4.7c-1 0-1.8-.9-1.8-1.9 0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.9-1.9 1.9zm3-4.1c.3 0 .6-.3.6-.7 0-.3-.3-.6-.6-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7z" fill="#D93175" class="i__p0 i--icon-pl251SocialCircleInstagram__p0"></path></svg> <span className={classes.iconpadding}> <svg fill="none" viewBox="0 0 21 20" height="24px" width="24px" id="icon-pl251SocialCircleFacebook"><path d="M10.1 0c-2 0-3.9.6-5.6 1.7C2.9 2.8 1.6 4.3.8 6.2.1 8-.1 10 .3 11.9c.4 2 1.3 3.8 2.7 5.2 1.4 1.4 3.2 2.3 5.1 2.7 2 .4 4 .2 5.8-.6 1.8-.7 3.4-2 4.5-3.6 1.1-1.7 1.7-3.6 1.7-5.6 0-2.7-1.1-5.2-2.9-7.1C15.3 1.1 12.7 0 10.1 0zm2.8 5.9c0 .1-.1.1-.1.1 0 .1 0 .1-.1.1h-1.2c-.1 0-.3 0-.4.1-.1.1-.1.3-.1.4v1.3h1.8V8l-.1 1.8c0 .1 0 .1-.1.1 0 0 0 .1-.1.1H11v5.8c0 .1 0 .1-.1.1 0 .1 0 .1-.1.1H8.7c-.1 0-.1 0-.1-.1-.1 0-.1 0-.1-.1V10H7.4s0-.1-.1-.1V8v-.1H8.5V6.2c0-.6.2-1.2.7-1.6.4-.4.9-.6 1.5-.6h2c.1 0 .1 0 .1.1 0 0 .1 0 .1.1v1.7z" fill="#297EEB" class="i__p0 i--icon-pl251SocialCircleFacebook__p0"></path></svg></span> 
      <span className={classes.iconpadding}><svg fill="none" height="24px" width="24px" viewBox="0 0 21 20" id="icon-pl251SocialCircleTwitter"><path d="M10.2 0c-2 0-3.9.6-5.6 1.7C3 2.8 1.7 4.3.9 6.2.2 8 0 10 .4 12c.4 1.9 1.3 3.7 2.7 5.1 1.4 1.4 3.2 2.3 5.1 2.7 2 .4 4 .2 5.8-.6 1.8-.7 3.4-2 4.5-3.6 1.1-1.7 1.7-3.6 1.7-5.6 0-2.7-1.1-5.2-3-7.1-1.8-1.8-4.4-2.9-7-2.9zm6.4 6.4v.1c-.3.4-.6.7-1 1 0 .1-.1.1-.1.2 0 1.9-.5 3.8-1.9 5.2-1.8 1.8-4.5 2.3-6.9 1.6-.4-.1-.9-.3-1.3-.5-.1-.1-.3-.2-.4-.3h.1c.7 0 1.4-.1 2-.3.4-.1 1.1-.3 1.3-.7h-.2c-.7-.2-1.5-.5-1.9-1.6-.1-.1 0-.1 0-.1h1c-.2-.1-.3-.1-.4-.1-.4-.2-.7-.5-1-.8-.3-.4-.4-.8-.5-1.2v-.3s0-.1.1 0c.3.1.6.2.9.2-.1 0-.2-.1-.3-.2-.7-.7-1-2.1-.4-2.9.1-.1.1-.1.1 0 1.3 1.5 2.9 2.2 4.9 2.4-.1-.3-.1-.7 0-1 .1-.4.3-.7.5-1 .2-.2.5-.5.8-.6.3-.2.6-.3.9-.3h.1-.1.1c.6 0 1.2.2 1.7.6l.1.1h.1c0 .1 0 .1 0 0 .5-.1 1-.3 1.4-.5h.1v.1c-.1.2-.2.5-.4.7-.1.1-.4.5-.6.5.4-.1.8-.2 1.2-.4v.1z" fill="#2AA3EF" class="i__p0 i--icon-pl251SocialCircleTwitter__p0"></path></svg></span>
      <span className={classes.iconpadding}> <svg fill="none"height="24px" width="24px" viewBox="0 0 21 20" id="icon-pl251SocialCircleYoutube"><path d="M12.1 9.9L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zM10.3 0c-2 0-4 .6-5.6 1.7C3.1 2.8 1.8 4.3 1 6.2.3 8 .1 10 .5 12c.3 1.9 1.3 3.7 2.7 5.1 1.4 1.4 3.2 2.3 5.1 2.7 1.9.4 4 .2 5.8-.6 1.8-.7 3.4-2 4.5-3.6 1.1-1.7 1.7-3.6 1.7-5.6 0-2.7-1.1-5.2-3-7.1-1.8-1.8-4.4-2.9-7-2.9zm5.9 11.6c0 .7-.2 1.3-.7 1.8-.5.5-1.1.8-1.8.8H7c-.7 0-1.3-.3-1.8-.8s-.7-1.1-.7-1.8V8.5c0-.7.2-1.3.7-1.8.5-.5 1.1-.8 1.8-.8h6.7c.7 0 1.3.3 1.8.8s.7 1.1.7 1.8v3.1zm-4.1-1.7L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1zm0 0L9.4 8.4c-.1-.1-.2 0-.2.1v3c0 .1.1.2.2.2l2.6-1.5c.1 0 .1 0 .1-.1V10v-.1z" fill="#D32727" class="i__p0 i--icon-pl251SocialCircleYoutube__p0"></path></svg></span>
      <span className={classes.iconpadding}><svg fill="none" height="24px" width="24px" viewBox="0 0 21 20" id="icon-pl251SocialCircleLinkedin"><path d="M11.3 8.8h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm0 0h.1-.1zm-1-8.8C8.4 0 6.4.6 4.8 1.7 3.1 2.8 1.9 4.3 1.1 6.2.4 8 .2 10 .5 12c.4 1.9 1.4 3.7 2.8 5.1 1.4 1.4 3.2 2.3 5.1 2.7 1.9.4 3.9.2 5.8-.6 1.8-.7 3.4-2 4.5-3.6 1.1-1.7 1.6-3.6 1.6-5.6 0-2.7-1-5.2-2.9-7.1C15.5 1.1 13 0 10.3 0zM7.8 14.5v.1c0 .1-.1.1-.1.1H5.8c-.1 0-.1 0-.2-.1V8v-.1h2.2v6.6zM6.6 7c-.2 0-.4-.1-.6-.2-.2-.1-.4-.3-.5-.6-.1-.2-.1-.4 0-.7 0-.2.1-.4.3-.6.2-.1.4-.3.6-.3.2-.1.5 0 .7.1.2.1.4.2.6.4.1.2.2.4.2.7 0 .1-.1.3-.1.4-.1.2-.2.3-.3.4-.1.2-.2.2-.4.3-.1.1-.3.1-.5.1zm9.4 7.5v.1c-.1.1-.1.1-.2.1h-1.9-.1v-.1l-.1-.1V11c0-.9-.3-1.5-1.1-1.5-.3 0-.5.1-.7.2-.2.2-.4.4-.5.6 0 .2-.1.4 0 .6v3.6l-.1.1c0 .1-.1.1-.1.1h-2c0-.1 0-.1-.1-.1v-.1V8v-.1h2.2V8h.1v.8c.2-.3.5-.6.8-.8.4-.2.8-.3 1.2-.3 1.5 0 2.6 1 2.6 3.1v3.7zm-4.6-5.6v-.1l-.1.1h.1zm-.1 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1zm0 0h.1v-.1l-.1.1z" fill="#1178B3" class="i__p0 i--icon-pl251SocialCircleLinkedin__p0"></path></svg></span>
      <span className={classes.iconpadding}> <svg fill="none" height="24px" width="24px" viewBox="0 0 21 20" id="icon-pl251SocialCirclePinterest"><path d="M10.4 0C8.5 0 6.5.6 4.9 1.7 3.2 2.8 2 4.3 1.2 6.2.4 8 .2 10 .6 12c.4 1.9 1.4 3.7 2.8 5.1 1.4 1.4 3.1 2.3 5.1 2.7 1.9.4 3.9.2 5.8-.6 1.8-.7 3.4-2 4.4-3.6 1.1-1.7 1.7-3.6 1.7-5.6 0-2.7-1-5.2-2.9-7.1C15.6 1.1 13.1 0 10.4 0zm.8 13.2c-.7 0-1-.4-1.6-.7-.2 1.3-.5 2.5-1.2 3.4-.1.1-.1.1-.2.1H8c-.1 0-.1 0-.2-.1v-.2c-.2-2.1.6-3.7.9-5.5-.7-1.1.1-3.4 1.5-2.8 1.8.7-1.5 4.2.7 4.6 2.3.5 3.2-3.9 1.8-5.4-2-2.1-6 0-5.5 2.9.1.6.6.9.5 1.4v.2l-.2.2c-.1 0-.2.1-.2.1-.1 0-.2 0-.3-.1-.9-.4-1.2-1.3-1.1-2.5.1-2.3 2-3.8 4-4.1 2.4-.2 4.7.9 5.1 3.3.3 2.6-1.2 5.4-3.8 5.2z" fill="#BB0E23" class="i__p0 i--icon-pl251SocialCirclePinterest__p0"></path></svg></span>
       </Box>
        <Divider/>
        <Box my={2}>
        <div className={classes.toolbarButtons}>
                  <Button variant="contained" color="secondary">
                  Free 30-Day Trial
                  </Button>
                   </div>
                   </Box>
        </CardContent>
    
      </CardActionArea>
    
    </Card>
            </Grid>

            </Grid>
            
            
    </Container>
        </>
    )
}
