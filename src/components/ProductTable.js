import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/Check';
import { Fragment } from 'react';

const ProductTable = ({ cart, setCart }) => {

    return (
        <Fragment>
            <Paper elevate={10} sx={{ width: '80%' }} id="products">
                <Grid container sx={{ width: '100%' }}>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', textAlign: 'center', borderRight: 1, borderColor: 'grey.300' }}>
                            <Typography sx={{ pr: 1, my: 1 }} >Features</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.100', textAlign: 'center' }}>
                            <Typography sx={{ px: 1, my: 1 }} >Basic</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', textAlign: 'center' }}>
                            <Typography sx={{ px: 1, my: 1 }} >Premium</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.100', textAlign: 'center' }}>
                            <Typography sx={{ px: 1, my: 1 }} >Gold</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ width: '100%' }}>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', textAlign: 'center', borderRight: 1, borderColor: 'grey.400', bgcolor: 'grey.100', boxShadow: 'inset 0 7px 9px -10px rgba(0,0,0,0.4)' }}>
                            <Typography sx={{ pr: 1, my: 1 }} >2 Blue Diamond</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.200', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 7px 9px -10px rgba(0,0,0,0.4)' }}>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.100', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 7px 9px -10px rgba(0,0,0,0.4)' }}>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.200', display: 'flex', alignItems: 'center', justifyContent: 'center',boxShadow: 'inset 0 7px 9px -10px rgba(0,0,0,0.4)' }}>
                        <CheckCircleOutlineIcon />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ width: '100%' }}>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', textAlign: 'center', borderRight: 1, borderColor: 'grey.400', bgcolor: 'grey.100' }}>
                            <Typography sx={{ pr: 1, my: 1 }} > Earn 20% from Referrals</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.200', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.100', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircleOutlineIcon />
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.200', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircleOutlineIcon />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ width: '100%' }}>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', textAlign: 'center', borderRight: 1, borderColor: 'grey.400', bgcolor: 'grey.100' }}>
                            <Typography sx={{ pr: 1, my: 1 }} >Custom Domain</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.200', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.100', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircleOutlineIcon />
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.200', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircleOutlineIcon />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ width: '100%' }}>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', textAlign: 'center', borderRight: 1, borderColor: 'grey.400', bgcolor: 'grey.100' }}>
                            <Typography sx={{ pr: 1, my: 1 }} >Link Slots</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.200', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography>10</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.100', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography>Unlimited</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.200', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography>Unlimited</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Fragment>
    );
}

export default ProductTable;