

import clsx from 'clsx';
import { useState } from 'react';

export const Worker = ({ image }) => {
  const [displayImage, setDisplayImage] = useState(false);

  return (
    <div 
      className='w-1/3 text-center cursor-pointer md:w-1/5 grayscale hover:grayscale-0'
      onMouseEnter={() => setDisplayImage(true)}
      onMouseLeave={() => setDisplayImage(false)}
    >
      <img
          src={image} 
          width="100%" 
          height={30} 
          alt='Image' 
          layout='responsive' 
        />
      <div
        className={clsx(
          "w-full hidden md:h-[100px] md:flex flex-col items-center justify-center backdrop-filter backdrop-blur-md bg-white/20 md:absolute md:bottom-0 py-8 transition-opacity duration-300",
          {
            "opacity-100 visible": displayImage,
            "opacity-0 invisible": !displayImage,
          }
        )}
      >
        <h3 className='text-xl text-white'>Angel Novel</h3>
        <p className='text-lg text-white'>Motion Designer</p>
      </div>
    </div>
  );
};
