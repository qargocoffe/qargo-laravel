import { Link } from '@inertiajs/react';


const ButtonCustomized = ({
  title,
  url = '',
  background,
  fontColor,
  type = 'link',
  icon
}) => {
  return (
    <div style={{ letterSpacing: '0.15rem' }} className="my-4 font-bold">
      {type === 'link' && (
        <Link
          href={url}
          className={`${background} flex items-center justify-center m-auto w-auto min-w-[9rem] max-w-[10rem] gap-2 px-3 py-[0.6rem] text-center rounded-full text-sm md:text-md hover:bg-beigeStrong hover:text-white ${fontColor}`}
        >
          {title}
          {icon && (
            <figure className="w-[26px]">
              <img
                className="z-20 ml-2 cursor-pointer"
                src={icon}
                alt='icon'
                width={22}
                height={16}
              />
            </figure>
          )}
        </Link>
      )}

      {type === 'button' && (
        <button
          className={`${background} flex items-center justify-center m-auto w-auto min-w-[9rem] max-w-[10rem] gap-2 px-3 py-[0.6rem] text-center rounded-full text-sm md:text-md hover:bg-beigeStrong hover:text-white ${fontColor}`}
        >
          {title}
          {icon && (
            <figure className="w-[26px]">
              <img
                className="z-20 cursor-pointer"
                src={icon}
                alt='icon'
                width={27}
                height={16}
              />
            </figure>
          )}
        </button>
      )}
    </div>
  );
};


export default ButtonCustomized;