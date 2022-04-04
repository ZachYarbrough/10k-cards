import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FeaturedItems from '../components/FeaturedItems';


const Cart = ({ cart, setCart, sum, setSum, setSlotsPurchased }) => {
    const navigate = useNavigate();
    const [numberInput, setNumberInput] = useState('');
    const [formState, setFormState] = useState('');

    const handleChange = (event) => {
        event.preventDefault();

        setFormState(event.currentTarget.value);
        console.log(formState);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setFormState(event.currentTarget.value);
        setNumberInput('');
    }

    const handleCartAmount = (operand, item, _description, _price) => {
        let cartItemAmount = cart.filter(cartItem => cartItem.name === item);
        let cartItems = cart.filter(cartItem => cartItem.name !== item);
        let cartItemIndex = cart.findIndex(cartItem => cartItem.name === item);
        let tempCart = cart;

        let tempPrice = _price / tempCart[cartItemIndex].amount;

        if (operand === '+') {
            tempCart[cartItemIndex] = { name: item, description: _description, price: _price + tempPrice, amount: cartItemAmount[0].amount + 1 };
            setCart([...tempCart]);
            setSum(sum + tempPrice);
        } else if (operand === '-' && cartItemAmount[0].amount >= 2) {
            tempCart[cartItemIndex] = { name: item, description: _description, price: _price - tempPrice, amount: cartItemAmount[0].amount - 1 };
            setCart([...tempCart]);
            setSum(sum - tempPrice);
        } else if (operand === '-' && cartItemAmount[0].amount <= 1 && cartItems.length >= 1) {
            tempCart.splice(cartItemIndex, 1);
            setCart([...tempCart]);
            setSum(sum - tempPrice);
        } else if (operand === '-' && cartItemAmount[0].amount <= 1 && cartItems.length === 0) {
            setCart([{ name: 'Your Cart is Empty', amount: 1, price: '', description: '' }]);;
        }
    }

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0

    });

    const handleCheckout = () => {
        if (cart.filter(cartItem => cartItem.name === 'Basic Package').length >= 1) {
            setSlotsPurchased(10);
            navigate('/edit');
        } else if (cart.filter(cartItem => cartItem.name === 'Premium Package').length >= 1) {
            setSlotsPurchased(10);
            navigate('/edit');
        } else if (cart.filter(cartItem => cartItem.name === 'Gold Package').length >= 1) {
            setSlotsPurchased(10);
            navigate('/edit');
        }
    }

    const handleNumberInput = (event, index) => {
        event.preventDefault();

        setNumberInput(index);
    }

    return (
        <Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', my: 5 }}>
                {cart[0].name !== 'Your Cart is Empty' ?
                    <Box width='80%' sx={{ mb: 1, pb: 1, borderBottom: 1, borderColor: 'grey.500' }}>
                        <Typography variant='h1' sx={{ fontSize: '4vh', fontWeight: 500 }}>Your Cart</Typography>
                        <Box sx={{ display: 'flex', color: 'grey.600', justifyContent: 'space-between' }}>
                            <Typography>Item</Typography>
                            <Typography>Price</Typography>
                        </Box>
                    </Box>
                    : null}
                {cart.map((cartItem, index) => {
                    return (<Box sx={{ width: '80%', mb: 1 }}>
                        {cartItem.name === 'Your Cart is Empty' ?
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Typography sx={{ mb: 1, color: 'grey.600' }}>Your Cart is Empty</Typography>
                            </Box>
                            :
                            (index % 2) !== 0 && cartItem.name !== 'Your Cart is Empty' ?
                                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: "row" }, justifyContent: 'space-between', bgcolor: 'grey.200' }}>
                                    <Box sx={{ px: 1, flex: 6 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', my: { xs: 1 } }}>
                                            <Box sx={{ display: 'flex', alignItems: 'end' }}>
                                                <Typography>{cartItem.name}</Typography>
                                                <Typography sx={{ ml: 1, color: 'grey.600', fontSize: 14 }}>{formatter.format(cartItem.price / cartItem.amount)}</Typography>
                                            </Box>
                                            <Typography sx={{ display: { md: 'none', xs: 'block' } }}>{formatter.format(cartItem.price)}</Typography>
                                        </Box>
                                        <Typography sx={{ color: 'grey.600', fontSize: 14 }}>{cartItem.description}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', my: { xs: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mx: 1 }}>
                                            <Button variant='contained' color='secondary' sx={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }} onClick={() => handleCartAmount('-', cartItem.name, cartItem.description, cartItem.price)}>-</Button>
                                            {numberInput === index ?
                                                // <form type='submit' onSubmit={handleSubmit}>
                                                //     <input value={`${cartItem.amount}`} onChange={handleChange} style={{ textAlign: 'center', margin: '0 7px', maxWidth: '25px', minWidth: '25px', maxHeight: '25px', minHeight: '25px' }} />
                                                // </form>
                                                <Typography sx={{ mx: 1, textAlign: 'center', maxWidth: '30px', minWidth: '30px' }} onClick={event => handleNumberInput(event, index)}>{cartItem.amount}</Typography>
                                                :
                                                <Typography sx={{ mx: 1, textAlign: 'center', maxWidth: '30px', minWidth: '30px' }} onClick={event => handleNumberInput(event, index)}>{cartItem.amount}</Typography>
                                            }
                                            <Button variant='contained' color='secondary' sx={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }} onClick={() => handleCartAmount('+', cartItem.name, cartItem.description, cartItem.price)}>+</Button>
                                        </Box>
                                        <Box sx={{ display: { md: 'flex', xs: 'none' }, alignItems: 'center', mx: 1 }}>
                                            <Typography sx={{ mx: 1, textAlign: 'center', maxWidth: '50px', minWidth: '50px' }}>{formatter.format(cartItem.price)}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                :
                                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: "row" }, justifyContent: 'space-between' }}>
                                    <Box sx={{ px: 1, flex: 6 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', my: { xs: 1 } }}>
                                            <Box sx={{ display: 'flex', alignItems: 'end' }}>
                                                <Typography>{cartItem.name}</Typography>
                                                <Typography sx={{ ml: 1, color: 'grey.600', fontSize: 14 }}>{formatter.format(cartItem.price / cartItem.amount)}</Typography>
                                            </Box>
                                            <Typography sx={{ display: { md: 'none', xs: 'block' } }}>{formatter.format(cartItem.price)}</Typography>
                                        </Box>
                                        <Typography sx={{ color: 'grey.600', fontSize: 14 }}>{cartItem.description}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', my: { xs: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mx: 1 }}>
                                            <Button variant='contained' color='secondary' sx={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }} onClick={() => handleCartAmount('-', cartItem.name, cartItem.description, cartItem.price)}>-</Button>
                                            {numberInput === index ?
                                                // <form type='submit' onSubmit={handleSubmit}>
                                                //     <input value={`${cartItem.amount}`} onChange={handleChange} style={{ textAlign: 'center', margin: '0 7px', maxWidth: '25px', minWidth: '25px', maxHeight: '25px', minHeight: '25px' }} />
                                                // </form>
                                                <Typography sx={{ mx: 1, textAlign: 'center', maxWidth: '30px', minWidth: '30px' }} onClick={event => handleNumberInput(event, index)}>{cartItem.amount}</Typography>
                                                :
                                                <Typography sx={{ mx: 1, textAlign: 'center', maxWidth: '30px', minWidth: '30px' }} onClick={event => handleNumberInput(event, index)}>{cartItem.amount}</Typography>
                                            }
                                            <Button variant='contained' color='secondary' sx={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }} onClick={() => handleCartAmount('+', cartItem.name, cartItem.description, cartItem.price)}>+</Button>
                                        </Box>
                                        <Box sx={{ display: { md: 'flex', xs: 'none' }, alignItems: 'center', mx: 1 }}>
                                            <Typography sx={{ mx: 1, textAlign: 'center', maxWidth: '50px', minWidth: '50px' }}>{formatter.format(cartItem.price)}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                        }
                    </Box>);
                })
                }
                {cart[0].name !== 'Your Cart is Empty' ?
                    <Typography sx={{ my: 1 }}>Total: {formatter.format(sum)}</Typography>
                    :
                    null
                }
                <Box sx={{ display: 'flex' }}>
                    <Button variant="contained" color='secondary' sx={{ mr: 1 }} onClick={() => handleCheckout()}>Checkout</Button>
                    <Button variant="contained" color='secondary' onClick={() => navigate('/')}>Continue Shopping</Button>
                </Box>
            </Box>
            <FeaturedItems cart={cart} setCart={setCart} sum={sum} setSum={setSum} />
        </Fragment >
    );
}

export default Cart;