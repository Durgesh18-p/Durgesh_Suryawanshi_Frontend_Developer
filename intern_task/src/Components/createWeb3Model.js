/* eslint-disable react/prop-types */
// Web3ModalProvider.js

import  { createContext, useContext, useState } from 'react';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

// Create a context to store the Web3Modal instance
const Web3ModalContext = createContext();

// Custom hook to access the Web3Modal instance
export const useWeb3Modal = () => useContext(Web3ModalContext);

// Component to initialize and manage Web3Modal
export const Web3ModalProvider = ({ children }) => {
  const [web3Modal, setWeb3Modal] = useState(null);

  // Function to initialize Web3Modal
  const initializeWeb3Modal = () => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: 'YOUR_INFURA_ID' // Replace with your Infura ID
        }
      }
      // Add more provider options as needed
    };

    const modal = new Web3Modal({
      network: 'mainnet', // Specify the network you want to connect to
      cacheProvider: true,
      providerOptions
    });

    setWeb3Modal(modal);
  };

  // Initialize Web3Modal when component mounts
  useState(() => {
    initializeWeb3Modal();
  }, []);

  return (
    <Web3ModalContext.Provider value={web3Modal}>
      {children}
    </Web3ModalContext.Provider>
  );
};
