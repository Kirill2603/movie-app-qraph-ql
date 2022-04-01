import React, {useState} from 'react';
import {
	Box,
	Button, Editable, EditableInput, EditablePreview, ListItem, Modal,
	ModalBody, ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay, Text, UnorderedList,
} from "@chakra-ui/react";
import {MovieType} from "../movies/movies-list";
import {DirectorType} from "../directors/directors-list";

type EditMenuPropsType = {
	isOpen: boolean
	onCancel: () => void
	onSubmit: () => void
	data?: DirectorType
}

export const DirectorEditMenu = (props: EditMenuPropsType) => {

	return (
		<>
			<Modal onClose={props.onCancel} isOpen={props.isOpen} isCentered>
				<ModalOverlay/>
				<ModalContent>
					<ModalHeader>{props.data && props.data.name}</ModalHeader>
					<ModalCloseButton/>
					<ModalBody>

						<Text fontSize='xl' fontWeight={"bold"}>Name: </Text>
						<Editable defaultValue={props.data && props.data.name}>
							<EditablePreview/>
							<EditableInput/>
						</Editable>

						<Text fontSize='xl' fontWeight={"bold"}>Age: </Text>
						<Editable defaultValue={props.data && props.data.age.toString()}>
							<EditablePreview/>
							<EditableInput/>
						</Editable>

						<Text fontSize='xl' fontWeight={"bold"}>Movies: </Text>
						<UnorderedList>
							{props.data && props.data.movies.map(movie => (

								<ListItem key={movie.id}>
									<Editable defaultValue={movie.name}>
										<EditablePreview/>
										<EditableInput/>
									</Editable>
								</ListItem>
							))}
						</UnorderedList>


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
