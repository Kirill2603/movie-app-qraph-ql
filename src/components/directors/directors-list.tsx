import React, {useState} from 'react';
import {
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
	Tr
} from "@chakra-ui/react";

import {HamburgerIcon, DeleteIcon, EditIcon} from '@chakra-ui/icons'
import {EditMenu} from "../modals/edit-menu";
import {DeleteMenu} from "../modals/delete-menu";

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

						<Tr>
							<Td>name</Td>
							<Td>name</Td>
							<Td>Movies: </Td>
							<Td>
								<Menu>
									<MenuButton><HamburgerIcon/></MenuButton>
									<MenuList>

										<MenuItem icon={<EditIcon/>} onClick={() => setIsOpenEdit(true)}>
											<EditMenu
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

					</Tbody>

				</Table>
			</TableContainer>
		</>
	);
};