import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'

const Buy = () => {

    return (
        <Fragment>
            <Link style={{ textDecoration: "none" }} to='/'><Button variant='contained' color='error'>Back</Button></Link>
        </Fragment>
    );
}

export default Buy;
