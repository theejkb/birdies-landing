import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { Hero } from '../components/Hero';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { Roadmap } from '../components/Roadmap';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['']} />
      </HeaderMenu>
      <Box display="flex" justifyContent="space-between" height="85vh">
        <Hero />
      </Box>
      <Roadmap />
    </MainLayout>
  );
};

export default Home;
