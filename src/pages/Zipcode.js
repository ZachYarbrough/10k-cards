import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from 'react';

const Zipcode = () => {
    const navigate = useNavigate();
    const { zipcode } = useParams();
    useEffect(() => {
        if(zipcode.match(/^[0-9]+$/) && zipcode.length === 5) {
            localStorage.setItem('10k-zipcode', zipcode);
        }
        navigate('/');
    }, []);
    return (
        <div></div>
    );
}

export default Zipcode;