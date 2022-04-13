import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const FormSubmit = ({ currentColor }) => {
    const navigate = useNavigate();
    const linearGradientColor = currentColor.primaryColor.split(",");
    const lastColor = linearGradientColor[6].split(")");

    return (
        <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 100, bgcolor: 'black', opacity: 0.3 }} />
            <Card sx={{ width: { xs: '60%', md: '40%' }, textAlign: 'center', px: 5, pb: 5, pt: 3, borderRadius: '10px', zIndex: 200 }}>
                <Box>
                    <>
                        <svg width={0} height={0}>
                            <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1} gradientTransform={`rotate(45)`}>
                                <stop offset={0} stopColor={`${linearGradientColor[1]}, ${linearGradientColor[2]}, ${linearGradientColor[3]}`} />
                                <stop offset={1} stopColor={`${linearGradientColor[4]}, ${linearGradientColor[5]}, ${lastColor[0]})`} />
                            </linearGradient>
                        </svg>
                        <CheckCircleOutlineIcon sx={{ fill: "url(#linearColors)", width: { xs: '6vh', md: '10vh' }, height: '10vh', mb: 1 }} />
                    </>
                    <Typography variant="h5" sx={{ mb: { xs: 3, md: 2 }, fontSize: { xs: 20, md: 24 } }}>You Successsfully Submitted your 10K-Card!</Typography>
                </Box>
                <Button variant="contained" onClick={() => navigate('/')} style={{ backgroundImage: currentColor.primaryColor }}>Back to Home</Button>
            </Card>
        </Box>
    );
}

export default FormSubmit;