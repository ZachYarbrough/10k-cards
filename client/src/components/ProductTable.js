import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/Check';
import { Fragment } from 'react';

const ProductTable = ({ cart, setCart }) => {

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
            <Paper elevate={10} sx={{ width: '80%' }}>
                <Grid container sx={{ width: '100%' }}>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', textAlign: 'center', borderRight: 1, borderColor: 'grey.300' }}>
                            <Typography sx={{ pr: 1, my: 1 }} >Features</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.100', textAlign: 'center' }}>
                            <Typography sx={{ pr: 1, my: 1 }} >Basic</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', textAlign: 'center' }}>
                            <Typography sx={{ pr: 1, my: 1 }} >Silver</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.100', textAlign: 'center' }}>
                            <Typography sx={{ pr: 1, my: 1 }} >Gold</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ width: '100%' }}>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', textAlign: 'center', borderRight: 1, borderColor: 'grey.400', bgcolor: 'grey.100', boxShadow: 'inset 0 7px 9px -10px rgba(0,0,0,0.4)' }}>
                            <Typography sx={{ pr: 1, my: 1 }} >Blue Diamond</Typography>
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
                            <Typography sx={{ pr: 1, my: 1 }} >Digital Cards</Typography>
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
                            <Typography sx={{ pr: 1, my: 1 }} >Phyiscal Cards</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.200', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircleOutlineIcon />
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
                            <Typography sx={{ pr: 1, my: 1 }} >10K Links</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.200', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircleOutlineIcon />
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
                {/* Premium Table */}
                <Grid container sx={{ width: '100%' }}>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', textAlign: 'center', borderRight: 1, borderColor: 'grey.400', bgcolor: 'grey.100' }}>
                            <Typography sx={{ pr: 1, my: 1 }} >Slots</Typography>
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
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%', my: 5, py: 5, bgcolor: 'grey.100' }}>
                <Card sx={{ flexGrow: 1, width: { md: 120 }, mr: { md: 1 }, my: 1, ml: { md: '10%' }, mx: { xs: '10%' } }}>
                    <CardHeader
                        title="Standard Package"
                        subheader="$100 USD"
                    />
                    <CardContent>
                        <Button variant='contained' color='secondary' onClick={() => handleCart('Standard Package')}>Buy Now</Button>
                    </CardContent>
                </Card>
                <Card sx={{ flexGrow: 1, width: { md: 120 }, m: { xs: 2, md: 1 }, mx: { xs: '10%' } }}>
                    <CardHeader
                        title="Gold Package"
                        subheader="$300 USD"
                    />
                    <CardContent>
                        <Button variant='contained' color='secondary' onClick={() => handleCart('Gold Package')}>Buy Now</Button>
                    </CardContent>
                </Card>
                <Card sx={{ flexGrow: 1, width: { md: 120 }, ml: { md: 1 }, my: 1, mr: { md: '10%' }, mx: { xs: '10%' } }}>
                    <CardHeader
                        title="Premium Package"
                        subheader="$500 USD"
                    />
                    <CardContent>
                        <Button variant='contained' color='secondary' onClick={() => handleCart('Premium Package')}>Buy Now</Button>
                    </CardContent>
                </Card>
            </Box>
        </Fragment>
    );
}

export default ProductTable;