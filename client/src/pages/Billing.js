import { useNavigate } from 'react-router-dom';
import { Fragment, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";


const cardElementOptions = {
    hidePostalCode: true
  };

const Billing = ({ sum, billingFormState, setBillingFormState }) => {
    const navigate = useNavigate();
    const [isProcessing, setProcessingTo] = useState(false);
    const [checkoutError, setCheckoutError] = useState();

    const stripe = useStripe();
    const elements = useElements();

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0

    });

    const handleFormSubmit = async event => {
        event.preventDefault();

        setProcessingTo(true);

        const cardElement = elements.getElement(CardElement);

        const billingDetails = {
            name: `${billingFormState.firstName} ${billingFormState.lastName}`,
            email: billingFormState.email,
            address: {
              city: billingFormState.city,
              line1: billingFormState.line1,
              state: billingFormState.state,
              postal_code: billingFormState.postal_code
            }
          };

          console.log(billingDetails);

        try {
            const { data: clientSecret } = await axios.post("http://localhost:3001/payment-intent", {
                email: billingDetails.email,
                amount: (sum * 100)
            });

            const paymentMethodReq = await stripe.createPaymentMethod({
                type: "card",
                card: cardElement,
                billing_details: billingDetails
            });
            console.log(paymentMethodReq);
            if (paymentMethodReq.error) {
                setCheckoutError(paymentMethodReq.error.message);
                setProcessingTo(false);
                return;
            }

            const { error } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: paymentMethodReq.paymentMethod.id
            });

            if (error) {
                setCheckoutError(error.message);
                setProcessingTo(false);
                return;
            }

            navigate('/receipt');
        } catch (err) {
            setCheckoutError(err.message);
            setProcessingTo(false);
        }
    };

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
            <form onSubmit={handleFormSubmit}>
                <Box sx={{ width: { md: '40%', sm: '60%', xs: '80%' }, mt: 3, mx: 'auto', display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: '2vh', color: 'grey.600', flex: '100%' }}>Card Information</Typography>
                    <CardElement options={cardElementOptions} />
                </Box>
                <Box sx={{ width: { md: '40%', sm: '60%', xs: '80%' }, mt: 3, mx: 'auto', display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: '2vh', color: 'grey.600', flex: '100%' }}>Billing Information</Typography>
                    <Box sx={{ my: 1, flex: '100%', width: '100%', display: 'flex' }}>
                        <TextField onChange={handleChange} value={billingFormState[`firstName`] || ''} name={`firstName`} label="First Name" size="small" placeholder="First Name" sx={{ mr: 1 }} fullWidth required></TextField>
                        <TextField onChange={handleChange} value={billingFormState[`lastName`] || ''} name={`lastName`} label="Last Name" size="small" placeholder="Last Name" fullWidth required></TextField>
                    </Box>
                    <TextField onChange={handleChange} value={billingFormState[`email`] || ''} name={`email`} label="Email" size="small" placeholder="Email" fullWidth required></TextField>
                    <TextField onChange={handleChange} value={billingFormState[`line1`] || ''} name={`line1`} label="Street Address" size="small" placeholder="Street Address" fullWidth required sx={{ my: 1 }}></TextField>
                    <Box sx={{ my: 1, flex: '100%', width: '100%', display: 'flex' }}>
                        <TextField onChange={handleChange} value={billingFormState[`city`] || ''} name={`city`} label="City" size="small" placeholder="City" fullWidth required></TextField>
                        <TextField onChange={handleChange} value={billingFormState[`state`] || ''} name={`state`} label="State" size="small" placeholder="State" fullWidth required sx={{ mx: 1 }}></TextField>
                        <TextField onChange={handleChange} value={billingFormState[`postal_code`] || ''} name={`postal_code`} label="Zip code" size="small" placeholder="Zip code" fullWidth required ></TextField>
                    </Box>
                    <TextField onChange={handleChange} value={billingFormState[`phone`] || ''} name={`phone`} label="Phone" size="small" placeholder="Phone" fullWidth sx={{ my: 1 }} required></TextField>
                </Box>
                 {checkoutError && <Typography sx={{ fontSize: '2vh', color: 'grey.600', textAlign: 'center', mt: 2 }}>{checkoutError}</Typography>}
                <Box sx={{ width: { md: '40%', sm: '60%', xs: '80%' }, mt: 3, mb: 12, mx: 'auto', display: 'flex', flexDirection: { md: 'row', xs: 'column' }, justifyContent: 'center', textAlign: 'center' }}>

                    <Button variant="contained" disabled={isProcessing} type="submit" color="secondary" sx={{ mr: { md: 1, xs: 0 } }}>{isProcessing ? 'Processing...' : 'Continue Payment'}</Button>
                    <Button color="secondary" onClick={() => navigate('/cart')} sx={{ ml: { md: 1, xs: 0 }, mt: { md: 0, xs: 1 } }}>Return to Cart</Button>
                </Box>
            </form>
        </Fragment>
    );
}

export default Billing;