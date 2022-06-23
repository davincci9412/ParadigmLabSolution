import React from 'react';
import { Box, Text } from '@blockstack/ui';

export const SearchItem = () => {
  return (
    <Box>
      <Text display="block" fontWeight="600" color="#547FB2" textDecoration="underline" cursor="pointer" _hover={{ color:"#547FFF" }} fontSize={['20px' ,'24px']}>Paradigm Lab Solutions</Text>
      <Text display="block" ml="2" fontSize={['16px', '20px']}>File Summary Here. Paradigm Lab Solutions allow you to search advance with others while adding your own.</Text>
    </Box>
  );
};
