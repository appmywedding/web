import '../styles/globals.css'
import { useEffect } from 'react';
import { init } from '../firebase';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { FirebaseProvider } from '../auth';
import allReducers from '../reducers';

const store = createStore(allReducers, composeWithDevTools());

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <FirebaseProvider>
        <div className='font-varelaround'>
          <Component {...pageProps} />
        </div>
      </FirebaseProvider>
    </Provider>
  )
}

export default MyApp
