import React from 'react';
import { Flex, Box, Text } from '@blockstack/ui';

export const Footer = () => {
  return (
    <Flex border="1px solid #00000020" justifyContent="center" alignItems="center" backgroundColor="#547fb2" height="150px" width="100%" position="absolute" bottom="0">
      <Box textAlign="center" color="#fff">
        <Text display="block" mb="10px">
          Made with <Text className="fa fa-heart-o" color="#fa8072" /> in San Francisco.
        </Text>
        <Text display="block">
          Privacy Policy
        </Text>
      </Box>
    </Flex>
  );
};
