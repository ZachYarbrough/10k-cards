
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Receipt = ({ cart, sum, setSum, setCart, setCardType }) => {
    const navigate = useNavigate();
    const [cartReceipt, setCartReceipt] = useState([{ name: 'Your Cart is Empty', amount: 1, description: 'No Items in Cart' }]);
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0

    });

    useEffect(() => {
        setCartReceipt(cart);
    }, [])

    useEffect(() => {
        setCart([{ name: 'Your Cart is Empty', amount: 1, description: 'No Items in Cart' }]);
    }, [cartReceipt])

    const handleCheckout = () => {
        if (cartReceipt.filter(cartItem => cartItem.name === 'Basic Package').length >= 1) {
            setCardType('Basic');
            navigate('/card');
        } else if (cartReceipt.filter(cartItem => cartItem.name === 'Premium Package').length >= 1) {
            setCardType('Premium');
            navigate('/card');
        } else if (cartReceipt.filter(cartItem => cartItem.name === 'Gold Package').length >= 1) {
            setCardType('Gold');
            navigate('/card');
        } else {
            navigate('/card');
        }
        setCart([{ name: 'Your Cart is Empty', amount: 1, description: 'No Items in Cart' }]);
        setSum(0);
    }

    return (
        <Box sx={{ width: { md: '40%', sm: '60%', xs: '80%' }, mt: 3, mx: 'auto', minHeight: { xs: '70vh' } }}>
            <Typography sx={{ fontSize: '2vh', color: 'grey.600', mt: 5, mb: 3, textAlign: 'center' }}>Thank you for your purchase!</Typography>
            {cartReceipt.filter(cartItem => cartItem.name.includes('10K Partnership')).length >= 1 ? <Typography sx={{ fontSize: '2vh', color: 'grey.600', mb: 3, textAlign: 'center' }}>We will email your 10K Link to you in 5-7 business days.</Typography> : null}
            <Typography variant='h1' sx={{ fontSize: '4vh', fontWeight: 500, mx: 1 }}>Receipt</Typography>
            <Box sx={{ display: 'flex', color: 'grey.600', ml: 1, mr: 2, justifyContent: 'space-between', mb: 1, pb: 1, borderBottom: 1, borderColor: 'grey.600' }}>
                <Typography>Item</Typography>
                <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ mr: 3.5 }}>Quantity</Typography>
                    <Typography>Price</Typography>
                </Box>
            </Box>
            {cartReceipt.map((cartItem, index) => {
                return (<Box sx={{ mb: 1 }} key={index}>
                    {cartItem.name === 'Your Cart is Empty' ?
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography sx={{ mb: 1, color: 'grey.600' }}>Your Cart is Empty</Typography>
                        </Box>
                        :
                        (index % 2) !== 0 && cartItem.name !== 'Your Cart is Empty' ?
                            <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between', bgcolor: 'grey.200' }}>
                                <Box sx={{ px: 1, flex: 6 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', mt: { xs: 1 } }}>
                                        <Box sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column' }, alignItems: { md: 'end', xs: 'start' } }}>
                                            <Typography>{cartItem.name}</Typography>
                                            <Typography sx={{ ml: { md: 1, xs: 0 }, color: 'grey.600', fontSize: 14 }}>{formatter.format(cartItem.price / cartItem.amount)}</Typography>
                                        </Box>
                                    </Box>
                                    <Typography sx={{ color: 'grey.600', fontSize: 14 }}>{cartItem.description}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', my: { xs: 1 } }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mx: 1 }}>
                                        <Typography sx={{ mx: 1, textAlign: 'center', maxWidth: '30px', minWidth: '30px' }}>{cartItem.amount}</Typography>                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mx: 1 }}>
                                        <Typography sx={{ mx: 1, textAlign: 'center', maxWidth: '50px', minWidth: '50px' }}>{formatter.format(cartItem.price)}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            :
                            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Box sx={{ px: 1, flex: 6 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', mt: { xs: 1 } }}>
                                        <Box sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column' }, alignItems: { md: 'end', xs: 'start' } }}>
                                            <Typography>{cartItem.name}</Typography>
                                            <Typography sx={{ ml: { md: 1, xs: 0 }, color: 'grey.600', fontSize: 14 }}>{formatter.format(cartItem.price / cartItem.amount)}</Typography>
                                        </Box>
                                    </Box>
                                    <Typography sx={{ color: 'grey.600', fontSize: 14 }}>{cartItem.description}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', my: { xs: 1 } }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mx: 1 }}>
                                        <Typography sx={{ mx: 1, textAlign: 'center', maxWidth: '30px', minWidth: '30px' }}>{cartItem.amount}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mx: 1 }}>
                                        <Typography sx={{ mx: 1, textAlign: 'center', maxWidth: '50px', minWidth: '50px' }}>{formatter.format(cartItem.price)}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                    }
                </Box>);
            })
            }
            <Box sx={{ textAlign: 'right', mx: 1, borderTop: 1 }}>
                <Typography sx={{ fontSize: '2vh', color: 'grey.600', mt: 1, mr: 1 }}>Total Amount</Typography>
                <Typography sx={{ fontSize: '3vh', fontWeight: 500, mr: 1 }}>{formatter.format(sum)}</Typography>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 3, justifyContent: 'center', display: 'flex', flexDirection: { md: 'row', xs: 'column' }, }}>
                <Button variant="contained" color="secondary" onClick={() => handleCheckout()}>Create your Card</Button>
                <Button color="secondary" onClick={() => navigate('/')} sx={{ ml: { md: 1, xs: 0 }, mt: { md: 0, xs: 1 } }}>Return Home</Button>
            </Box>
        </Box>
    );
}

export default Receipt;