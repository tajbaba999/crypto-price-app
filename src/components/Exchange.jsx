import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, HStack } from '@chakra-ui/react';

const Exchange = () => {
    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/exchanges');
                setExchanges(response.data);
                console.log(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                console.error('Error fetching data:', err);
                setLoading(false);
            }
        };

        if (exchanges.length === 0) {
            fetchExchanges();
        }
    }, [exchanges]); // Only run the effect when exchanges is initially empty

    return (
        <Container maxW={'container.xl'}>
            {loading ? (
                <p>Loading data...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <HStack>
                    {
                        exchanges.map((i)=>(
                           <Exchange key={i.key} name={i.name} img={i.img} rank={i.rank} url={i.url}/>
                        ))}
                </HStack>
            )}
        </Container>
    );
};

const ExchangeCard = ({name, img, rank, url}) => {
    <a>
        
    </a>
}

export default Exchange;
