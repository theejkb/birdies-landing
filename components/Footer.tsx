import {Box} from '@chakra-ui/react';
import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <Box
      className="footer"
    >
      <Box className="learn-more">
        <a href=""> Learn more <Image width={30} height={30} alt="text logo birdies" src='/img/text-logo.png'></Image></a>
      </Box>

      <Box className="join-lab">
        <span>Join the lab !</span>
      </Box>

      <Box className="socials">
        <a href=""> Discord <Image alt="text logo birdies" width={30} height={30} src='/img/text-logo.png'></Image></a>
        <a href=""> Twitter <Image alt="text logo birdies" width={30} height={30} src='/img/text-logo.png'></Image></a>
      </Box>
    </Box>
  );
};
