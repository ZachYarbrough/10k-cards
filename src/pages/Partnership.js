import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Partnership = ({ cart, setCart, sum, setSum }) => {
    const navigate = useNavigate();
    const pathArray = window.location.pathname.split('/');

    const handleCart = (_item, _description, _price) => {
        let cartItemAmount = cart.filter(cartItem => cartItem.name === _item);

        let cartItemIndex;
        if (cartItemAmount.length >= 1) cartItemIndex = cart.findIndex(cartItem => cartItem.name === _item);
        let tempCart = cart;

        if (cart[0].name === 'Your Cart is Empty') {
            setCart([{ name: _item, description: _description, price: _price, amount: 1 }]);
            setSum(sum + _price);
        } else if (cartItemAmount.length >= 1) {
            tempCart[cartItemIndex] = { name: _item, description: _description, price: tempCart[cartItemIndex].price + _price, amount: cartItemAmount[0].amount + 1 };
            setCart([...tempCart]);
            setSum(sum + _price);
        } else if (cartItemAmount.length === 0) {
            setCart([...cart, { name: _item, description: _description, price: _price, amount: 1 }]);
            setSum(sum + _price);
        }

        if (pathArray[pathArray.length - 1] !== 'cart') {
            window.scrollTo(0, 0);
            navigate('/cart');
        }
    }
    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container sx={{ display: 'flex', width: '80%', textAlign: 'left', justifyContent: 'space-between' }}>
                <Grid item xs={12} md={5}>
                    <Typography variant="h2" sx={{ fontSize: '2vh', fontWeight: '400', color: 'grey.800', mt: 6 }}>Partner with us</Typography>
                    <Typography variant="h1" sx={{ fontSize: { xs: '4vh', md: '5vh' }, fontWeight: 400}}>10K Zipcodes</Typography>
                    <Typography variant="h2" sx={{ fontSize: '2vh', fontWeight: '400',color: 'grey.800', mt: 1 }}>Make money offering your clients access to our leading digital card products and services.  We provide you with all the training you’ll need to be successful.</Typography>
                </Grid>
                <Grid container item xs={12} md={5} sx={{ width: '100%', display: 'flex', mx: 1, mt: 5, alignItems: 'center' }}>
                    <Box sx={{ width: '100%', pb: 2, borderBottom: 1, borderColor: 'grey.400', }}>
                        <Typography variant="h2" sx={{ fontSize: '2.5vh', fontWeight: '500', mt: 2 }}>100 Basic Card Packages</Typography>
                        <Typography variant="h2" sx={{ fontSize: '2vh', fontWeight: '400',color: 'grey.800', mt: .5 }}>$10,000 value</Typography>
                    </Box>

                    <Box sx={{ width: '100%', mb: 5 }}>
                        <Typography variant="h2" sx={{ fontSize: '2.5vh', fontWeight: '500', mt: 2 }}>10K Zipcodes White Page</Typography>
                        <Typography variant="h2" sx={{ fontSize: '2vh', fontWeight: '400',color: 'grey.800', mt: .5 }}>50% Referral fee on all sales</Typography>
                    </Box>
                </Grid>
                {/* <Typography variant="h2" sx={{ fontSize: '2vh', fontWeight: '400', mt: 2 }}>100 Basic Card Packages with a value of $10,000</Typography>
                <Typography variant="h2" sx={{ fontSize: '2vh', fontWeight: '400', mt: 2, mb: 5 }}>A 10kcards link that you can use to refer clients in order to make 50% from any purchases</Typography> */}
            </Grid>
            <Box sx={{ display: 'flex', textAlign: 'center', flexWrap: 'wrap', flexDirection: { xs: 'column', md: 'row' }, width: '100%', my: 5, py: 5, bgcolor: 'grey.100' }}>
                {pathArray[pathArray.length - 1] === 'cart' ? <Typography sx={{ flex: '100%', fontSize: '4vh', fontWeight: 500, mb: 2 }}>Featured Items</Typography> : null}
                <Card sx={{ flexGrow: 1, width: { md: 120 }, mr: { md: 1 }, my: 1, ml: { md: '10%' }, mx: { xs: '10%' } }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
                        <Box>
                            <Typography sx={{ fontSize: 24, mb: 0 }}>$9,500 USD</Typography>
                            <Typography sx={{ color: 'grey.600', fontSize: 14, mb: 1, height: { lg: '6vh', md: '10vh', xs: '5vh' } }}>Pay in Full | $500 Discount</Typography>
                        </Box>
                        <Button variant='contained' color='secondary' sx={{ width: '120px' }} onClick={() => handleCart('10K Zipcode | Paid in Full', 'Includes 100 Basic Cards ($10,000 value) | 50% Referral Fee on All Sales', 9500)}>Buy Now</Button>
                    </CardContent>
                </Card>
                <Card sx={{ flexGrow: 1, width: { md: 120 }, m: { xs: 2, md: 1 }, mx: { xs: '10%' } }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
                        <Box>
                            <Typography sx={{ fontSize: 24 }}>$7,500 USD</Typography>
                            <Typography sx={{ color: 'grey.600', fontSize: 14}}>Pay Remaining $2,500 Over 2 Months</Typography>
                            <Typography sx={{ color: 'grey.600', fontSize: 12, mb: 2 }}>*10% Finance Rate</Typography>
                        </Box>
                        <Button variant='contained' color='secondary' sx={{ width: '120px' }} onClick={() => handleCart('10K Zipcode | Paid Over 2 Months', 'Includes 100 Basic Cards ($10,000 value) | 50% Referral Fee on All Sales | 10% Finance Rate', 7500)}>Buy Now</Button>
                    </CardContent>
                </Card>
                <Card sx={{ flexGrow: 1, width: { md: 120 }, m: { xs: 2, md: 1 }, my: 1, mx: { xs: '10%' } }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
                        <Box>
                            <Typography sx={{ fontSize: 24, mb: 0 }}>$5,000 USD</Typography>
                            <Typography sx={{ color: 'grey.600', fontSize: 14 }}>Pay Remaining $5,000 Over 4 Months</Typography>
                            <Typography sx={{ color: 'grey.600', fontSize: 12, mb: 2 }}>*20% Finance Rate</Typography>
                        </Box>
                        <Button variant='contained' color='secondary' sx={{ width: '120px' }} onClick={() => handleCart('10K Zipcode | Paid Over 4 Months', 'Includes 100 Basic Cards ($10,000 value) | 50% Referral Fee on All Sales | 20% Finance Rate', 5000)}>Buy Now</Button>
                    </CardContent>
                </Card>
                <Card sx={{ flexGrow: 1, width: { md: 120 }, ml: { md: 1 }, my: 1, mr: { md: '10%' }, mx: { xs: '10%' } }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
                        <Box>
                            <Typography sx={{ fontSize: 24, mb: 0 }}>$2,5000 USD</Typography>
                            <Typography sx={{ color: 'grey.600', fontSize: 14 }}>Pay Remaining $7,500 Over 6 Months</Typography>
                            <Typography sx={{ color: 'grey.600', fontSize: 12, mb: 2 }}>*30% Finance Rate</Typography>
                        </Box>
                        <Button variant='contained' color='secondary' sx={{ width: '120px' }} onClick={() => handleCart('10K Zipcode | Paid Over 6 Months', 'Includes 100 Basic Cards ($10,000 value) | 50% Referral Fee on All Sales | 30% Finance Rate', 2500)}>Buy Now</Button>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}

export default Partnership;