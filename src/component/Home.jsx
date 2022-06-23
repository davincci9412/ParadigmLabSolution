import React, { Component } from 'react';
import { Box, Flex, Text } from '@blockstack/ui';

export class Home extends Component {

  UpdatePieChart = e => {
    e.preventDefault();
    const value = e.target.value;
    const radian = value * Math.PI / 50;
    if (value > 50) this.refs.abc.setAttribute("d", "m70 50 a 20 20 0 1 0 " + (20 * (Math.cos(-radian) - 1)).toString() + " " + (20 * Math.sin(-radian) + 0.00001).toString());
    else this.refs.abc.setAttribute("d", "m70 50 a 20 20 0 0 0 " + (20 * (Math.cos(-radian) - 1)).toString() + " " + (20 * Math.sin(-radian)).toString());
  }

  onMouseEnter = e => {
  }

  render() {
    return (
      <Box>
        <Flex mt={[5, '60px']} flexWrap="wrap" width="96%" mx="auto">
          <Box flex={['0 0 100%', '0 0 40%']} px="10px">
            <svg viewBox="0 0 100 100" width="100%" style={{ display: "block" }}>
              <circle cx="50" cy="50" fill="#ffe4c4" r="40"></circle>
              <path ref="abc" d="m70 50 a 20 20 0 1 0 -40 0" strokeWidth="40" stroke="#86ACD9" fill="none" />
            </svg>
          </Box>
          <Box flex={['0 0 100%', '0 0 60%']} px="10px" textAlign="center">
            <Box borderTop="1px solid gray">
              <Text className="" width="10%" display="inline-block" />
              <Text fontSize={['14px', '18px']} mt="10px" width="45%" display="inline-block" fontWeight="500">Recipient</Text>
              <Text fontSize={['14px', '18px']} mt="10px" width="45%" display="inline-block" fontWeight="500">Share</Text>
            </Box>
            <Box borderTop="1px solid #547fb2" mb="10px">
              <Text className="fa fa-square" width="10%" display="inline-block" />
              <Text fontSize={['14px', '18px']} mt="10px" width="45%" display="inline-block">ClipBox</Text>
              <Text fontSize={['14px', '18px']} mt="10px" width="45%" display="inline-block">0%</Text>
              <Box as="input" type="range" padding="0" appearance="none" width="100%" outline="none" height="6px" backgroundColor="#aaaaaa" onChange={this.UpdatePieChart} />
            </Box>
            <Box borderTop="1px solid #547fb2">
              <Text className="fa fa-square" width="10%" display="inline-block" />
              <Text fontSize={['14px', '18px']} mt="10px" width="45%" display="inline-block">Pietron</Text>
              <Text fontSize={['14px', '18px']} mt="10px" width="45%" display="inline-block">0%</Text>
              <Box as="input" type="range" padding="0" appearance="none" width="100%" outline="none" height="6px" backgroundColor="#aaaaaa" onChange={this.UpdatePieChart} />
            </Box>
          </Box>
        </Flex>
      </Box>
    );
  }
  
};
