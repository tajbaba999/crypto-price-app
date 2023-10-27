import { Container, Box } from '@chakra-ui/react'
import React,  { useState } from 'react'
import Loader from './Loader';

const Coindetail = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  return (
   <Container maxW={"container.xl"}>
    {
      loading ? <Loader/> : (
        <>


        <Box width={"full"} borderWidth={1}>
          asdf</Box>
        </>
      )
    }
   </Container>
  )
}

export default Coindetail