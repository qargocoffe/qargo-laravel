
const Descriptive = ({ image, title, description }) => {
  return (
    <div>
      <section className='items-center bg-beigeLight reveal-scroll md:flex'>
        <img src={image} className='mb-2' alt={title} width="100%" height={30} layout='responsive' />
        <div className='p-6'>
          <h2 className='mb-5 text-xl text-lavazzaBlue md:text-2xl'>{title}</h2>
          <p className='text-left text-gray md:text-lg'>{description}</p>
        </div>
      </section>
    </div>
  );
};

export default Descriptive;
