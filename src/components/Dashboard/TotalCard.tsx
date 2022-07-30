import { Flex, Heading, Text } from '@chakra-ui/react';

type Props = {
  title: string;
  total: number;
};
export const TotalCard = ({ title, total }: Props) => {
  return (
    <Flex
      p={4}
      direction="column"
      gap={3}
      alignItems="center"
      shadow="md"
      minW={200}
      borderWidth="1px"
      borderRadius={5}
      backgroundColor="white">
      <Heading fontSize="xl">{title}</Heading>
      <Flex gap={1} alignItems="baseline">
        <Text as="span" fontSize="sm">
          total
        </Text>
        <Text as="span" fontSize="4xl">
          {total}
        </Text>
      </Flex>
    </Flex>
  );
};
