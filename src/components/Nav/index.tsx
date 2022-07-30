import { Link, List, ListItem } from '@chakra-ui/react';
import NextLink from 'next/link';

export const Nav = () => {
  return (
    <List spacing="3">
      <ListItem display="flex">
        <NextLink href="/" passHref>
          <Link flex={1} textAlign="center">
            Home
          </Link>
        </NextLink>
      </ListItem>
      <ListItem display="flex">
        <NextLink href="/posts" passHref>
          <Link flex={1} textAlign="center">
            Posts
          </Link>
        </NextLink>
      </ListItem>
      <ListItem display="flex">
        <NextLink href="/todos" passHref>
          <Link flex={1} textAlign="center">
            Todos
          </Link>
        </NextLink>
      </ListItem>
      <ListItem display="flex">
        <NextLink href="/users" passHref>
          <Link flex={1} textAlign="center">
            Users
          </Link>
        </NextLink>
      </ListItem>
    </List>
  );
};
