import NextLink from 'next/link';
import { Box, Img, Text } from '@chakra-ui/react';
import { useConfig } from '@useelven/core';

export const Logo = () => {
  const { chainType } = useConfig();

  return (
    <NextLink href="/">
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        position="relative"
        userSelect="none"
      >
        <Img borderRadius={50} src='/img/birdies-img.jpg' width={75} height={75}></Img>
      </Box>
    </NextLink>
  );
};
