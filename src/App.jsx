import React from 'react';
import { Layout } from 'antd';
import AppHeader from './Components/Layout/AppHeader';
import AppSider from './Components/Layout/AppSider';
import AppContent from './Components/Layout/AppContent';
import {CryptoContextProvider} from './context/crypto-context';






export default function App() {
  return (
   
    <CryptoContextProvider>
      <Layout >
        <AppHeader />
        <Layout>
          <AppSider />
          <AppContent />
        </Layout>
      </Layout>
      </CryptoContextProvider>
   
  )

}
