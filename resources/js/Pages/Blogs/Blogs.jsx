import { BlogThumbnail } from "@/Components/Blogs/BlogThumbnail";

const Blogs = () => {
  return (
    <div className="px-5 lg:w-desktop lg:m-auto md:mt-20">
    <h1 className="text-6xl font-normal slide-in-left text-lavazzaBlue">Blog</h1>
    <p className="mb-6 slide-in-left text-gray md:text-lg md:w-1/2">Find out the latest developments, both in Qargo Coffee and the Coffee Industry, with news, tips, history, trends, and lots more!</p>
    <section className="grid grid-cols-2 gap-10 md:grid-cols-3">
      <BlogThumbnail title="Qargo Coffee Serves Up Thanksgiving Joy to Long Beach..." image="/blog/thumbnails/image1.png" />
      <BlogThumbnail title="Qargo Coffee Serves Up Thanksgiving Joy to Long Beach..." image="/blog/thumbnails/image2.png" />
      <BlogThumbnail title="Qargo Coffee Serves Up Thanksgiving Joy to Long Beach..." image="/blog/thumbnails/image3.png" />
      <BlogThumbnail title="Qargo Coffee Serves Up Thanksgiving Joy to Long Beach..." image="/blog/thumbnails/image4.png" />
      <BlogThumbnail title="Qargo Coffee Serves Up Thanksgiving Joy to Long Beach..." image="/blog/thumbnails/image5.png" />
      <BlogThumbnail title="Qargo Coffee Serves Up Thanksgiving Joy to Long Beach..." image="/blog/thumbnails/image6.png" />
      <BlogThumbnail title="Qargo Coffee Serves Up Thanksgiving Joy to Long Beach..." image="/blog/thumbnails/image7.png" />
      <BlogThumbnail title="Qargo Coffee Serves Up Thanksgiving Joy to Long Beach..." image="/blog/thumbnails/image8.png" />
    </section>
    
  </div>
  );
}

export default Blogs
