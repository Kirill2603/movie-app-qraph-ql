import React from 'react';
import {Button, useColorMode} from "@chakra-ui/react";
import {TabsPanel} from "./components/tab-panel";

function App() {
	const {colorMode, toggleColorMode} = useColorMode()
	return (
		<div>
			<Button onClick={toggleColorMode}>
				Toggle {colorMode === "light" ? "Dark" : "Light"}
			</Button>
			<TabsPanel />
		</div>
	);
}

export default App;
