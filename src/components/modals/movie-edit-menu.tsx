import React, {useState} from 'react';
import {
	Button, Editable, EditableInput, EditablePreview, Flex, HStack, Input, InputGroup, InputLeftElement, Modal,
	ModalBody, ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
} from "@chakra-ui/react";
import {MovieType} from "../movies/movies-list";

type EditMenuPropsType = {
	isOpen: boolean
	onCancel: () => void
	onSubmit: () => void
	data?: MovieType
}

export const MovieEditMenu = ({...props}: EditMenuPropsType) => {


	return (
		<>
			<Modal onClose={props.onCancel} isOpen={props.isOpen} isCentered>
				<ModalOverlay/>
				<ModalContent>
					<ModalHeader>{props.data && props.data.name}</ModalHeader>
					<ModalCloseButton/>
					<ModalBody>

						<Text fontSize='xl' fontWeight={"bold"}>Movie: </Text>
						<Editable defaultValue={props.data && props.data.name}>
							<EditablePreview/>
							<EditableInput/>
						</Editable >

						<Text fontSize='xl' fontWeight={"bold"}>Genre: </Text>
						<Editable defaultValue={props.data && props.data.genre}>
							<EditablePreview/>
							<EditableInput/>
						</Editable>

						<Text fontSize='xl' fontWeight={"bold"}>Director: </Text>
						<Editable defaultValue={props.data && props.data.director.name}>
							<EditablePreview/>
							<EditableInput/>
						</Editable>

					</ModalBody>
					<ModalFooter>
						<Button variant={"outline"} onClick={props.onCancel}>Close</Button>
						<Button colorScheme={"blue"} onClick={props.onSubmit}>Confirm</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
