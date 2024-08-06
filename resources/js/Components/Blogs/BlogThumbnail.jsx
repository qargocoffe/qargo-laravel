import { Link } from '@inertiajs/react';

export const BlogThumbnail = ({ title, image }) => {
  return (
    <Link href="/blogs/blog">
      <article className="w-full cursor-pointer slide-in-left bg-beigeLight reveal-scroll">
        <img src={image} width="100%" height={200} alt="Image" layout="responsive" />
        <div className="p-5 slide-in-top">
          <h2 className="mb-5 text-left text-lavazzaBlue md:text-lg">{title}</h2>
          <span className="text-sm underline text-lavazzaBlue md:text-xl">Read more</span>
        </div>
      </article>
    </Link>
  );
};
