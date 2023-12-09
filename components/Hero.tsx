import {Box, Text} from '@chakra-ui/react';
import React from "react";


export const Hero = () => {
  return (
    <Box className='hero-container'>
      <Box>
        <img alt="text logo birdies" src='/img/text-logo.png'></img>
        <Box className='subtitle'>
          <Text
            as="h2"
            fontSize={{base: '50px', lg: '6vw'}}
            textAlign={'center'}
            lineHeight="shorter"
            mb={5}
            color='#00ffa8'
          >
            EACH FEATHER COUNT
          </Text>
        </Box>
      </Box>
    </Box>  );
};
