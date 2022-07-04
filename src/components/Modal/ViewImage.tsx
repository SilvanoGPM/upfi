import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        bg="gray.900"
        mx="auto"
        mb="2.5rem"
        mt="2.5rem"
        w="auto"
        h="auto"
        maxW={['300px', '500px', '900px']}
        maxH="600px"
      >
        <ModalBody p="0">
          <Image src={imgUrl} maxW={['300px', '500px', '900px']} maxH="600px" />
        </ModalBody>

        <ModalFooter justifyContent="start" bg="gray.800" p="4">
          <Link href={imgUrl} target="_blank">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
