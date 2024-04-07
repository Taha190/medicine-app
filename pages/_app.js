import React from 'react';
// import { Provider } from 'react-redux';
// import store from '../src/store'; // Assuming your store is in a file named store.js

export default function MyApp({ Component, pageProps }) {
  return (
    // <Provider store={store}>
      <Component {...pageProps} />
    // </Provider>
  );
}

