import { Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GlassesDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState();
    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(res => setData(res.data))

    }, [])
    console.log(data);
    return (
        <div>
            <Container>

            </Container>
        </div>
    );
};

export default GlassesDetails;