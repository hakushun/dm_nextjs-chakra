import { Flex } from "@chakra-ui/react";
import Image from "next/image";

export const Header = () => {
  return (
    <Flex w="100%" maxW="1200px" alignItems="center" mx="auto">
      <Image src="/200x50.png" alt="" width="200" height="50" />
    </Flex>
  );
};
