import React, {useState} from 'react';
import {
	Box,
	Button,
	Checkbox,
	Editable,
	EditableInput,
	EditablePreview,
	Flex,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Slider,
	SliderFilledTrack,
	SliderMark,
	SliderThumb,
	SliderTrack,
	Text,
} from "@chakra-ui/react";
import {MovieType} from "../movies/movies-list";

type EditMenuPropsType = {
	isOpen: boolean
	onCancel: () => void
	onSubmit: () => void
	data?: any | any
}

export const AddDirectorMenu = ({...props}: EditMenuPropsType) => {

	const [sliderValue, setSliderValue] = useState<number>(5)

	return (
		<>
			<Modal onClose={props.onCancel} isOpen={props.isOpen} isCentered>
				<ModalOverlay/>
				<ModalContent>
					<ModalHeader>Add Director</ModalHeader>
					<ModalCloseButton/>
					<ModalBody>

						<Text fontSize='xl' fontWeight={"bold"} pb={5} pt={5}>Name: </Text>
						<Input placeholder={'Please enter director name'}/>

						<Text fontSize='xl' fontWeight={"bold"} pb={5} pt={5}>Age: </Text>
						<Input placeholder={'Please enter director age'}/>

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
