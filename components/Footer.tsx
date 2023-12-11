import { Box } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <Box className="footer">
      <Box className="learn-more">
        <a href="">
          {' '}
          Learn more{' '}
          <Image
            width={75}
            height={75}
            alt="logo gitbook"
            src="/img/book_png.webp"
          ></Image>
        </a>
      </Box>

      <Box className="join-lab">
        <span>Join the lab !</span>
      </Box>

      <Box className="socials">
        <a href="">
          {' '}
          Discord{' '}
          <Image
            alt="logo discord"
            width={75}
            height={75}
            src="/img/discord_png.webp"
          ></Image>
        </a>
        <a href="">
          {' '}
          Twitter{' '}
          <Image
            alt="logo x"
            width={75}
            height={75}
            src="/img/x_png.webp"
          ></Image>
        </a>
      </Box>
    </Box>
  );
};
