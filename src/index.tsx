import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

const config = {
	useSystemColorMode: false,
	initialColorMode: "light",
}

const customTheme = extendTheme({ config })

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider theme={customTheme}>
			<App/>
        </ChakraProvider>
	</React.StrictMode>,
document.getElementById('root')
)
;

