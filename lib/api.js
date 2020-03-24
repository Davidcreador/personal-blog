import "isomorphic-unfetch";

const API_URL = "https://graphql.datocms.com";
const API_TOKEN = process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN;

// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
const RESPONSIVE_IMAGE_FRAGMENT = `
  height
  sizes
  src
  srcSet
  width
  alt
  title
`;

const META_TAGS_FRAGMENT = `
  attributes
  content
  tag
`;

async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPostDataById(id) {
  const data = await fetchAPI(
    `
    query PostById($id: ItemId) {
      article(filter: {id: {eq: $id }}) {
        content {
          title
          slug
          author
          postContent(markdown: true)
          excerpt
          tableOfContents
          createdAt
          coverImage {
            responsiveImage(imgixParams: { fit: crop, ar: "16:9", w: 750 }) {
              ${RESPONSIVE_IMAGE_FRAGMENT}
            }
          }
        }
      }
    }`,
    {
      variables: {
        id
      }
    }
  );

  return data?.article;
}

export async function getAllPostsWithId() {
  const data = await fetchAPI(`
    {
      allArticles {
        id
      }
    }
  `);

  return data?.allArticles;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    {
      allArticles(first: "10", orderBy: createdAt_DESC) {
        id
        content {
          ... on PostRecord {
            title
            slug
            author
            postContent(markdown: true)
            excerpt
            tableOfContents
            createdAt
            coverImage {
              responsiveImage(imgixParams: { fit: crop, ar: "16:9", w: 750 }) {
                ${RESPONSIVE_IMAGE_FRAGMENT}
              }
            }
          }
        }
      }
    }
  `
  );

  return data?.allArticles;
}

// export async function getPostAndMorePosts(slug, preview) {
//   const data = await fetchAPI(
//     `
//   query PostBySlug($slug: String) {
//     post(filter: {slug: {eq: $slug}}) {
//       title
//       slug
//       content
//       date
//       ogImage: coverImage{
//         url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
//       }
//       coverImage {
//         responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
//           ...responsiveImageFragment
//         }
//       }
//       author {
//         name
//         picture {
//           url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
//         }
//       }
//     }

//     morePosts: allPosts(orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}) {
//       title
//       slug
//       excerpt
//       date
//       coverImage {
//         responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
//           ...responsiveImageFragment
//         }
//       }
//       author {
//         name
//         picture {
//           url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
//         }
//       }
//     }
//   }

//   ${RESPONSIVE_IMAGE_FRAGMENT}
//   `,
//     {
//       preview,
//       variables: {
//         slug
//       }
//     }
//   );
//   return data;
// }
