import React from 'react';
import clsx from 'clsx';
import { setLeftOrRightPosition } from '@/Utils/RandomPosition';

export default function PartnerSlide ({ id = 1, title, banner, imageDesktop, description }){
  return (
    <div
      className={clsx('bg-beigeLight reveal-scroll m-auto lg:flex', {
        'flex-row-reverse': setLeftOrRightPosition(id) === true,
      })}
    >
      <figure className='lg:w-1/2 lg:hidden'>
        <img 
          src={banner} 
          alt="Partner" 
          width="100%"
          height={30} 
          style={{ width: '100%', height: 'auto' }} 
        />
      </figure>
      <p className='w-full px-5 m-auto text-center lg:w-1/2 py-9 text-beige md:w-1/2 md:text-lg'>
        {description}
      </p>
    </div>
  );
};
