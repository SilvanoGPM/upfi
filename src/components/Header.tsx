import {
  Box,
  Flex,
  useDisclosure,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';

import { FiPlusCircle } from 'react-icons/fi';

import { ModalAddImage } from './Modal/AddImage';
import { ResponsiveButton } from './ResponsiveButton';

export function Header(): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const isMdVersion = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Box bgColor="pGray.800">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          maxW={1120}
          mx="auto"
          px={20}
          py={6}
        >
          <Image src="logo.svg" h={[8, 10]} />
          <ResponsiveButton
            aria-label="Adicionar imagem"
            icon={<FiPlusCircle />}
            onlyIcon={!isMdVersion}
            onClick={() => onOpen()}
          >
            Adicionar imagem
          </ResponsiveButton>
        </Flex>
      </Box>

      <ModalAddImage isOpen={isOpen} onClose={onClose} />
    </>
  );
}
