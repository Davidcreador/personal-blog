import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  content,
  excerpt,
  tableOfContents,
  author,
  slug,
  id,
  showContent,
  readTime
}) {
  return (
    <section>
      <div className="mb-2 md:mb-4">
        {coverImage && (
          <CoverImage
            title={title}
            responsiveImage={coverImage.responsiveImage}
            slug={slug}
          />
        )}
      </div>
      <div className="mb-3 md:mb-6">
        <div className="blogPost-header">
          <h2 className="blogPost-title">
            <Link as={`/posts/${id}`} href="/posts/[id]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h2>
          <div className="blogPost-meta">
            Posted on: <Date dateString={date} />
            {" - "}
            <span>Reading time: {readTime.humanizedDuration}</span>
          </div>
        </div>
        <div className="blogPost-excerpt">
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
        {tableOfContents && (
          <div className="blogPost-table-content">
            <h3>Table of Contents</h3>
            <ul>
              {Object.entries(tableOfContents).map((item, idx) => (
                <li key={idx}>{item[1]}</li>
              ))}
            </ul>
          </div>
        )}
        {showContent && content ? (
          <div
            className="blogPost-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : null}
        <footer className="blogPost-footer">
          <p className="blogPost-author">Written by {author}</p>
          <Link as={`/posts/${id}`} href="/posts/[id]">
            <a className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 hover:underline">
              Read More
            </a>
          </Link>
        </footer>
      </div>
    </section>
  );
}
