import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  SimpleGrid,
} from '@chakra-ui/react';
import { usePhotos } from '../../libs/hooks/usePhotos';
import { Loading } from '../Loading';

type Props = {
  album: IAlbum;
  isOpen: boolean;
  onClose: () => void;
};
export const AlbumModal = ({ album, isOpen, onClose }: Props) => {
  const { photos, isLoading } = usePhotos(album.id);

  return (
    <Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{album.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {isLoading ? (
            <Loading />
          ) : (
            <SimpleGrid columns={3} spacing={4}>
              {photos.map((photo) => (
                <Image key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
              ))}
            </SimpleGrid>
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
