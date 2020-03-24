import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  readTime
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
      <div className="flex align-center justify-center mb-8 md:mb-16 -mx-5 sm:mx-0">
        {coverImage && (
          <CoverImage
            title={title}
            responsiveImage={coverImage.responsiveImage}
          />
        )}
      </div>
    </>
  );
}
