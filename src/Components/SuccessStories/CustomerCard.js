import React from 'react'
import {useStyles} from '../SuccessStories/Style'
import { Box, Container, Grid, Fab ,} from "@material-ui/core";
import Hklogo from '../Assets/img/hk-logo_190621_185420.png'
import Dennis from '../Assets/img/dennis-owen_190621_185412.jpg'
import Mec from '../Assets/img/logo_mec_190621_185700.png'
import Ryan from '../Assets/img/ryan_mckee_190621_185709.jpg'
import Helix from '../Assets/img/Helix_logo.png'
import jessica from '../Assets/img/jessica-graham.jpg'

export default function CustomerCard() {
    const classes=useStyles();
    return (
        <div>
            <Box py={8}>
                <Container className="inner-container">
                    <Grid container spacing={4}>
                        <Grid item lg={4} md={4} sm={4}>
                            <div className={classes.Customerimage}>
                                <img src={Hklogo} width="195px" height="40px" />
                            
                            <Box mt={2} mb={4} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular" >
                                "As a next step, we’re looking to use social media for HR, sales, lead generation, internal brand advocacy, and social selling. Hootsuite is always providing us with advice, ideas, and solutions. The partnership helps us continuously achieve more with our strategy and product." </Box>
                                
                                <Fab color="primary" aria-label="add">
                                       <img src={Dennis} height="56px" width="56px" className={classes.Dennis} />
                                        </Fab>
                                        <Box  my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Dennis Owen</Box>
                                        <Box my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular" >
                                        General Manager, Branding and Social Media<span className={classes.Hongkongtext}> Hong Kong Airlines</span> </Box>
                   
                                 </div>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4}>
                            <div className={classes.Customerimage}>
                            <img src={Mec} width="90px" height="90px" />
                            
                            <Box mt={2} mb={4} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular" >
                                "Peddle was key in terms of helping us manage the social scalability of the #GoodTimesOutside campaign. We were trying to be hyper-regional and deliver local content to different areas of the country. To manage that on social you either need an army of people or you need a tool like Hootsuite." </Box>
                                
                                <Fab color="primary" aria-label="add">
                                       <img src={Ryan} height="56px" width="56px" className={classes.Dennis} />
                                        </Fab>
                                        <Box  my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Ryan McKee</Box>
                                        <Box my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular" >
                                        Brand Engagement Director<span className={classes.Hongkongtext}> MEC</span> </Box>
                   
                                 </div>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4}>
                            <div className={classes.Customerimage}>
                                <img src={Helix} width="148px" height="57px" />
                            
                            <Box mt={2} mb={4} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular" >
                                "We are a very consumer-focused company, and social is an amazing way to get insights and have conversations. From a marketing perspective, the entire organization does better when we know what's happening on social, and Hootsuite is a big part of that process." </Box>
                                
                                <Fab color="primary" aria-label="add">
                                       <img src={jessica} height="56px" width="56px" className={classes.Dennis} />
                                        </Fab>
                                        <Box  my={2} fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold">Jessica Graham</Box>
                                        <Box my={2}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular" >
                                        VP of Brand, Partnerships and Product Marketing<span className={classes.Hongkongtext}> Helix</span> </Box>
                   
                                 </div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}
