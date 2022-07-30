import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import { Layout } from "../components/Layout";
import { Posts } from "../components/Posts";

const PostsPage: NextPageWithLayout = () => {
  return <Posts />;
};

PostsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PostsPage;
