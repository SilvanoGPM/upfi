import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import { FormAddImage } from '../Form/FormAddImage';

interface ModalAddImageProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalAddImage({
  isOpen,
  onClose,
}: ModalAddImageProps): JSX.Element {
  const handleCloseModal = (): void => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent bgColor="pGray.900" mx="4" mb="2.5rem" mt="2.5rem">
        <ModalHeader fontSize="4xl">Nova imagem</ModalHeader>

        <ModalCloseButton />

        <ModalBody px={[4, 20, 40, 60]}>
          <FormAddImage closeModal={handleCloseModal} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
