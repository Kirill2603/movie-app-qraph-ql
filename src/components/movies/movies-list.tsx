import React, {useState} from 'react';
import {
	Button,
	Checkbox,
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
	Tr
} from "@chakra-ui/react";
import {AddIcon, DeleteIcon, EditIcon, HamburgerIcon} from "@chakra-ui/icons";
import {DeleteMenu} from "../modals/delete-menu";
import {gql, useQuery} from "@apollo/client";
import {MovieEditMenu} from "../modals/movie-edit-menu";
import {AddMovieMenu} from "../modals/add-movie-menu";

export type MovieType = {
	id: string | number,
	name: string,
	genre: string,
	rate: number,
	watched: boolean
	director: {
		name: string
		age: number
	}

}

export type MoviesType = {
	movies: Array<MovieType>
}

export const MoviesList = () => {

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
	}

    const {loading, error, data} = useQuery<MoviesType>(gql`
        {
            movies {
                id
                name
                genre
				rate
				watched
                director {
                    name
                    age
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
							<Th>Genre</Th>
							<Th>Rate</Th>
							<Th>Director</Th>
							<Th>Watched</Th>
						</Tr>
					</Thead>

					<Tbody>

						{data && data.movies.map((movie) => (
							<Tr key={movie.id}>
								<Td>{movie.name}</Td>
								<Td>{movie.genre}</Td>
								<Td>{movie.rate.toString()}</Td>
								<Td>{movie.director.name} {movie.director.age}</Td>
								<Td><Checkbox isChecked={movie.watched}/></Td>
								<Td>
									<Menu>
										<MenuButton><HamburgerIcon/></MenuButton>
										<MenuList>

											<MenuItem icon={<EditIcon/>} onClick={() => setIsOpenEdit(true)}>
												<MovieEditMenu
													data={movie}
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
				Add movie
			</Button>
			<AddMovieMenu isOpen={isOpenAdd} onCancel={handleCancel} onSubmit={handleSubmit} />
		</>
	);
};