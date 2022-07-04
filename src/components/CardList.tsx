import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface CardType {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: CardType[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const viewImageDisclosure = useDisclosure();

  const [selectedURL, setSelectedURL] = useState<string | null>(null);

  const handleViewImage = useCallback(
    (url: string) => {
      setSelectedURL(url);
      viewImageDisclosure.onOpen();
    },
    [viewImageDisclosure]
  );

  return (
    <>
      <SimpleGrid spacing="10" columns={3}>
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={handleViewImage} />
        ))}
      </SimpleGrid>

      <ModalViewImage
        imgUrl={selectedURL}
        isOpen={viewImageDisclosure.isOpen}
        onClose={viewImageDisclosure.onClose}
      />
    </>
  );
}
