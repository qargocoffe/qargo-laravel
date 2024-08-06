import ButtonCustomized from "../Button/Button";

const BlogCard = ({ title, description, slug }) => {
  return (
    <div className='w-full md:flex items-center text-center min-h-[600px] md:min-h-[400px] h-auto'>
      <div className='relative md:w-1/2 md:hidden'>
        <h3 className='absolute p-1 text-white rounded bg-lavazzaBlue'>Latest News</h3>
        <figure>
          <img 
            width="100%" 
            height={30} 
            alt={title} 
            src={'/blog/default.png'} 
            style={{ width: '100%', height: 'auto' }} 
          />
        </figure>
      </div>
      <div className='m-auto p-7 md:w-1/2 md:h-full'>
        <h2 className='mt-4 text-2xl text-lavazzaBlue md:text-3xl'>{title}</h2>
        <p className='mt-4 md:text-xl text-gray'>{description}</p>
        <ButtonCustomized
          type='link'
          key={title}
          url={slug}
          background={'bg-lavazzaBlue'}
          fontColor={'text-white'}
          title={'VIEW MORE'}
        />
        
        {/* Custom Swiper Controls */}
        <div className='swiper-button-prev-custom'></div>
        <div className='swiper-button-next-custom'></div>
        <div className='swiper-pagination-custom'></div>
      </div>
    </div>
  );
};

export default BlogCard;
