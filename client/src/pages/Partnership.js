import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const Partnership = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ width: '80%', textAlign: 'center', mx: 'auto', mt: 5, minHeight: { xs: '70vh'} }}>
            <Typography variant="h5" sx={{ mb: 1, color: 'grey.600' }}>10k Zipcode Partnerships coming soon!</Typography>
            <Button variant="contained" onClick={() => navigate('/')} color="secondary">Back to Home</Button>
        </Box>
    )
}

export default Partnership;