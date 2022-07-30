import { Link, List, ListItem } from '@chakra-ui/react';
import NextLink from 'next/link';

const MENU_LIST = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/posts',
    title: 'Posts',
  },
  {
    path: '/todos',
    title: 'Todos',
  },
  {
    path: '/users',
    title: 'Users',
  },
  {
    path: '/albums',
    title: 'Albums',
  },
];

export const Nav = () => {
  return (
    <List spacing="3">
      {MENU_LIST.map((menu) => (
        <ListItem key={menu.path} display="flex">
          <NextLink href={menu.path} passHref>
            <Link flex={1} textAlign="center">
              {menu.title}
            </Link>
          </NextLink>
        </ListItem>
      ))}
    </List>
  );
};
