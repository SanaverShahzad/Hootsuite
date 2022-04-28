import React from 'react'
import {useStyles} from '../Plans/Style'
import { Box, Container, Grid, Button, } from "@material-ui/core";

export default function Questions() {
    const classes=useStyles();
    return (
        <>
        <Box py={5}>
        <Box mb={3} textAlign="center" fontSize="34px" lineHeight="43px" color="#241f21" fontFamily="SourceSansPro-Regular" >Frequently Asked Questions</Box>
       <Container className="inner-container">
       <Grid container spacing={3}>
            <Grid item lg={6} md={6} sm={6} xs={12} >
            <Box my={3}  fontSize="24px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" >Will I be charged at the end of my free trial?</Box>
            <Box my={3}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular" >You'll have a free 30 days to test out Peddle. At the end of your trial, regular billing begins and you'll be charged. You can avoid charges by downgrading or cancelling any time before your trial ends.</Box>
            
            
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12} >
            <Box my={3}  fontSize="24px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" >How much does Peddle cost?</Box>
            <Box my={3}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular" >Peddle pricing is tiered based on your plan type. Paid plans start at $19 per month for a Professional plan and range up to $599 per month for a Business plan. Custom solutions are available for Enterprise organizations, which have their own unique pricing structure.</Box>
            
            
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12} >
            <Box my={3}  fontSize="24px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" >What forms of payment do you accept?</Box>
            <Box my={3}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular" >We accept Visa, Mastercard, Discover credit cards, JCB, and PayPal, and for annual Business and Enterprise plans, we can invoice you. Invoices can be paid by credit card, check, wire, or ACH.</Box>
            
            
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12} >
            <Box my={3}  fontSize="24px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" >Will I be notified before my free trial ends?</Box>
            <Box my={3}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular" >Yes, you'll receive an email notification to warn you. You can also downgrade or cancel any time during your free trial to avoid any charges.</Box>
            
            
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12} >
            <Box my={3}  fontSize="24px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" >What do you mean by 30 scheduled messages?</Box>
            <Box my={3}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular" >Our Free plan lets you schedule up to 30 messages at any given time. Once you reach the limit of 30 messages, you won’t be able to schedule another message until one of your scheduled messages is published (or deleted). For unlimited scheduled messages, give our professional plan a try.</Box>
            
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12} >
            <Box my={3}  fontSize="24px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" >What do you mean by a “social profile”?</Box>
            <Box my={3}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular" >Social profiles are accounts (such as an Instagram account, your personal Twitter account, or a Facebook Page). With Peddle, you can manage multiple accounts—such as five Instagram accounts, three Twitter accounts, and two Facebook Pages—from one dashboard.</Box>
            
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12} >
            <Box my={3}  fontSize="24px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" >Does Peddle offer discounts for nonprofit organizations?</Box>
            <Box my={3}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular" >Yes, we offer a discounted rate for nonprofits on our Professional or Team plans. See if your organization qualifies by applying here.</Box>
            
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12} >
            <Box my={3}  fontSize="24px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Bold" >What happens if I reach my monthly ad spend limit?</Box>
            <Box my={3}  fontSize="20px" lineHeight="30px" color="#241f21" fontFamily="SourceSansPro-Regular" >Once you’ve reached your monthly ad spend limit, you’ll receive a notification that you have the option to upgrade your Peddle plan in order to continue to maximize the impact of your posts</Box>
            
            </Grid>
        </Grid>
        </Container>
            </Box>            
        </>
    )
}
