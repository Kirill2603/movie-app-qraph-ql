import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql
} from "@apollo/client";
import App from "./App";

export const client = new ApolloClient({
	uri: 'http://localhost:3005/graphql',
	cache: new InMemoryCache
})

const config = {
	useSystemColorMode: false,
	initialColorMode: "light",
}

const customTheme = extendTheme({config})

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<ChakraProvider theme={customTheme}>
				<App/>
				{/*<ExchangeRates />*/}
			</ChakraProvider>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
;

