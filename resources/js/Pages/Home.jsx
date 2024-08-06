import React, { useEffect, useState } from 'react';

import { BannerHomepage } from "@/Components/Banners/HomePage/BannerHomepage";
import getBlogs from "../Utils/Blog";
import BannerMobile from "@/Components/Banners/Mobile/BannerMobile"; // Adjust the import path as necessary

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const fetchedBlogs = await getBlogs(4);
        setBlogs(fetchedBlogs);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching blogs: {error.message}</p>;

  return (
    <div className="w-full bg-ceramic" style={{
      backgroundImage: "url(/home/background-gray.png)", 
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      {/* Swiper Banners Home */}
      <BannerHomepage />

      {/* Croazan and white coffee */}
      <section className="lg:w-desktop lg:m-auto">
        <div className="flex items-center justify-between w-full">
          <figure className="slide-in-left">
            <img src='/home/coffee1.png' width={300} height={200} alt="Coffee" className="md:w-[600px]" />
          </figure>
          <figure className="slide-in-right">
            <img src='/home/coffee2.png' width={160} height={160} alt="Coffee" className="md:w-[400px]" />
          </figure>
        </div>
        <h2 className="text-2xl font-normal tracking-widest text-left px-7 text-lavazzaBlue md:text-4xl">
          ITALY’S FINEST <br /> COFFEE & PASTRIES
        </h2>
        <div className='flex w-full py-2 text-center px-7'>
          <p className="mt-4 text-left mb-14 text-gray md:text-xl">
            Capturing the essence of Italian tradition and standards, we redefine the essence of coffee culture with unique recipes, 
            taken to a new level with the premium quality of Lavazza, and freshly baked Italian pastries, creating a wide spectrum of flavor profiles and textures.
          </p>
          <figure className="w-full ml-2">
            <img className="mb-4" src='/home/coffee-sm.png' alt="Coffee" width={120} height={120} />
          </figure>
        </div>
      </section>

      {/* Banner blogs */}
      <div className="reveal-scroll">
        <BannerMobile typeBanner='blog' data={blogs} />
      </div>

      {/* Coffee seed */}
      <div className="flex justify-center mt-6">
        <img className="mb-4" src='/footer/coffee.png' alt="Coffee" width={60} height={60} />
      </div>
    </div>
  );
};

export default HomePage;
