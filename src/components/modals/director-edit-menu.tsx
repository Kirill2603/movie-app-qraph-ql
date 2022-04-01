import React, {useState} from 'react';
import {
	Box,
	Button, Editable, EditableInput, EditablePreview, Modal,
	ModalBody, ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import {MovieType} from "../movies/movies-list";

type EditMenuPropsType = {
	isOpen: boolean
	onCancel: () => void
	onSubmit: () => void
	data?: MovieType
}

export const DirectorEditMenu = ({...props}: EditMenuPropsType) => {

	return (
		<>
			<Modal onClose={props.onCancel} isOpen={props.isOpen} isCentered>
				<ModalOverlay/>
				<ModalContent>
					<ModalHeader>{props.data && props.data.name}</ModalHeader>
					<ModalCloseButton/>
					<ModalBody>

						<Editable defaultValue={props.data && props.data.name}>
							<EditablePreview/>
							<EditableInput/>
						</Editable>

						<Editable defaultValue={props.data && props.data.genre}>
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
