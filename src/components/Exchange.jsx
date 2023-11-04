import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container,
  HStack,
  Heading,
  Img,
  VStack,
  Text,
} from "@chakra-ui/react";
import Loader from "./Loader";
import Errorcomponent from "./Errorcomponent";

const Exchange = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/exchanges"
        );
        setExchanges(response.data);
        // console.log(response.data);
      } catch (err) {
        setError(err);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchExchanges();
  }, []);

  if (error)
    return <Errorcomponent message={"Error while fetching exchange"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {exchanges.map((exchange) => (
            <Exchangecard
              key={exchange.id}
              name={exchange.name}
              img={exchange.image}
              rank={exchange.trust_score_rank}
              url={exchange.url}
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
          "&:hover": {
            transform: "scale(1.1)",
          },
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

export default Exchange;
