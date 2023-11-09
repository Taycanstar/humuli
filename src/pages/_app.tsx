import 'focus-visible'
import '@/styles/tailwind.css'
import React from "react";
import type { AppProps } from "next/app";
// import { Provider } from "react-redux";
// import { store } from "../app/store";
import { NextComponentType, NextPageContext } from "next";
import { ReactNode } from "react";
import { Layout as DefaultLayout } from '@/components/Layout'


// Define a type that extends NextComponentType, includes layout
type NextComponentTypeWithLayout = NextComponentType<NextPageContext, any, {}> & {
  Layout?: React.FC;
};

// Define a new type for AppProps that overrides the Component type
type ModifiedAppProps = Omit<AppProps, "Component"> & {
  Component: NextComponentTypeWithLayout;
};


function MyApp({ Component, pageProps }: ModifiedAppProps ) {
     let Layout = Component.Layout ?? DefaultLayout


  return (
    // <Provider store={store}>
    <Layout>
          <Component {...pageProps} />
    </Layout>
    
    // </Provider>
  );
}

export default MyApp;