import React from 'react'
import { Heading, Img, VStack, Text } from '@chakra-ui/react';

const CoinCard = ({id, name, img, symbol, price, currencySymbol="₹" }) => {
    return (
        <a href={`/coins/${id}`} >
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
                    {symbol}
                </Heading>
                <Text noOfLines={1}>{name}</Text>
                <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>

            </VStack>
        </a>
    );
};

export default CoinCard;