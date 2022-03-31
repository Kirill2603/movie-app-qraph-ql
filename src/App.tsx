import React from 'react';
import {Button, Tab, TabList, TabPanel, TabPanels, Tabs, useColorMode} from "@chakra-ui/react";
import {DirectorsList} from "./components/directors/directors-list";
import {MoviesList} from "./components/movies/movies-list";

function App() {
	const {colorMode, toggleColorMode} = useColorMode()
	return (
		<div>
			<Button onClick={toggleColorMode}>
				Toggle {colorMode === "light" ? "Dark" : "Light"}
			</Button>
			<Tabs align={"center"} isFitted variant='enclosed'>
				<TabList>
					<Tab _selected={{ color: 'white', bg: 'blue.500' }}>Directors</Tab>
					<Tab _selected={{ color: 'white', bg: 'blue.500' }}>Movies</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<DirectorsList />
					</TabPanel>
					<TabPanel>
						<MoviesList />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	);
}

export default App;
