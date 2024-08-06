import React from 'react';

const MainBanner = () => {
  return (
    <section className="w-full flex justify-around items-center min-h-[300px] relative bottom-[-4rem]">
      <figure className="slide-in-left w-[40%] md:w-1/6 left-0 h-auto block absolute">
        <img src="/about/croazan.png" alt="chocolato" width={30} height={30} style={{ width: '100%', height: 'auto' }} />
      </figure>

      <figure className="slide-in-top w-[30%] md:w-1/6 h-auto block absolute left-20 top-[11rem]">
        <img src="/about/chocolato.png" alt="chocolato" width={30} height={30} style={{ width: '100%', height: 'auto' }} />
      </figure>

      <figure className="absolute right-0 block w-4/5 h-auto slide-in-right md:w-1/6 bottom-3">
        <img src="/about/coffee.png" alt="chocolato" width={30} height={30} style={{ width: '100%', height: 'auto' }} />
      </figure>
    </section>
  );
};

export default MainBanner;
