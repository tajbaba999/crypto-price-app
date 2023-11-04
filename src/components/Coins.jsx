import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Radio, Container, HStack, Button, RadioGroup } from '@chakra-ui/react';
import Loader from './Loader';
import Errorcomponent from './Errorcomponent';
import CoinCard from './CoinCard';

const Coins = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState("inr");

    const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

    const changePage = (page) => {
        setPage(page);
        setLoading(true);
    };

    const btns = new Array(132).fill(1);

    useEffect(() => {
      const fetchcoins = async () => {
          try {
              const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&locale=en`);
              setCoins(response.data);
          } catch (err) {
              setError(err);
              console.error('Error fetching data:', err);
          } finally {
              setLoading(false);
          }
      };
  
      fetchcoins();
  }, [currency, page]);

    if (error) return <Errorcomponent message={'Error while fetching coins'} />;

    return (
        <>
            <Container maxW={'container.xl'}>
                {loading ? (
                    <Loader />
                ) : (
                    <>

                  <RadioGroup value={currency} onChange={setCurrency} p={'12'}>
                      <HStack spacing={'4'}>
                        <Radio value={'inr'}>₹ INR</Radio>
                        <Radio value={'usd'}>$ USD</Radio>
                        <Radio value={'eur'}>€ EUR</Radio>
                      </HStack>
                  </RadioGroup>
                        <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
                            {coins.map((coinmap) => (
                                <CoinCard
                                
                                    id={coinmap.id}
                                    name={coinmap.name}
                                    price={coinmap.current_price}
                                    img={coinmap.image}
                                    rank={coinmap.trust_score_rank}
                                    url={coinmap.url}
                                    currencySymbol={currencySymbol} />
                            ))}
                        </HStack>

                        <HStack w={"full"} overflowX={"auto"} p={"8"}>
              {
                   btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack> 
                    </>
                )}
            </Container>
        </>
    );
};

export default Coins;
