import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const FeaturedItems = ({ cart, setCart, sum, setSum }) => {
    const pathArray = window.location.pathname.split('/');
    const navigate = useNavigate();

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
        <Box sx={{ display: 'flex', textAlign: 'center', flexWrap: 'wrap', flexDirection: { xs: 'column', md: 'row' }, width: '100%', my: 5, py: 5, bgcolor: 'grey.100' }}>
            {pathArray[pathArray.length - 1] === 'cart' ? <Typography sx={{ flex: '100%', fontSize: '4vh', fontWeight: 500, mb: 2 }}>Featured Items</Typography> : null}
            <Card sx={{ flexGrow: 1, width: { md: 120 }, mr: { md: 1 }, my: 1, ml: { md: '10%' }, mx: { xs: '10%' } }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                    <Typography sx={{ fontSize: 24, mb: 0 }}>Basic Package</Typography>
                    <Typography sx={{ color: 'grey.600', mb: 1 }}>$100 USD</Typography>
                    <Typography sx={{ color: 'grey.600', fontSize: 14, mb: 2, height: { lg: '6vh', md: '10vh', xs: '5vh' } }}>Includes 10 Links</Typography>
                    </Box>
                    <Button variant='contained' color='secondary' sx={{ width: '120px'}} onClick={() => handleCart('Basic Package', 'Includes 10 Links', 100)}>Buy Now</Button>
                </CardContent>
            </Card>
            <Card sx={{ flexGrow: 1, width: { md: 120 }, m: { xs: 2, md: 1 }, mx: { xs: '10%' } }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Typography sx={{ fontSize: 24, mb: 0 }}>Premium Package</Typography>
                        <Typography sx={{ color: 'grey.600', mb: 1 }}>$300 USD</Typography>
                        <Typography sx={{ color: 'grey.600', fontSize: 14, mb: 2, height: { lg: '6vh', md: '10vh', xs: '5vh' } }}>Includes Unlimited Links | Custom Domain Name | 20% from Referrals</Typography>
                    </Box>
                    <Button variant='contained' color='secondary' sx={{ width: '120px'}} onClick={() => handleCart('Premium Package', 'Includes Unlimited Links | Custom Domain Name | 20% from Referrals', 300)}>Buy Now</Button>
                </CardContent>
            </Card>
            <Card sx={{ flexGrow: 1, width: { md: 120 }, ml: { md: 1 }, my: 1, mr: { md: '10%' }, mx: { xs: '10%' } }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Typography sx={{ fontSize: 24, mb: 0 }}>Gold Package</Typography>
                        <Typography sx={{ color: 'grey.600', mb: 1 }}>$500 USD</Typography>
                        <Typography sx={{ color: 'grey.600', fontSize: 14, mb: 2, height: { lg: '6vh', md: '10vh', xs: '5vh' } }}>Includes Unlimited Links | Custom Domain Name | 20% from Referrals | 2 Blue Diamonds</Typography>
                    </Box>
                    <Button variant='contained' color='secondary' sx={{ width: '120px'}} onClick={() => handleCart('Gold Package', 'Includes Unlimited Links | Custom Domain Name | 20% from Referrals | 2 Blue Diamonds', 500)}>Buy Now</Button>
                </CardContent>
            </Card>
        </Box>
    );
}

export default FeaturedItems;