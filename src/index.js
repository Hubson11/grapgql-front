import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import App from "./components/App";

const URL = "https://fathomless-fortress-74026.herokuapp.com";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: URL,
  }),
  queryDeduplication: false,
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  rootElement
);
