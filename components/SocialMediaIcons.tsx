import {SocialIcon} from 'react-social-icons';
import {Box, Image} from '@chakra-ui/react';

export const SocialMediaIcons = () => {
  return (
    <Box display="flex" alignItems="center" gap={6}>
      <a href='https://twitter.com/_birdies_'>
        <Image alt='x logo' src='/img/x-logo.png' width={25} height={25}></Image>
      </a>
      <a href='https://discord.gg/bEHua9sq8G'>
        <Image alt='x logo' src='/img/x-logo.png' width={25} height={25}></Image>
      </a>
      <a href='https://birdies.gitbook.io/birdieslabs-litepaper'>
        <Image alt='x logo' src='/img/x-logo.png' width={25} height={25}></Image>
      </a>
    </Box>
  );
};
