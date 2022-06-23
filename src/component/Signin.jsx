import React from 'react';
import { Box, Text, Button, FormControl, FormLabel, Input, Flex } from '@blockstack/ui';
import { useConnect } from '@blockstack/connect';

export const Signin = () => {
  const { authOptions } = useConnect();
  
  
  const handleSignIn = () => {
    const { userSession } = authOptions;
    userSession.redirectToSignIn();
  };

  return (
    <Box width="100%">
      <Box maxWidth="1200px" mx="auto" pt={[6, '50px']} textAlign="center">
        <Text fontSize={['28px', '32px']} display="block">
          Advance the research of others while adding to the value of your own!
        </Text>
        <Flex mt={[5, '60px']} flexWrap="wrap" width="100%">
          <Box flex={['0 0 100%', '0 0 33.333333%']} px="10px">
            <Flex height="120px" width="100%">
              <Text className="fa fa-pie-chart" fontSize="100px" color="#ffe4c4" textShadow="2px 2px 5px #00000080" m="auto" transition="font-size ease .2s" _hover={{ fontSize: "120px" }} />
            </Flex>
            <Text fontSize={['28px', '32px']} mt="10px" display="block">Build a Pie</Text>
            <Text fontSize="18px" mt="10px" display="block">Maintain a portfolio of causes that each get a slice of the donation pie.</Text>
          </Box>
          <Box flex={['0 0 100%', '0 0 33.333333%']} px="10px">
            <Flex height="120px" width="100%">
              <Text className="fa fa-heart" fontSize="100px" color="#ffe4c4" textShadow="2px 2px 5px #00000080" m="auto" transition="font-size ease .2s" _hover={{ fontSize: "120px" }} />
            </Flex>
            <Text fontSize={['28px', '32px']} mt="10px" display="block">Give Freely</Text>
            <Text fontSize="18px" mt="10px" display="block">Donate your STX award at your discretion.</Text>
          </Box>
          <Box flex={['0 0 100%', '0 0 33.333333%']} px="10px">
            <Flex height="120px" width="100%">
              <Text className="fa fa-gift" fontSize="100px" color="#ffe4c4" textShadow="2px 2px 5px #00000080" m="auto" transition="font-size ease .2s" _hover={{ fontSize: "120px" }} />
            </Flex>
            <Text fontSize={['28px', '32px']} mt="10px" display="block">No Fees</Text>
            <Text fontSize="18px" mt="10px" display="block">We charge no fees but appreciate if you leave a slice for us.</Text>
          </Box>
        </Flex>
      </Box>
      <Box mt={[5, '60px']} backgroundColor="#00000008" borderTop="1px solid #00000020" mx="20px" py="20px" textAlign="center">
        <Button onClick={() => handleSignIn()}>Sign in with Stacks</Button>
        <Text fontSize={['16px', '20px']} mt="5px" display="block">
          Who's Stack?<Text className="fa fa-info-circle" color="#3498db"></Text>
        </Text>
      </Box>
      <Box border="1px solid #00000020" width={['90%', '90%', '50%']} mx="auto" mt="20px" backgroundColor="#fff">
        <Box backgroundColor="#00000008" borderBottom="1px solid #00000020" p={['10px', '20px']}>
          <Text fontSize={['16px', '20px']} mt="5px" display="block" fontWeight="500">
            Get a Piece of the Pie
          </Text>
          <Text fontSize={['14px', '16px']} mt="5px" display="block">
            Create a link that your supporters can use to add you to their donation pie.
          </Text>
        </Box>
        <FormControl p={['10px', '20px']}>
          <FormLabel fontSize={['16px', '20px']} display="block">Title</FormLabel>
          <Input type="text" placeholder="Enter Title" fontSize={['14px', '16px']} />
          <FormLabel color="#95a5a6" display="block">The name you will be listed as for your supporters.</FormLabel>
          <FormLabel fontSize={['16px', '20px']} display="block">Bitcoin Address</FormLabel>
          <Input type="text" placeholder="Enter A bitcoin address to receive funds" fontSize={['14px', '16px']} />
          <FormLabel color="#95a5a6" display="block">Bitcoin address to receive donations</FormLabel>
          <FormLabel fontSize={['16px', '20px']} display="block">Link to insert in your webpages:</FormLabel>
          <Flex>
            <Input readOnly type="text" fontSize={['14px', '16px']} flex="1 1 auto" borderRadius="6px 0 0 6px" />
            <Button borderRadius="0 6px 6px 0" backgroundColor="#ffffff">Copy</Button>
          </Flex>
        </FormControl>
      </Box>
    </Box>
  );
};
