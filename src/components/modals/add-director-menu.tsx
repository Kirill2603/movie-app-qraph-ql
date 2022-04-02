import React, {useState} from 'react';
import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
} from "@chakra-ui/react";
import {gql, useMutation} from "@apollo/client";
import {MoviesType} from "../movies/movies-list";

type EditMenuPropsType = {
	isOpen: boolean
	onCancel: () => void
	onSubmit: () => void
	data?: any | any
}

type UpdateDirectorType = {
	name: string,
	age: number,
}

type newDirectorType = {
	id: number | string
	name: string,
	age: number,
	movies: MoviesType | [],
}

export const AddDirectorMenu = ({...props}: EditMenuPropsType) => {

    const SAVE_DIRECTOR = gql`
        mutation addDirector($name: String!, $age: Int!) {
            addDirector(name: $name, age: $age) {
                name
				age
            }
        }
	`;

	const [name, setName] = useState<string>('')
	const [age, setAge] = useState<string>('')

	const [saveDirector, { error, data }] = useMutation<
		{ addDirector: UpdateDirectorType }
		>(SAVE_DIRECTOR, {
		variables: { name: name, age: Number(age) }
	});

	const handleClick = () => {
		name && age && saveDirector()
		props.onSubmit()
	}

	return (
		<>
			<Modal onClose={props.onCancel} isOpen={props.isOpen} isCentered>
				<ModalOverlay/>
				<ModalContent>
					<ModalHeader>Add Director</ModalHeader>
					<ModalCloseButton/>
					<ModalBody>

						<Text fontSize='xl' fontWeight={"bold"} pb={5} pt={5}>Name: </Text>
						<Input
							value={name}
							onChange={e => setName(e.target.value)}
							placeholder={'Please enter director name'} />

						<Text fontSize='xl' fontWeight={"bold"} pb={5} pt={5}>Age: </Text>
						<Input
							value={age}
							onChange={e => setAge(e.target.value)}
							placeholder={'Please enter director age'}/>

					</ModalBody>
					<ModalFooter>
						<Button variant={"outline"} onClick={props.onCancel}>Close</Button>
						<Button colorScheme={"blue"} onClick={handleClick}>Confirm</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
