import React, {useState} from 'react';
import {
	Button,
	ListItem,
	Menu,
	MenuButton,
	MenuItem,
	MenuList, Progress,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr, UnorderedList
} from "@chakra-ui/react";

import {HamburgerIcon, DeleteIcon, EditIcon, AddIcon} from '@chakra-ui/icons'
import {DeleteMenu} from "../modals/delete-menu";
import {DirectorEditMenu} from "../modals/director-edit-menu";
import {gql, useQuery} from "@apollo/client";
import {MovieType} from "../movies/movies-list";
import {AddDirectorMenu} from "../modals/add-director-menu";
import {client} from "../../index";

export type DirectorType = {
	id: string | number,
	name: string,
	age: number
	movies: Array<MovieType>
}

export type DirectorsType = {
	directors: Array<DirectorType>
}

export const DirectorsList = () => {

	const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false)
	const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false)
	const [isOpenAdd, setIsOpenAdd] = useState<boolean>(false)

	const handleCancel = () => {
		setIsOpenEdit(false)
		setIsOpenDelete(false)
		setIsOpenAdd(false)
	}

	const handleSubmit = () => {
		setIsOpenEdit(false)
		setIsOpenDelete(false)
		setIsOpenAdd(false)
		refetch(()=> {})
	}

    const {loading, error, data, refetch} = useQuery<DirectorsType>(gql`
        {
            directors {
                id
                name
                age
                movies {
					id
                    name
                }
            }
        }
	`)

	if (loading) return <Progress size='xs' isIndeterminate/>
	else return (

		<>
			<TableContainer>
				<Table variant='striped'>

					<Thead>
						<Tr>
							<Th>Name</Th>
							<Th>Age</Th>
							<Th>Movies</Th>
						</Tr>
					</Thead>

					<Tbody>

						{data && data.directors.map((director) => (
							<Tr key={director.id}>
								<Td>{director.name}</Td>
								<Td>{director.age}</Td>
								<Td>
									<UnorderedList>
										{director.movies.map(movie => (
											<ListItem key={movie.id}>{movie.name}</ListItem>
										))}
									</UnorderedList>
								</Td>
								<Td>
									<Menu>
										<MenuButton><HamburgerIcon/></MenuButton>
										<MenuList>

											<MenuItem icon={<EditIcon/>} onClick={() => setIsOpenEdit(true)}>
												<DirectorEditMenu
													data={director}
													isOpen={isOpenEdit}
													onCancel={handleCancel}
													onSubmit={handleSubmit}/>
												Edit
											</MenuItem>

											<MenuItem icon={<DeleteIcon/>} onClick={() => setIsOpenDelete(true)}>
												Delete
												<DeleteMenu
													isOpen={isOpenDelete}
													onCancel={handleCancel}
													onSubmit={handleSubmit}
												/>
											</MenuItem>

										</MenuList>
									</Menu>
								</Td>
							</Tr>
						))}

					</Tbody>

				</Table>
			</TableContainer>
			<Button
				onClick={() => setIsOpenAdd(true)}
				position={"fixed"}
				bottom={5}
				right={5}
				rightIcon={<AddIcon />}
				colorScheme='blue' >
				Add director
			</Button>
			<AddDirectorMenu isOpen={isOpenAdd} onCancel={handleCancel} onSubmit={handleSubmit} />
		</>
	);
};