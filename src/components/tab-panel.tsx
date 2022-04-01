import React from 'react';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {DirectorsList} from "./directors/directors-list";
import {MoviesList} from "./movies/movies-list";

export const TabsPanel = () => {
	return (
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
	);
};