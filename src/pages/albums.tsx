import type { ReactElement } from 'react';
import { Albums } from '../components/Albums';
import { Layout } from '../components/Layout';
import type { NextPageWithLayout } from './_app';

const AlbumsPage: NextPageWithLayout = () => {
  return <Albums />;
};

AlbumsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AlbumsPage;
