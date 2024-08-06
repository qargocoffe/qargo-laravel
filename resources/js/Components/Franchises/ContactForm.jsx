
import { useState } from 'react';
import ButtonCustomized from '../Button/Button';



export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission here
  };

  return (
    <div>
      <h3 className='w-3/5 m-auto font-semibold tracking-widest text-center uppercase text-lavazzaBlue'>
        Contact us to schedule a call or a visit
      </h3>
      <form onSubmit={handleSubmit} className='px-12'>
        <div className='mt-4'>
          <input
            className='w-full p-3 rounded-full placeholder:px-3 bg-beigeLight hover:border-beige'
            placeholder='Name'
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='mt-4'>
          <input
            className='w-full p-3 rounded-full placeholder:px-3 bg-beigeLight hover:border-beige'
            placeholder='Last name'
            type='text'
            name='lastName' // Changed name to lastName to match the placeholder
            value={formData.lastName || ''}
            onChange={handleChange}
          />
        </div>
        <div className='mt-4'>
          <input
            className='w-full p-3 rounded-full placeholder:px-3 bg-beigeLight hover:border-beige'
            placeholder='Email'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='mt-4'>
          <input
            className='w-full p-3 rounded-full placeholder:px-3 bg-beigeLight hover:border-beige'
            placeholder='Phone'
            type='text'
            name='phone' // Changed name to phone to match the placeholder
            value={formData.phone || ''}
            onChange={handleChange}
          />
        </div>
        <div className='mt-4'>
          <input
            className='w-full p-3 rounded-full placeholder:px-3 bg-beigeLight hover:border-beige'
            placeholder='Message'
            type='text'
            name='message'
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className='mt-8 text-center'>
          <ButtonCustomized
            background='bg-lavazzaBlue'
            fontColor='text-white'
            title='SUBMIT'
            url=''
            type='button'
          />
        </div>
      </form>
      <p className='w-full px-8 text-sm text-center text-beige mt-7'>
        The franchising information contained in this website is not intended as an offer to sell a franchise or the solicitation of an offer to buy a franchise. The following states regulate the offer and sale of franchises and/or business opportunities: California, Connecticut, Florida, Georgia, Hawaii, Illinois, Indiana, Kentucky, Louisiana, Maine, Maryland, Michigan, Minnesota, Nebraska, New Hampshire, New York, North Carolina, North Dakota, Ohio, Oklahoma, Oregon, Rhode Island, South Carolina, South Dakota, Texas, Utah, Virginia, Washington and Wisconsin. If you are a resident of one of these states or provinces, we will not offer or sell you a franchise unless and until we have complied with the applicable presale registration and disclosure requirements in your state or province.
      </p>
    </div>
  );
};
