import Box from "@mui/material/Box";
import Video from '../assets/videos/10K-video.mp4';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Logo from '../assets/images/10K_Logo.jpeg';
import BasicCard from '../assets/images/Basic_Card.jpeg';
import SilverCard from '../assets/images/Silver_Card.jpeg';
import GoldCard from '../assets/images/Gold_Card.jpeg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add('bg');
    }, []);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Box
                component="img"
                sx={{
                    width: '75%',
                    mt: 5
                }}
                alt="10K Cards Logo"
                src={Logo}
            />
            <Typography sx={{ fontSize: { xs: '3vh', md: '5vh' }, fontWeight: 600, mt: 1, textAlign: 'center' }}>Digital Business <span style={{ color: '#01ffd3' }}>Cards</span> for the <span style={{ color: '#01ffd3' }}>Savvy</span> Professional</Typography>
            <Box sx={{ mb: 5, mt: 3, width: '80%', display: 'flex', justifyContent: 'center' }}>
                <video width="800" height="300" autoPlay loop>
                    <source src={Video} type="video/mp4" />
                </video>
            </Box>
            <Box
                component="img"
                sx={{
                    width: 400,
                    mb: 1
                }}
                alt="10K Cards Logo"
                src={BasicCard}
            />
            <Typography sx={{ fontSize: '2vh', fontWeight: 600, mb: 3 }}>Includes Card + 10K Links</Typography>
            <Box
                component="img"
                sx={{
                    width: 400,
                    mb: 1
                }}
                alt="10K Cards Logo"
                src={SilverCard}
            />
            <Typography sx={{ fontSize: '2vh', fontWeight: 600, mb: 3 }}>Basic + 1 Digital Card + Custom Domain</Typography>
            <Box
                component="img"
                sx={{
                    width: 400,
                    mb: 1
                }}
                alt="10K Cards Logo"
                src={GoldCard}
            />
            <Typography sx={{ fontSize: '2vh', fontWeight: 600, mb: 1 }}>Silver + 2 Blue Diamond Lead Captures</Typography>
            <Button variant='contained' color="primary" sx={{ mt: 2, mb: 1 }} onClick={() => navigate('/cart')}>Buy Now</Button>
            <Box sx={{ display: 'flex', my: 1, textAlign: 'center', alignItems: 'center' }}>
                <Typography>Would you like to try a sample card?</Typography>
                <a style={{color: '#01ffd3', marginLeft: '1vh' }} href='http://localhost:3000/edit'>Get a Free Card</a>
            </Box>
        </Box>
    )
}

export default Home;