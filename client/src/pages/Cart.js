import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Cart = ({ cart, setCart, setSlotsPurchased }) => {
    const navigate = useNavigate();

    const handleCartAmount = (operand, item) => {
        let cartItemAmount = cart.filter(cartItem => cartItem.name === item);
        let cartItems = cart.filter(cartItem => cartItem.name !== item);
        let cartItemIndex = cart.findIndex(cartItem => cartItem.name === item);
        let tempCart = cart;

        if (operand === '+') {
            tempCart[cartItemIndex] = { name: item, amount: cartItemAmount[0].amount + 1 };
            setCart([...tempCart]);
            console.log(cart);
        } else if (operand === '-' && cartItemAmount[0].amount >= 2) {
            tempCart[cartItemIndex] = { name: item, amount: cartItemAmount[0].amount - 1 };
            setCart([...tempCart]);
            console.log(cart);
        } else if (operand === '-' && cartItemAmount[0].amount <= 1 && cartItems.length >= 1) {
            tempCart.splice(cartItemIndex, 1);
            setCart([...tempCart]);
            console.log(cart);
        } else if (operand === '-' && cartItemAmount[0].amount <= 1 && cartItems.length === 0) {
            setCart([{ name: 'Your Cart is Empty', amount: 1 }]);;
        }
    }

    const handleCheckout = () => {
        if (cart.filter(cartItem => cartItem.name === 'Premium Package').length >= 1) {
            setSlotsPurchased(8);
            navigate('/edit');
        } else if (cart.filter(cartItem => cartItem.name === 'Gold Package').length >= 1) {
            setSlotsPurchased(6);
            navigate('/edit');
        }
    }

    return (
        <Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', my: 5 }}>
                {cart[0].name !== 'Your Cart is Empty' ? 
                <Box width='80%' sx={{ mb: 1, pb: 1, borderBottom: 1, borderColor: 'grey.500' }}> 
                    <Typography variant='h1' sx={{ fontSize: '4vh', fontWeight: 500 }}>Your Cart</Typography>
                </Box>
                 : null}
                {cart.map(cartItem => [
                    <Box sx={{ width: '80%', mb: 1 }}>
                        {cartItem.name === 'Your Cart is Empty' ?
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Typography sx={{ mb: 1, color: 'grey.600' }}>Your Cart is Empty</Typography>
                            </Box>
                            :
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography>{cartItem.name}</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Button variant='contained' color='secondary' sx={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }} onClick={() => handleCartAmount('-', cartItem.name)}>-</Button>
                                    <Typography sx={{ mx: 1 }}>{cartItem.amount}</Typography>
                                    <Button variant='contained' color='secondary' sx={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }} onClick={() => handleCartAmount('+', cartItem.name)}>+</Button>
                                </Box>
                            </Box>
                        }
                    </Box>
                ])

                }
                <Box sx={{ display: 'flex' }}>
                    <Button variant="contained" color='secondary' sx={{ mr: 1 }} onClick={() => handleCheckout()}>Checkout</Button>
                    <Button variant="contained" color='secondary' onClick={() => navigate('/')}>Continue Shopping</Button>
                </Box>
            </Box>
        </Fragment>
    );
}

export default Cart;