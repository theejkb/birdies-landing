import NextLink from 'next/link';
import { Box, Img } from '@chakra-ui/react';

export const Logo = () => {
  return (
    <NextLink href="/">
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        position="relative"
        userSelect="none"
      >
        <Img borderRadius={50} src="/favicon.ico" width={75} height={75}></Img>
      </Box>
    </NextLink>
  );
};
