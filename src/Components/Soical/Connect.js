import React from 'react'
import {useStyles} from '../Soical/Style'
import { Box, Container, Grid, Button, Hidden ,FormControlLabel} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Facebookicon from '../Assets/img/Vector.svg'
import Instagram from '../Assets/img/instagram.svg'
import Youtube from '../Assets/img/youtube.svg'
import Linkedin from '../Assets/img/linkedin.svg'
import Twitter from '../Assets/img/twitter.svg'
import Pinterest from '../Assets/img/pinterest.svg'



export default function Connect() {
    const classes = useStyles();
    return (
        <>
          <Container className="inner-container" >
            <Box mt={7} mb={3}  textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular">Connect with 20+ social networks</Box>
            <Container className="inner-container" >
                <Grid container >
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Facebookicon}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Box  fontSize="30px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" color="#5b6063">Facebook</Box>
       <Box my={2} fontSize="15px" lineHeight="25px" color="#241f21" fontFamily="SourceSansPro-Regular" color="#5b6063">Stay engaged with your audience and grow your following</Box>
       <Button size="small" color="primary" className={classes.learn}>
          Learn More
        </Button>
        </CardContent>
      </CardActionArea>
     
    </Card>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                    <div className={classes.cardsmall}>
                    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Instagram}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Box  fontSize="30px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" color="#5b6063">Instagram</Box>
       <Box my={2} fontSize="15px" lineHeight="25px" color="#241f21" fontFamily="SourceSansPro-Regular" color="#5b6063">Post your pictures instantly and easily</Box>
       <Button size="small" color="primary" className={classes.learn}>
          Learn More
        </Button>
        </CardContent>
      </CardActionArea>
     
    </Card>
            </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                    <div className={classes.cardsmall}>
                    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Youtube}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Box  fontSize="30px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" color="#5b6063">YouTube</Box>
       <Box my={2} fontSize="15px" lineHeight="25px" color="#241f21" fontFamily="SourceSansPro-Regular" color="#5b6063">Manage and upload original video content to share with your audience</Box>
       <Button size="small" color="primary" className={classes.learn}>
          Learn More
        </Button>
        </CardContent>
      </CardActionArea>
     
    </Card>
    </div>
                    </Grid>
                    
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                    <div className={classes.cardmrgn}>
                    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Linkedin}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Box  fontSize="30px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" color="#5b6063">LinkedIn</Box>
       <Box my={2} fontSize="15px" lineHeight="25px" color="#241f21" fontFamily="SourceSansPro-Regular" color="#5b6063">Build your business audience the smart way</Box>
       <Button size="small" color="primary" className={classes.learn}>
          Learn More
        </Button>
        </CardContent>
      </CardActionArea>
     
    </Card>
    </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                    <div className={classes.cardmrgn}>
                    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Twitter}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Box  fontSize="30px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" color="#5b6063">Twitter</Box>
       <Box my={2} fontSize="15px" lineHeight="25px" color="#241f21" fontFamily="SourceSansPro-Regular" color="#5b6063">Cut through the noise and engage with the conversations that matter</Box>
       <Button size="small" color="primary" className={classes.learn}>
          Learn More
        </Button>
        </CardContent>
      </CardActionArea>
     
    </Card>
   </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                    <div className={classes.cardmrgn}>
                    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Pinterest}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Box  fontSize="30px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" color="#5b6063">Pinterest</Box>
       <Box my={2} fontSize="15px" lineHeight="25px" color="#241f21" fontFamily="SourceSansPro-Regular" color="#5b6063">Schedule content, create boards, and pin new ideas</Box>
       <Button size="small" color="primary" className={classes.learn}>
          Learn More
        </Button>
        </CardContent>
      </CardActionArea>
     
    </Card>
 </div>
                    </Grid>

                  
                </Grid>

            </Container>
          </Container>
        </>
    )
}
