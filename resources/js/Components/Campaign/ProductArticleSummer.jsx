import { Link } from '@inertiajs/react';
import React from 'react';

export default function ProductArticleSummer  ({ product })  {
  return (
    <article className="slide-in-right">
      <figure className="w-full">
        <img
          src={product.image}
          alt={product.description}
          width="100%"
          height={30}
          layout="responsive"
        />
      </figure>

      <div className="w-full">
        <p className="py-4 text-sm text-center text-gray lg:text-lg">
          {product.description}
          <Link
            href="/"
            className="block w-1/3 py-2 m-auto mt-3 text-center rounded-full bg-lavazzaBlue lg:w-1/2"
          >
            <span className="text-sm font-semibold text-white">
              ORDER HERE
            </span>
          </Link>
        </p>
      </div>
    </article>
  );
};
