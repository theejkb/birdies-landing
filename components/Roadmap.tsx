import {Box, Text} from '@chakra-ui/react';
import {roadmap} from '../config/dappUi';

export const Roadmap = () => {
  if (!Array.isArray(roadmap)) return null;

  return (
    <Box className="box-container" mt={32}>
      <Box className="row-1">
        <Box data-aos="zoom-in" className="card box-1">
          <Text
            className="text-birdies"
            fontSize="2xl"
            fontWeight="black"
            mb={3}
          >
            Collection :
          </Text>
          <Text
            className="text-detail"
            fontSize="2xl"
            fontWeight="black"
            mb={3}
          >
            The birdies NFT collection consists of lovely curated pfps that
            exist on the multiversx blockchain.
          </Text>
        </Box>
        <Box data-aos="zoom-in" className="card box-2">
          <Text
            className="text-birdies"
            fontSize="2xl"
            fontWeight="black"
            mb={3}
          >
            Supply : <span className="text-detail">7777</span>
          </Text>
          <Text
            className="text-birdies"
            fontSize="2xl"
            fontWeight="black"
            mb={3}
          >
            Characters : <span className="text-detail">4</span>
          </Text>
          <Text
            className="text-birdies"
            fontSize="2xl"
            fontWeight="black"
            mb={3}
          >
            Style : <span className="text-detail">Crazy</span>
          </Text>
        </Box>
      </Box>
      <Box className="row-2">
        <Box data-aos="zoom-in" className="card box-3">
          <Text
            className="text-birdies"
            fontSize="2xl"
            fontWeight="black"
            mb={3}
          >
            Mood :
          </Text>
          <Text
            className="text-detail"
            fontSize="2xl"
            fontWeight="black"
            mb={3}
          >
            While technology remains our main concern, we strongly believe
            that the success of a great community is in high-quality art and
            good vibes.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
