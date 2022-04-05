import { useNavigate } from 'react-router-dom';
import { Fragment, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Billing = ({ cart, setCart, sum, setSum, setSlotsPurchased, billingFormState, setBillingFormState }) => {
    const navigate = useNavigate();

    const formatter = new Intl.NumberFormat('en-US', {
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
        setCart([{ name: 'Your Cart is Empty', amount: 1, description: 'No Items in Cart' }]);
        setSum(0);
    }

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;

        setBillingFormState({
            ...billingFormState,
            [name]: value
        })
    }

    return (
        <Fragment>
            <Box sx={{ width: { md: '40%', sm: '60%', xs: '80%' }, mt: 3, mx: 'auto' }}>
                <Typography sx={{ fontSize: '2vh', color: 'grey.600' }}>Total Amount</Typography>
                <Typography sx={{ fontSize: '4vh', fontWeight: 500 }}>{formatter.format(sum)}</Typography>
            </Box>
            <form onSubmit={handleCheckout}>
                <Box sx={{ width: { md: '40%', sm: '60%', xs: '80%' }, mt: 3, mx: 'auto', display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: '2vh', color: 'grey.600', flex: '100%' }}>Card Information</Typography>
                    <TextField onChange={handleChange} value={billingFormState[`cardNumber`] || ''} name={`cardNumber`} label="Card Number" size="small" placeholder="1234 1234 1234 1234" fullWidth sx={{ my: 1 }}></TextField>
                    <Box sx={{ my: 1, flex: '100%', width: '100%', display: 'flex' }}>
                        <TextField  onChange={handleChange} value={billingFormState[`monthYear`] || ''} name={`monthYear`} label="M/Y" size="small" placeholder="M/Y" sx={{ mr: 1 }} fullWidth></TextField>
                        <TextField onChange={handleChange} value={billingFormState[`cvc`] || ''} name={`cvc`} label="CVC" size="small" placeholder="CVC" fullWidth></TextField>
                    </Box>
                </Box>
                <Box sx={{ width: { md: '40%', sm: '60%', xs: '80%' }, mt: 3, mx: 'auto', display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: '2vh', color: 'grey.600', flex: '100%' }}>Billing Information</Typography>
                    <Box sx={{ my: 1, flex: '100%', width: '100%', display: 'flex' }}>
                        <TextField onChange={handleChange} value={billingFormState[`cardFirstName`] || ''} name={`cardFirstName`} label="First Name" size="small" placeholder="First Name" sx={{ mr: 1 }} fullWidth></TextField>
                        <TextField onChange={handleChange} value={billingFormState[`cardLastName`] || ''} name={`cardLastName`} label="Last Name" size="small" placeholder="Last Name" fullWidth></TextField>
                    </Box>
                    <TextField onChange={handleChange} value={billingFormState[`streetAddress`] || ''} name={`streetAddress`} label="Street Address" size="small" placeholder="Street Address" fullWidth sx={{ my: 1 }}></TextField>
                    <Box sx={{ my: 1, flex: '100%', width: '100%', display: 'flex' }}>
                        <TextField onChange={handleChange} value={billingFormState[`city`] || ''} name={`city`} label="City" size="small" placeholder="City" fullWidth></TextField>
                        <TextField onChange={handleChange} value={billingFormState[`state`] || ''} name={`state`} label="State" size="small" placeholder="State" fullWidth sx={{ mx: 1 }}></TextField>
                        <TextField onChange={handleChange} value={billingFormState[`zipCode`] || ''} name={`zipCode`} label="Zip code" size="small" placeholder="Zip code" fullWidth></TextField>
                    </Box>
                    <TextField onChange={handleChange} value={billingFormState[`phone`] || ''} name={`phone`} label="Phone" size="small" placeholder="Phone" fullWidth sx={{ my: 1 }}></TextField>
                </Box>
                <Box sx={{ width: { md: '40%', sm: '60%', xs: '80%' }, mt: 3, mx: 'auto', display: 'flex', flexDirection: { md: 'row', xs: 'column' }, justifyContent: 'center', textAlign: 'center' }}>
                    <Button variant="contained" type="submit" color="secondary" sx={{ mr: { md: 1, xs: 0 } }}>Continue Payment</Button>
                    <Button color="secondary" onClick={() => navigate('/cart')} sx={{ ml: { md: 1, xs: 0 }, mt: { md: 0, xs: 1 } }}>Return to Cart</Button>
                </Box>
            </form>
        </Fragment>
    );
}

export default Billing;