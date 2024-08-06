import { BannerCategories } from "@/Components/Banners/Categories/BannerCategories";

const OurMenu = () => {
  // Static categories data
  const categories = [
    {
      slug: 'tea',
      image: '/our-menu/image4.png',
      animation: '/our-menu/animations/image.png'
    },
    {
      slug: 'seasonal',
      image: '/our-menu/image5.png',
      animation: '/our-menu/animations/image2.png'
    },
    {
      slug: 'lotus',
      image: '/our-menu/image6.png',
      animation: '/our-menu/animations/image3.png'
    },
    {
      slug: 'kids-and-pets',
      image: '/our-menu/image7.png',
      animation: '/our-menu/animations/image4.png'
    },
    {
      slug: 'delicacies',
      image: '/our-menu/image8.png',
      animation: '/our-menu/animations/image5.png'
    },
    {
      slug: 'grab-and-go',
      image: '/our-menu/image9.png',
      animation: '/our-menu/animations/image6.png'
    },
    {
      slug: 'taste-of-italy',
      image: '/our-menu/coffee.png',
      animation: '/our-menu/animations/image7.png'
    }
  ];

  return (
    <div>
      <section className="w-full m-auto mt-20 text-focus-in lg:w-desktop bg-whiteBackground">
        <BannerCategories categories={categories} />
      </section>
    </div>
  );
};

export default OurMenu;
