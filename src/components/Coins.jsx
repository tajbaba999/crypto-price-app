import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, HStack, Heading, Img, VStack, Text } from '@chakra-ui/react';
import Loader from './Loader';
import Errorcomponent from './Errorcomponent';
import CoinCard from './CoinCard';


 
const Coins = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState("inr")

    const currencySymbol = currency ==="inr"?"₹":currency==="eur"?"€" :"$";

    useEffect(() => {
        const fetchcoins = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`);
                setCoins(response.data);
                console.log(response.data);
            } catch (err) {
                setError(err);
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchcoins();
    }, [currency]);

    if(error) return <Errorcomponent message={'Error while fetching coins'}/>

    return (
        <Container maxW={'container.xl'}>
            {loading ? (
                <Loader/> 
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
               <HStack wrap={'wrap'} justifyContent={'center'}>
                        {coins.map((coinmap) => (
                            <CoinCard
                            id={coinmap.id} 
                            key={coinmap.id}
                            name={coinmap.name} 
                            price={coinmap.current_price}
                            img={coinmap.image} 
                            rank={coinmap.trust_score_rank} 
                            url={coinmap.url}
                            currencySymbol={currencySymbol}
                            />
                        ))}
                    </HStack>
            )}
        </Container>
    );
};

const Exchangecard = ({ name, img, rank, url }) => {
    return (
        <a href={url} target="blank">
            <VStack
                w="250px"
                shadow="lg"
                p="8"
                borderRadius="lg"
                transition="all 0.3s"
                m="4"
                align="center"
                css={{
                    "&:hover" :{
                        transform: "scale(1.1)"
                    }
                }}
            >
                <Img src={img} w="10" h="10" objectFit="contain" alt="Exchange" />
                <Heading size="md" noOfLines={1}>
                    {rank}
                </Heading>
                <Text noOfLines={1}>{name}</Text>
            </VStack>
        </a>
    );
};

export default Coins;
