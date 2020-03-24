import Head from "next/head";
import readTimeEstimate from "read-time-estimate";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

function readTime(content) {
  const {
    humanizedDuration,
    duration,
    totalWords,
    wordTime
  } = readTimeEstimate(content);

  return {
    humanizedDuration,
    duration,
    totalWords,
    wordTime
  };
}

export default function Index({ allArticles }) {
  const heroPost = allArticles[0];
  const morePosts = allArticles.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
          {/* <meta
            content={HOME_PAGE_METADATA.DESCRIPTION}
            name="description"
            key="description"
          />
          <meta title={HOME_PAGE_METADATA.TITLE} key="title" />
          <title>{HOME_PAGE_METADATA.TITLE}</title>
          <meta
            content={HOME_PAGE_METADATA.TITLE}
            property="og:title"
            key="og:title"
          />
          <meta
            content={HOME_PAGE_METADATA.DESCRIPTION}
            property="og:description"
            key="og:description"
          /> */}
          <link rel="canonical" href="https://www.example.com" />
        </Head>
        <Container>
          <div className="app">
            <Intro />
            {allArticles.map((blogPost, idx) => (
              <article key={idx} className="blogPost">
                {blogPost.content.map((post, _idx) => {
                  return (
                    <HeroPost
                      key={_idx}
                      readTime={readTime(post.postContent)}
                      title={post.title}
                      coverImage={post.coverImage}
                      date={post.createdAt}
                      author={post.author}
                      slug={post.slug}
                      content={post.postContent}
                      tableOfContents={post.tableOfContents}
                      excerpt={post.excerpt}
                      showContent={false}
                      id={blogPost.id}
                    />
                  );
                })}
              </article>
            ))}
            {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview }) {
  const allArticles = (await getAllPostsForHome(preview)) || [];

  return {
    props: { allArticles }
  };
}
