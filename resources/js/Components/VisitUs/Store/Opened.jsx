
import ButtonCustomized from '@/Components/Button/Button';

export const Opened = ({ title, image }) => {
  return (
    <div className="w-full join join-vertical">
      <div className="collapse collapse-arrow join-item">
        <input type="radio" name="my-accordion-4" />
        <h2 className='collapse-title text-xl font-normal text-lavazzaBlue border-b-[0.1rem] border-beige slide-in-left'>
          {title}
        </h2>
        <div className="items-center p-0 collapse-content md:flex">
          <img src={image} height={100} width="100%" layout='responsive' alt='Main' className='md:w-1/2' />
          <div className='p-6 md:w-1/2'>
            <h2 className='flex items-start gap-6 px-6 mt-5 mb-6 text-2xl font-normal text-lavazzaBlue slide-in-left'>
              {title}
            </h2>
            <article className='flex items-start gap-6 px-6 mt-5 mb-6'>
              <img src={'/logos/ubication.png'} width={30} height={20} alt='Location' />
              <p className='w-2/3 text-gray'>
                707 E Ocean Blvd. Unit B-106, Long Beach, CA 90802
              </p>
            </article>
            <article className='flex items-center gap-6 px-6'>
              <img src={'/logos/phone.png'} width={26} height={20} alt='Phone' />
              <a href='tel:5627338300' className='w-1/2 underline text-lavazzaBlue'>
                (562)-733-8300
              </a>
            </article>
            {/* Buttons */}
            <br />
            <div className='flex gap-3 px-6 items-left'>
              <ButtonCustomized
                type="link"
                url={'/contact'}
                background={'bg-lavazzaBlue'}
                fontColor={'text-white'}
                title={'ORDER'}
              />
              <ButtonCustomized
                type="link"
                url={'/contact'}
                background={'bg-lavazzaBlue'}
                fontColor={'text-white'}
                title={'LEARN MORE'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
