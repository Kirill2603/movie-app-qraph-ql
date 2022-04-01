import React from "react";
import * as ReactDOMClient from 'react-dom/client';

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

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container as HTMLElement);

root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<ChakraProvider theme={customTheme}>
				<App/>
			</ChakraProvider>
		</ApolloProvider>
	</React.StrictMode>
)

