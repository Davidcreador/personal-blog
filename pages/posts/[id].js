import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import { getPostDataById, getAllPostsWithId } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";

export default function Post({ post }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="flex flex-col justify-center">
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.createdAt}
                author={post.author}
              />
              <PostBody content={post.postContent} />
            </article>
            <SectionSeparator />
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithId();
  const paths = allPosts?.map(post => `/posts/${post.id}`);

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const data = await getPostDataById(params.id);

  return {
    props: {
      post: {
        ...data?.content[0]
      }
    }
  };
}
