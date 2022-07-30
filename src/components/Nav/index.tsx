import { Link, List, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";

export const Nav = () => {
  return (
    <List spacing="3">
      <ListItem>
        <NextLink href="/" passHref>
          <Link>Home</Link>
        </NextLink>
      </ListItem>
      <ListItem>
        <NextLink href="/posts" passHref>
          <Link>Posts</Link>
        </NextLink>
      </ListItem>
      <ListItem>
        <NextLink href="/todos" passHref>
          <Link>Todos</Link>
        </NextLink>
      </ListItem>
      <ListItem>
        <NextLink href="/users" passHref>
          <Link>Users</Link>
        </NextLink>
      </ListItem>
    </List>
  );
};
