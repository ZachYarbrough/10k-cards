import { Fragment, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProductTable from '../components/ProductTable';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ExampleProduct from '../assets/images/10K_Example.jpeg';

const Buy = ({ cart, setCart }) => {
    Aos.init({ duration: 1000, once: true });

    const handleCart = (item) => {
        let cartItemAmount = cart.filter(cartItem => cartItem.name === item);
        let cartItems = cart.filter(cartItem => cartItem.name !== item);

        if (cart[0].name === 'Your Cart is Empty') {
            setCart([{ name: item, amount: 1 }])
        } else if (cartItemAmount.length >= 1) {
            setCart([...cartItems, { name: item, amount: cartItemAmount[0].amount + 1 }])
        } else if (cartItemAmount.length === 0) {
            setCart([...cart, { name: item, amount: 1 }])
        }
    }

    return (
        <Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', width: '100%' }}>
                <Typography variant="h1" sx={{ fontSize: { xs: '4vh', md: '5vh' }, fontWeight: 400, mt: 6 }}>The Modern Day Business Card</Typography>
                <Typography variant="h2" sx={{ fontSize: '2vh', fontWeight: '400', mt: 2, mb: 5 }}>The Easiest way to Spread your Name Across the World</Typography>
                <Grid container sx={{ ml: { xs: 0, md: 5 }, mb: 5, width: '70%' }}>
                    <Grid data-aos='fade-right' item xs={12} md={6} sx={{mb: {xs: 5, md: 0}}}>
                        <Box
                            component="img"
                            sx={{
                                maxHeight: 400,
                                maxWidth: 300,
                            }}
                            alt="10K Cards Logo"
                            src={ExampleProduct}
                        />
                    </Grid>
                    <Grid data-aos='fade-left' item sm={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant='h3' sx={{ fontSize: { xs: '2.5vh', md: '3vh' }, fontWeight: 500, mb: 1 }}>The Central Point of Your Networking</Typography>
                        <Typography sx={{ fontSize: { xs: '1.8vh', md: '2vh' }, mb: {  xs: 2, md: 10 } }}>From WhatsApp to Instagram to LinkedIn, provide people with the ability to connect with you like never before from one central hub.</Typography>
                    </Grid>
                </Grid>
                <ProductTable cart={cart} setCart={setCart} />
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%', my: 5, py: 5, bgcolor: 'grey.100' }}>
                <Card sx={{ flexGrow: 1, width: { md: 120 }, mr: { md: 1 }, my: 1, ml: { md: '10%' }, mx: { xs: '10%' } }}>
                    <CardHeader
                        title="Basic Package"
                        subheader="$100 USD"
                    />
                    <CardContent>
                        <Button variant='contained' color='secondary' onClick={() => handleCart('Standard Package')}>Buy Now</Button>
                    </CardContent>
                </Card>
                <Card sx={{ flexGrow: 1, width: { md: 120 }, m: { xs: 2, md: 1 }, mx: { xs: '10%' } }}>
                    <CardHeader
                        title="Premium Package"
                        subheader="$300 USD"
                    />
                    <CardContent>
                        <Button variant='contained' color='secondary' onClick={() => handleCart('Gold Package')}>Buy Now</Button>
                    </CardContent>
                </Card>
                <Card sx={{ flexGrow: 1, width: { md: 120 }, ml: { md: 1 }, my: 1, mr: { md: '10%' }, mx: { xs: '10%' } }}>
                    <CardHeader
                        title="Gold Package"
                        subheader="$500 USD"
                    />
                    <CardContent>
                        <Button variant='contained' color='secondary' onClick={() => handleCart('Premium Package')}>Buy Now</Button>
                    </CardContent>
                </Card>
            </Box>
            </Box>
            <Box bgcolor='grey.200'>
            </Box>
        </Fragment>
    );
}

export default Buy;
