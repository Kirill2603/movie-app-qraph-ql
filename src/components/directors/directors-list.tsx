import React, {useState} from 'react';
import {
	ListItem,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr, UnorderedList
} from "@chakra-ui/react";

import {HamburgerIcon, DeleteIcon, EditIcon} from '@chakra-ui/icons'
import {DeleteMenu} from "../modals/delete-menu";
import {DirectorEditMenu} from "../modals/director-edit-menu";
import {gql, useQuery} from "@apollo/client";
import {MovieType} from "../movies/movies-list";

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

	const handleCancel = () => {
		setIsOpenEdit(false)
		setIsOpenDelete(false)
	}

	const handleSubmit = () => {
		setIsOpenEdit(false)
		setIsOpenDelete(false)
	}

    const {loading, error, data} = useQuery<DirectorsType>(gql`
        {
            directors {
                id
                name
                age
                movies {
                    name
                }
            }
        }
	`)

	console.log(data)

	return (

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
		</>
	);
};