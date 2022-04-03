import React from 'react';
import {Button, Flex, useColorMode, Text, Icon} from "@chakra-ui/react";


export const Header = () => {

	const {colorMode, toggleColorMode} = useColorMode()

	return (
		<Flex
			justify={"space-between"}
			alignItems={"center"}
			css={{backdropFilter: 'blur(10px)'}}
			p={2}>

			<Text fontSize='3xl' fontWeight={'bold'}>Movies APP</Text>

			<Button
				background={"blue.500"}
				variant={"solid"}
				onClick={toggleColorMode}>
				Toggle {colorMode === "light" ? "Dark" : "Light"}
			</Button>
		</Flex>
	);
};