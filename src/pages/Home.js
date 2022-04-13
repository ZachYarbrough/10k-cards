import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ProductTable from '../components/ProductTable';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ExampleProduct from '../assets/images/10K_Example.jpeg';
import QcodeImage from '../assets/images/10k-Q-code.jpeg';
import zelloImage from '../assets/images/10k-zello.jpeg';
import FeaturedItems from '../components/FeaturedItems';

const Home = ({ cart, setCart, sum, setSum }) => {
    Aos.init({ duration: 1000, once: true });
    const navigate = useNavigate();

    useEffect(() => {
        if (window.location.href.indexOf("#products") > -1) {
            document.getElementById('products').scrollIntoView();
        }
    }, [])

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', width: '100%', minHeight: { xs: '70vh' } }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '4vh', md: '5vh' }, fontWeight: 400, mt: 6 }}>The Modern Day Business Card</Typography>
            <Typography variant="h2" sx={{ fontSize: '2vh', fontWeight: '400', mt: 2, mb: 5 }}>The Easiest way to Spread your Name Across the World</Typography>
            <Grid container sx={{ ml: { xs: 0, md: 5 }, mb: 5, width: '70%' }}>
                <Grid data-aos='fade-right' item xs={12} md={6} sx={{ mb: { xs: 5, md: 0 } }}>
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
                    <Typography sx={{ fontSize: { xs: '1.8vh', md: '2vh' }, mb: 2 }}>From WhatsApp to Instagram to LinkedIn, provide people with the ability to connect with you like never before from one central hub.</Typography>
                    <Button sx={{ mb: { xs: 0, md: 3 } }} variant="contained" color="secondary" onClick={() => navigate('/card')}>Create Sample Card</Button>
                </Grid>
            </Grid>
            <ProductTable cart={cart} setCart={setCart} />
            <Box id="products" sx={{ width: '100%'}}>
                <FeaturedItems cart={cart} setCart={setCart} sum={sum} setSum={setSum} />
            </Box>
            <Grid container sx={{ ml: { xs: 0, md: 5 }, mb: 5, width: '70%' }}>
                <Grid data-aos='fade-right' item sm={12} md={6} sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant='h3' sx={{ fontSize: { xs: '2.5vh', md: '3vh' }, fontWeight: 500, mb: 1 }}>Let Your Clients Engage with You</Typography>
                    <Typography sx={{ fontSize: { xs: '1.8vh', md: '2vh' }, mb: 2 }}>You have an infinite amount of ways to allow users interact with you, limited only by your imagination. Let customers pay you with Zelle, Venmo, or Cash App. Book an appointment with your booking system. Provide directions to your address, add links to your products, and much more!</Typography>
                </Grid>
                <Grid data-aos='fade-left' item md={6} sx={{ mb: { xs: 5, md: 0 }, display: { xs: 'none', md: 'block' } }}>
                    <Box
                        component="img"
                        sx={{
                            maxHeight: 400,
                            maxWidth: 300,
                        }}
                        alt="10K Cards Logo"
                        src={zelloImage}
                    />
                </Grid>
                <Grid data-aos='fade-right' item xs={12} sx={{ mb: { xs: 5, md: 0 }, display: { xs: 'block', md: 'none' } }}>
                    <Box
                        component="img"
                        sx={{
                            maxHeight: 400,
                            maxWidth: 300,
                        }}
                        alt="10K Cards Logo"
                        src={zelloImage}
                    />
                </Grid>
                <Grid data-aos='fade-left' item sm={12} md={6} sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant='h3' sx={{ fontSize: { xs: '2.5vh', md: '3vh' }, fontWeight: 500, mb: 1 }}>Let Your Clients Engage with You</Typography>
                    <Typography sx={{ fontSize: { xs: '1.8vh', md: '2vh' }, mb: 2 }}>You have an infinite amount of ways to allow users interact with you, limited only by your imagination. Let customers pay you with Zelle, Venmo, or Cash App. Book an appointment with your booking system. Provide directions to your address, add links to your products, and much more!</Typography>                </Grid>
            </Grid>
            <Box sx={{ width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <Grid container sx={{ mb: 5, width: '70%', mx: 'auto' }}>
                    <Grid data-aos='fade-right' item xs={12} md={6} sx={{ mb: { xs: 5, md: 0 } }}>
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
                        <Typography variant='h3' sx={{ fontSize: { xs: '2.5vh', md: '3vh' }, fontWeight: 500, mb: 1 }}>Make 20% Profit on Each Referral</Typography>
                        <Typography sx={{ fontSize: { xs: '1.8vh', md: '2vh' }, mb: 2 }}>Any user that clicks on the referral button of your digital card and completes a purchase will earn you 20% of each order. Sign up for your premium or gold card today!</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Grid container sx={{ ml: { xs: 0, md: 5 }, mb: 5, width: '70%' }}>
                <Grid data-aos='fade-right' item sm={12} md={6} sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant='h3' sx={{ fontSize: { xs: '2.5vh', md: '3vh' }, fontWeight: 500, mb: 1 }}>The Easiest Way to Spread Your Name Across the World </Typography>
                    <Typography sx={{ fontSize: { xs: '1.8vh', md: '2vh' }, mb: 2 }}>Anyone with a smartphone camera is able to scan your customized Q-Code™ to get immediate access to your card.
                        Sharing options allow you and your users to share your card to any platform with a click of a button.</Typography>
                </Grid>
                <Grid data-aos='fade-left' item md={6} sx={{ mb: { xs: 5, md: 0 }, display: { xs: 'none', md: 'block' } }}>
                    <Box
                        component="img"
                        sx={{
                            maxHeight: 500,
                            maxWidth: 400,
                        }}
                        alt="10K Cards Logo"
                        src={QcodeImage}
                    />
                </Grid>
                <Grid data-aos='fade-right' item xs={12} sx={{ mb: { xs: 5, md: 0 }, display: { xs: 'block', md: 'none' } }}>
                    <Box
                        component="img"
                        sx={{
                            maxHeight: 500,
                            maxWidth: 400,
                        }}
                        alt="10K Cards Logo"
                        src={QcodeImage}
                    />
                </Grid>
                <Grid data-aos='fade-left' item sm={12} md={6} sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant='h3' sx={{ fontSize: { xs: '2.5vh', md: '3vh' }, fontWeight: 500, mb: 1 }}>The Easiest Way to Spread Your Name Across the World </Typography>
                    <Typography sx={{ fontSize: { xs: '1.8vh', md: '2vh' }, mb: 2 }}>Anyone with a smartphone camera is able to scan your customized Q-Code™ to get immediate access to your card.
                        Sharing options allow you and your users to share your card to any platform with a click of a button.</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Home;
