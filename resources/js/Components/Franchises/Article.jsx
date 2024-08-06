import { setLeftOrRightPosition } from '@/Utils/RandomPosition';
import { clsx } from 'clsx';

// Define the Article component
export const Article = ({ article }) => {
  return (
    <div>
      <article
        className={clsx(
          'reveal-scroll flex items-center flex-row justify-between gap-5 mb:gap-12 mb-12',
          {
            'flex-row-reverse': setLeftOrRightPosition(article.id) === true,
          }
        )}
      >
        <figure className="w-1/3 md:w-1/2">
          <img
            src={article.image}
            width="100%"
            height={200}
            alt={article.title}
            className="md:hidden"
          />
          <img
            src={article.imageDesktop}
            width="100%"
            height={200}
            alt={article.title}
            className="hidden w-full md:block"
          />
        </figure>

        <div className="w-2/3 text-left md:w-1/2">
          <h3 className="font-semibold tracking-widest uppercase text-lavazzaBlue">
            {article.title}
          </h3>
          <p className="mt-6 text-gray">
            {article.description}
          </p>
        </div>
      </article>
    </div>
  );
};
