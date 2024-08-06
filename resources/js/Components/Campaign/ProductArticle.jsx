import { setLeftOrRightPosition } from '@/Utils/RandomPosition';
import { Link } from "@inertiajs/react";
import clsx from "clsx";
import React from 'react'

export default function ProductArticle ({ product }) {
  return (
    <article className="py-5 slide-in-right">
      <div
        className={clsx('flex justify-center items-center lg:flex-col', {
          'flex-row-reverse': setLeftOrRightPosition(product.id) === true,
        })}
      >
        <figure className="w-1/2 lg:w-full">
          <img
            src={product.image}
            alt={product.title}
            width="100%"
            height={30}
            layout="responsive"
            className="lg:max-h-[350px]"
          />
        </figure>
        <div className="w-1/2 text-center lg:w-full">
          <h3 className="text-xl tracking-widest uppercase text-lavazzaBlue lg:text-xl">
            {product.title}
          </h3>
          <p className="py-4 text-sm text-center text-gray lg:text-lg">
            {product.description}
            <Link
              href="/"
              className="block w-2/3 py-2 m-auto mt-3 text-center rounded-full bg-lavazzaBlue"
            >
              <span className="text-sm font-semibold text-white">
                ORDER HERE
              </span>
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
};


