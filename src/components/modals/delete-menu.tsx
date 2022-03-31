import React from 'react';
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
} from "@chakra-ui/react";

type DeleteMenuPropsType = {
	isOpen: boolean
	onCancel: () => void
	onSubmit: () => void
}

export const DeleteMenu = (props: DeleteMenuPropsType) => {

	const cancelRef = React.useRef() as React.RefObject<any>

	return (
		<>
			<AlertDialog
				isOpen={props.isOpen}
				leastDestructiveRef={cancelRef}
				onClose={props.onCancel}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize='lg' fontWeight='bold'>
							Delete Customer
						</AlertDialogHeader>

						<AlertDialogBody>
							Are you sure? You can't undo this action afterwards.
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={cancelRef} onClick={props.onCancel}>
								Cancel
							</Button>
							<Button colorScheme='red' onClick={props.onSubmit} ml={3}>
								Delete
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
};
