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
        <Box sx={{minHeight: '100vh', minWidth: '100vh', display: 'flex',justifyContent: 'center', alignItems: 'center' }} style={{ backgroundImage: currentColor.primaryColor }}>
            <Card sx={{ width: '40%', textAlign: 'center', mx: 'auto', p: 5 , borderRadius: '10px'}}>
                <Box>
                    <>
                        <svg width={0} height={0}>
                            <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1} gradientTransform={`rotate(45)`}>
                                <stop offset={0} stopColor={`${linearGradientColor[1]}, ${linearGradientColor[2]}, ${linearGradientColor[3]}`} />
                                <stop offset={1} stopColor={`${linearGradientColor[4]}, ${linearGradientColor[5]}, ${lastColor[0]})`} />
                            </linearGradient>
                        </svg>
                        <CheckCircleOutlineIcon sx={{ fill: "url(#linearColors)", width: '6vh', height: '6vh' }} />
                    </>
                    <Typography variant="h5" sx={{ mb: 1 }}>You Successsfully Submitted your 10K-Card!</Typography>
                </Box>
                <Button variant="contained" onClick={() => navigate('/')} style={{ backgroundImage: currentColor.primaryColor }}>Back to Home</Button>
            </Card>
        </Box>
    );
}

export default FormSubmit;