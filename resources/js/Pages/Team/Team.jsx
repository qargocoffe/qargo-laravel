import { TeamContainer } from "@/Components/Team/TeamContainer.";

;

export default function Team() {
  return (
    <div>
      <section className='relative w-full h-full min-h-auto slide-in-top'>
        <img 
          src="/team/initial.png" 
          alt={'Order'} 
          width="100%" 
          height={30} 
          layout="responsive" 
          className="md:hidden" 
        />
        <img 
          src={'/team/initial-desktop.png'} 
          alt={'Order'} 
          width="100%" 
          height={30} 
          layout="responsive" 
          className="hidden w-full md:block" 
        />
        <div className="absolute bottom-0 flex flex-col items-start justify-start px-5 text-ceramic py-9 slide-in-left">
          <h1 className="text-6xl md:text-8xl">Our <br />Team</h1>
          <p className="w-full text-sm lg:3/5 md:text-lg md:w-1/3 text-whiteBackground md:text-white">
            Meet the backbone of Qargo Coffee, a family of expert creators throughout multiple fields, all dedicated to set a new coffee standard.
          </p>
        </div>
      </section>
      <TeamContainer />
    </div>
  );
}
