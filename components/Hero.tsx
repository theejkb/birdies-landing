import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Image from "next/image";

export const Hero = () => {
  return (
    <Box className="hero-container">
      <Box>
        <Image alt="text logo birdies" width={5000} height={2000} src="/img/text-logo.png"></Image>
        <Box className="subtitle">
          <Text
            as="h2"
            fontSize={{ base: '50px', lg: '6vw' }}
            textAlign={'center'}
            lineHeight="shorter"
            mb={5}
            color="#00ffa8"
          >
            EACH FEATHER COUNT
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
