import "../styles/globals.css";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { FirebaseProvider } from "../auth";
import allReducers from "../reducers";

import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <FirebaseProvider>
        <div className="font-varelaround">
          <Component {...pageProps} />
        </div>
      </FirebaseProvider>
    </Provider>
  );
}

export default MyApp;
