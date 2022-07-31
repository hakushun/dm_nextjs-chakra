import { Tr, Td, Button, useDisclosure } from '@chakra-ui/react';
import { AlbumModal } from './AlbumModal';

type Props = {
  album: IAlbum;
};
export const AlbumRow = ({ album }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Tr>
      <Td isNumeric>{album.id}</Td>
      <Td>
        <Button variant="link" colorScheme="black" onClick={onOpen}>
          {album.title}
        </Button>
        <AlbumModal album={album} isOpen={isOpen} onClose={onClose} />
      </Td>
      <Td>{album.userId}</Td>
    </Tr>
  );
};
