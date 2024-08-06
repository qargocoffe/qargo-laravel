
import 'swiper/css';
import 'swiper/css/pagination';
import './BannerMobile.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import { useState } from 'react';
import PartnerSlide from '@/Components/About/PartnerSlide';
import BlogCard from '@/Components/Blogs/BlogCard';

const BannerMobile = ({ typeBanner, data }) => {
  const [currentImage, setCurrentImage] = useState(data[0].banner);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage(data[currentIndex].banner);
      setIsTransitioning(false);
    }, 300); // Duration should match the transition duration in Tailwind classes
  };

  return (
    <div className='bg-beigeLight'>
      <div className='items-center md:flex'>
        <figure className='hidden md:block md:relative md:w-1/2 md:h-auto'>
          <img 
            src={currentImage} 
            alt="Partner" 
            width={30} 
            height={30} 
            className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`} 
          />
        </figure>
        <Swiper 
          pagination={{ clickable: true }}
          grabCursor={true}
          navigation={true}
          onSlideChange={handleSlideChange}
          id='swiperMobile'
          modules={[Pagination, Navigation]} 
          className="mySwiper md:w-1/2"
        >
          {typeBanner === 'blog' && data.map((blog) => (
            <SwiperSlide key={blog.slug} className='!h-full pb-6'>
              <BlogCard {...blog} />
              <div className="swiper-pagination"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </SwiperSlide>
          ))}

          {typeBanner === 'partner' && data.map((partner) => (
            <SwiperSlide key={partner.title} className='!h-full pb-6'>
              <PartnerSlide
                title={partner.title} 
                banner={partner.banner} 
                description={partner.description} 
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default BannerMobile;
