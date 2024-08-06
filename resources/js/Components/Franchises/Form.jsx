import { useState } from 'react';
import ButtonCustomized from '../Button/Button';



export const FranciseeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    question1: '',
    question2: '',
    interest: '',
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
      <form onSubmit={handleSubmit}>
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
            name='lastName'
            value={formData.lastName}
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
            name='phone'
            value={formData.phone}
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
        <div className='md:flex'>
          <div className='mt-10'>
            <p className='mb-4 text-lavazzaBlue md:text-lg'>
              What is the amount of the personal funds you plan to dedicate to your project?
            </p>
            <label className='block py-2 text-gray'>
              <input
                className='mr-2'
                type='radio'
                name='question1'
                value='$50.000 - $100.000'
                checked={formData.question1 === '$50.000 - $100.000'}
                onChange={handleChange}
              />
              $50.000 - $100.000
            </label>
            <label className='block py-2 text-gray'>
              <input
                className='mr-2'
                type='radio'
                name='question1'
                value='$100.000 - $300.000'
                checked={formData.question1 === '$100.000 - $300.000'}
                onChange={handleChange}
              />
              $100.000 - $300.000
            </label>
            <label className='block py-2 text-gray'>
              <input
                className='mr-2'
                type='radio'
                name='question1'
                value='$300.000 - $500.000'
                checked={formData.question1 === '$300.000 - $500.000'}
                onChange={handleChange}
              />
              $300.000 - $500.000
            </label>
          </div>
          <div className='mt-10'>
            <p className='mb-4 text-lavazzaBlue md:text-lg'>
              How soon would you like to open your own Qargo Coffee store?
            </p>
            <label className='block py-2 text-gray'>
              <input
                className='mr-2'
                type='radio'
                name='question2'
                value='1 - 3 Months'
                checked={formData.question2 === '1 - 3 Months'}
                onChange={handleChange}
              />
              1 - 3 Months
            </label>
            <label className='block py-2 text-gray'>
              <input
                className='mr-2'
                type='radio'
                name='question2'
                value='3 - 6 Months'
                checked={formData.question2 === '3 - 6 Months'}
                onChange={handleChange}
              />
              3 - 6 Months
            </label>
            <label className='block py-2 text-gray'>
              <input
                className='mr-2'
                type='radio'
                name='question2'
                value='6 - 12 Months'
                checked={formData.question2 === '6 - 12 Months'}
                onChange={handleChange}
              />
              6 - 12 Months
            </label>
          </div>
        </div>
        <div className='mt-10'>
          <p className='mb-4 text-lavazzaBlue md:text-lg'>
            Why are you interested in opening a Qargo Coffee store?
          </p>
          <input
            className='placeholder:px-3 p-3 bg-beigeLight w-full h-[12rem] rounded-xl hover:border-beige'
            type='text'
            name='interest'
            value={formData.interest}
            onChange={handleChange}
          />
        </div>
        <div className='mt-8 text-center'>
          <ButtonCustomized
            background='bg-lavazzaBlue'
            fontColor='text-white'
            title='SUBMIT'
            url={''}
            type='button'
          />
        </div>
      </form>
    </div>
  );
};
