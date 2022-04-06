import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ProductTable from '../components/ProductTable';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ExampleProduct from '../assets/images/10K_Example.jpeg';
import FeaturedItems from '../components/FeaturedItems';

const Home = ({ cart, setCart, sum, setSum }) => {
    Aos.init({ duration: 1000, once: true });
    const navigate = useNavigate();

    return (
        <Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', width: '100%' }}>
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
                        <Button sx={{ mb: { xs: 0, md: 3 } }} variant="contained" color="secondary" onClick={() => navigate('/edit')}>Create Sample Card</Button>
                    </Grid>
                </Grid>
                <ProductTable cart={cart} setCart={setCart} />
                <FeaturedItems cart={cart} setCart={setCart} sum={sum} setSum={setSum} />
            </Box>
        </Fragment>
    );
}

export default Home;
