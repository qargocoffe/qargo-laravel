
import clsx from "clsx";
import React from 'react';
import { setLeftOrRightPosition } from '@/Utils/RandomPosition';

export const SustainabilityDetail = ({ index, title, description, urlImage, urlImageDesktop }) => {

  return (
    <div className="reveal-scroll">
      <article
        className={clsx(
          'my-11 flex justify-between items-center gap-5 reveal-scroll md:flex-col',
          {
            'flex-row-reverse md:flex-col-reverse gap-9': setLeftOrRightPosition(index),
          }
        )}
      >
        <div
          className={clsx(
            'reveal-scroll w-1/2 md:w-full',
            setLeftOrRightPosition(index) ? 'pr-9' : 'pl-9'
          )}
        >
          <h3 className="text-2xl text-lavazzaBlue">{title}</h3>
          <p className="mt-3 text-gray md:text-lg">{description}</p>
        </div>
        <figure className="w-1/2 md:w-full">
          <img
            src={urlImage}
            className="md:hidden"
            alt="Coffee"
            width={1200}
            height={1200}
          />
          <img
            src={urlImageDesktop}
            className="hidden md:block"
            alt="Coffee"
            width={1200}
            height={1200}
          />
        </figure>
      </article>
    </div>
  );
};
