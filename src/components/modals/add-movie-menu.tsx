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

export const AddMovieMenu = ({...props}: EditMenuPropsType) => {

	const [sliderValue, setSliderValue] = useState<number>(5)

	return (
		<>
			<Modal onClose={props.onCancel} isOpen={props.isOpen} isCentered>
				<ModalOverlay/>
				<ModalContent>
					<ModalHeader>Add Movie</ModalHeader>
					<ModalCloseButton/>
					<ModalBody>

						<Text fontSize='xl' fontWeight={"bold"} pb={5} pt={5}>Movie: </Text>
						<Input placeholder={'Please enter movie name'}/>

						<Text fontSize='xl' fontWeight={"bold"} pb={5} pt={5}>Genre: </Text>
						<Input placeholder={'Please enter movie genre'}/>

						<Text fontSize='xl' fontWeight={"bold"} pb={5} pt={5}>Director: </Text>
						<Input placeholder={'Please enter movie director'}/>

						<Text fontSize='xl' fontWeight={"bold"} pb={5} pt={5}>Rate: </Text>
						<Slider
							onChange={(val) => setSliderValue(val)}
							aria-label='slider-ex-1'
							defaultValue={sliderValue}
							min={0}
							max={10}
							step={1}>
							<SliderMark
								value={sliderValue}
								textAlign='center'
								bg='blue.500'
								borderRadius="50%"
								color='white'
								mt='-10'
								ml='-3'
								w='6'
							>
								{sliderValue}
							</SliderMark>
							<SliderTrack>
								<SliderFilledTrack />
							</SliderTrack>
							<SliderThumb />
						</Slider>

						<Text fontSize='xl' fontWeight={"bold"} pb={5} pt={5}>Watched: </Text>
						<Checkbox size='lg'>
							Watch this movie?
						</Checkbox>


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
