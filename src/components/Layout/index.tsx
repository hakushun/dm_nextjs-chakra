import { Grid, GridItem } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Header } from "../Header";
import { Nav } from "../Nav";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <Grid
      templateAreas={`"header header"
                      "nav main"`}
      gridTemplateRows={"auto 1fr"}
      gridTemplateColumns={"max(200px, 15%) 1fr"}
      h="100vh"
      overflow="hidden"
      color="blackAlpha.700"
      fontWeight="bold">
      <GridItem bg="orange.300" area={"header"} as="header">
        <Header />
      </GridItem>
      <GridItem p="4" bg="pink.300" area={"nav"} as="nav">
        <Nav />
      </GridItem>
      <GridItem bg="green.300" area={"main"} as="main" overflow="auto">
        {children}
      </GridItem>
    </Grid>
  );
};
