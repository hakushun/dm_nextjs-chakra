import { Box, Center, Spinner } from "@chakra-ui/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
};
export const ContentWrapper = ({ children, isLoading }: Props) => {
  if (isLoading)
    return (
      <Center p={8}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );

  return <Box p={8}>{children}</Box>;
};
