import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const FeaturedItems = ({ cart, setCart }) => {
    const pathArray = window.location.pathname.split('/');
    const navigate = useNavigate();

    const handleCart = (_item, _description) => {
        let cartItemAmount = cart.filter(cartItem => cartItem.name === _item);
        let cartItems = cart.filter(cartItem => cartItem.name !== _item);

        if (cart[0].name === 'Your Cart is Empty') {
            setCart([{ name: _item, description: _description, amount: 1 }])
        } else if (cartItemAmount.length >= 1) {
            setCart([...cartItems, { name: _item, description: _description, amount: cartItemAmount[0].amount + 1 }])
        } else if (cartItemAmount.length === 0) {
            setCart([...cart, { name: _item, description: _description, amount: 1 }])
        }
        if(pathArray[pathArray.length - 1] !== 'cart') {
            navigate('/cart');
        }
    }

    return(
        <Box sx={{ display: 'flex', textAlign: 'center', flexWrap: 'wrap', flexDirection: { xs: 'column', md: 'row' }, width: '100%', my: 5, py: 5, bgcolor: 'grey.100' }}>
        {pathArray[pathArray.length - 1] === 'cart' ? <Typography sx={{ flex: '100%', fontSize: '4vh', fontWeight: 500, mb: 2 }}>Featured Items</Typography> : null }
        <Card sx={{ flexGrow: 1, width: { md: 120 }, mr: { md: 1 }, my: 1, ml: { md: '10%' }, mx: { xs: '10%' } }}>
            <CardHeader
                title="Basic Package"
                subheader="$100 USD"
            />
            <CardContent>
                <Button variant='contained' color='secondary' onClick={() => handleCart('Basic Package', 'Includes 10 Links')}>Buy Now</Button>
            </CardContent>
        </Card>
        <Card sx={{ flexGrow: 1, width: { md: 120 }, m: { xs: 2, md: 1 }, mx: { xs: '10%' } }}>
            <CardHeader
                title="Premium Package"
                subheader="$300 USD"
            />
            <CardContent>
                <Button variant='contained' color='secondary' onClick={() => handleCart('Premium Package', 'Includes Unlimited Links | Custom Domain Name | 20% from Referrals')}>Buy Now</Button>
            </CardContent>
        </Card>
        <Card sx={{ flexGrow: 1, width: { md: 120 }, ml: { md: 1 }, my: 1, mr: { md: '10%' }, mx: { xs: '10%' } }}>
            <CardHeader
                title="Gold Package"
                subheader="$500 USD"
            />
            <CardContent>
                <Button variant='contained' color='secondary' onClick={() => handleCart('Gold Package', 'Includes Unlimited Links | Custom Domain Name | 20% from Referrals | 2 Blue Diamonds')}>Buy Now</Button>
            </CardContent>
        </Card>
    </Box>
    );
}

export default FeaturedItems;