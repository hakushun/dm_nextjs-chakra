import type { ReactElement } from 'react';
import { Layout } from '../components/Layout';
import { Posts } from '../components/Posts';
import type { NextPageWithLayout } from './_app';

const PostsPage: NextPageWithLayout = () => {
  return <Posts />;
};

PostsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PostsPage;
