import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

import type {AppProps} from 'next/app';
import {ChakraProvider, useToast} from '@chakra-ui/react';
import {useNetworkSync} from '@useelven/core';
import {theme} from '../config/chakraTheme';
import {SWRConfig} from 'swr';
import {useCallback, useEffect} from 'react';
import "../public/styles/style.scss";

import AOS from 'aos';
import 'aos/dist/aos.css';

const toastId = 'elven-tools-error-toast';

const ElvenToolsDapp = ({ Component, pageProps }: AppProps) => {
  useNetworkSync({
    apiTimeout: '10000',
    chainType: process.env.NEXT_PUBLIC_MULTIVERSX_CHAIN,
    ...(process.env.NEXT_PUBLIC_MULTIVERSX_API
      ? { apiAddress: process.env.NEXT_PUBLIC_MULTIVERSX_API }
      : {}),
    ...(process.env.NEXT_PUBLIC_WC_PROJECT_ID
      ? { walletConnectV2ProjectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID }
      : {}),
  });

  const toast = useToast();

  const handleErrorToast = useCallback(() => {
    if (!toast.isActive(toastId)) {
      toast({
        id: toastId,
        variant: 'subtle',
        title: 'API error!',
        description:
          'The API is not responding at the moment. Please try later. Also, make sure that you are using the proper chain type when connecting locally',
        status: 'error',
        duration: 10000,
        isClosable: true,
      });
    }
  }, [toast]);

  useEffect(() => {
    AOS.init({
      easing: "ease-out",
      once: false,
      offset: 200,
      anchorPlacement: "top-center"
    });
  }, []);

  return (
    <SWRConfig value={{ onError: handleErrorToast }}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SWRConfig>
  );
};

export default ElvenToolsDapp;
