import { setLeftOrRightPosition } from '@/Utils/RandomPosition';
import clsx from 'clsx';

// Define the ArticleStore component
export const ArticleStore = ({ id, image, title, description }) => {
  return (
    <div
      className={clsx('pb-6 lg:p-0 md:flex items-center bg-graySoft', {
        'flex-row-reverse': setLeftOrRightPosition(id) === true,
      })}
    >
      <figure className="w-full md:w-1/2">
        <img
          src={image}
          layout="responsive"
          width="100%"
          height={200}
          alt={title}
        />
      </figure>
      <div className="md:w-1/2">
        <h3 className="w-3/4 py-6 m-auto font-semibold tracking-widest text-center uppercase text-lavazzaBlue">
          {title}
        </h3>
        <p className="w-3/4 m-auto text-center text-gray md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};
