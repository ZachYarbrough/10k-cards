import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer>
            <Box sx={{ bgcolor: "grey.100", mt: 5, px: { xs: 3 }, py: { xs: 5 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <Typography sx={{ color: 'grey.600', fontSize: 14 }}>© 2022, <span className="footerHover" onClick={() => {
                                navigate('/');
                                window.scrollTo(0, 0);
                            }}>10KCards</span></Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer;
