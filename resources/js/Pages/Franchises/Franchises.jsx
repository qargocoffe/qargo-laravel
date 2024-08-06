import { Link } from '@inertiajs/react';
import Descriptive from '@/Components/Descriptive/Descriptive';
import ButtonCustomized from '@/Components/Button/Button';
import PartnerBasic from '@/Components/About/PartnerBasic';
import { Article } from '@/Components/Franchises/Article';
import { ArticleStore } from '@/Components/Franchises/ArticleStore';
import { ContactForm } from '@/Components/Franchises/ContactForm';


export default function Franchises() {
  const articles = [
    {
      id: 1,
      image: "/franchisies/articles/image1.png",
      imageDesktop: "/franchisies/articles/desktop/image1.png",
      title: "Customized design and installation",
      description: "Each of our stores is designed exclusively by our architecture and interior design team, making sure that every location is unique."
    },
    {
      id: 2,
      image: "/franchisies/articles/image2.png",
      imageDesktop: "/franchisies/articles/desktop/image2.png",
      title: "Franchise support",
      description: "We will guide you every step of the way: from helping you find the perfect location in your area, to successfully launching your new business."
    },
    {
      id: 3,
      image: "/franchisies/articles/image3.png",
      imageDesktop: "/franchisies/articles/desktop/image3.png",
      title: "Ease of operation",
      description: "Our menu offers a selection of delicious food and beverage choices; from incredible pastries to tasty grab-n-go favorites. Your store will always be fresh and easy to replenish."
    },
    {
      id: 4,
      image: "/franchisies/articles/image4.png",
      imageDesktop: "/franchisies/articles/desktop/image4.png",
      title: "Premium quality products",
      description: "Our coffee comes from Lavazza, a world-renowned producer, known for its high-quality standards. We provide all the ingredients to make the best experience for you and your customers!"
    },
    {
      id: 5,
      image: "/franchisies/articles/image5.png",
      imageDesktop: "/franchisies/articles/desktop/image5.png",
      title: "Superior marketing support",
      description: "Our marketing department is dedicated to assist you with advertising and promoting your Qargo Coffee business in your local market."
    },
  ];

  const bannerSlides = [
    {
      id: 1,
      banner: "/partners/image1.png",
      imageDesktop: "/partners/desktop/image1.png",
      description: "We’ve teamed-up with the biggest name in coffee to bring you an exceptional product for your customers. Backed by 125 years of experience, we can assure that with every cup served at your location, your customers will only receive the best.",
    },
    {
      id: 2,
      banner: "/partners/image2.png",
      imageDesktop: "/partners/desktop/image2.png",
      description: "We’ve teamed-up with the biggest name in coffee to bring you an exceptional product for your customers. Backed by 125 years of experience, we can assure that with every cup served at your location, your customers will only receive the best.",
    },
    {
      id: 3,
      banner: "/partners/image3.png",
      imageDesktop: "/partners/desktop/image3.png",
      description: "We’ve teamed-up with the biggest name in coffee to bring you an exceptional product for your customers. Backed by 125 years of experience, we can assure that with every cup served at your location, your customers will only receive the best.",
    },
    {
      id: 4,
      banner: "/partners/image4.png",
      imageDesktop: "/partners/desktop/image4.png",
      description: "We’ve teamed-up with the biggest name in coffee to bring you an exceptional product for your customers. Backed by 125 years of experience, we can assure that with every cup served at your location, your customers will only receive the best.",
    }
  ];

  const articleStores = [
    {
      id: 1,
      image: "/franchisies/stores/image1.png",
      title: "Sleek and modern style",
      description: "Inspired by industrial design and architectural trends. Every Qargo Coffee store will transform the landscape of your city."
    },
    {
      id: 2,
      image: "/franchisies/stores/image2.png",
      title: "Kiosk and Drive-Thru stores available",
      description: "We adapt to the market needs with stand-alone, kiosk or drive-thru locations. At Qargo Coffee, possibilities are endless."
    }
  ];

  return (
    <>
      {/* Banners mobile and desktop */}
      <section className="relative w-full h-full min-h-auto slide-in-top">
        <img src="/franchisies/banner.png" alt="Order" width={30} height={30} layout="responsive" className="md:hidden" />
        <img src="/franchisies/initial-desktop.png" alt="Order" layout="responsive" width={30} height={30} className="hidden w-full md:block" />
      </section>

      {/* Discover QARGO information */}
      <section className="px-4 my-8 text-center lg:w-desktop lg:m-auto">
        <h2 className="mb-5 text-2xl font-normal tracking-widest uppercase slide-in-left px-7 text-lavazzaBlue lg:w-2/3 lg:m-auto lg:text-3xl lg:tracking-widest lg:my-7">
          Ready to discover the Qargo Coffee Franchise Program?
        </h2>
        <p className="mb-10 text-center text-gray slide-in-left lg:w-2/3 lg:m-auto lg:text-lg">
          Join a new business venture with Qargo Coffee, leveraging the benefits of a recognized and established brand. Our team of franchise experts will support you throughout the entire process, providing guidance to successfully launching your new coffee shop. <br /><br />
          Discover our franchise system and kickstart a prosperous coffee venture.
        </p>
        <div className="slide-in-right lg:mb-10">
          <ButtonCustomized background="bg-lavazzaBlue" fontColor="text-white" title="START NOW" url="/franchisies/register" type="link" />
        </div>
      </section>

      {/* Start your own Business today QARGO information */}
      <Descriptive
        title="Start your own Business today"
        image="/franchisies/coffee.png"
        description="Have you ever thought about having a coffee shop or starting your own business? Qargo Coffee is the answer. We have the expertise to get your location up and running and a team driven by an unstoppable passion to achieve continuous growth and better outcomes for your franchise. Join Qargo Coffee and enjoy the freedom of having your own business and being part of the next generation coffee brand."
      />

      {/* Why Qargo */}
      <section className="px-6 lg:w-desktop lg:m-auto lg:p-0">
        <h1 className="py-5 tracking-wider uppercase text-lavazzaBlue lg:text-center lg:text-3xl lg:tracking-widest">Why Qargo?</h1>
        {/* Reasons Articles iteration */}
        {articles.map(article => (
          <Article article={article} key={article.id} />
        ))}
      </section>

      {/* Partners Articles iteration */}
      <section>
        {bannerSlides.map(slide => (
          <PartnerBasic
            key={slide.id}
            id={slide.id}
            imageDesktop={slide.banner}
            banner={slide.banner}
            description={slide.description}
          />
        ))}
        <div className="my-12">
          <Link href="/our-menu">
            <a className="hidden w-2/3 py-2 m-auto mt-3 text-center rounded-full md:block bg-lavazzaBlue md:w-1/12 hover:">
              <span className="text-sm font-semibold text-white">SEE OUR MENU</span>
            </a>
          </Link>
        </div>
      </section>

      {/* Our Stores section */}
      <section>
        <h3 className="py-6 text-2xl tracking-widest text-center text-lavazzaBlue lg:text-3xl lg:tracking-widest">OUR STORES</h3>
        {articleStores.map(store => (
          <ArticleStore
            key={store.id}
            id={store.id}
            image={store.image}
            title={store.title}
            description={store.description}
          />
        ))}

        {/* 360 Tour */}
        <div className="mb-6 bg-beigeLight">
          <figure className="w-full">
            <img src="/franchisies/stores/image3.png" layout="responsive" width={300} height={200} alt="Grados" />
          </figure>
          <h3 className="w-3/4 pt-6 m-auto font-semibold tracking-widest text-center uppercase text-lavazzaBlue">Take the first step to join us!</h3>
          <div className="pb-6">
            <ButtonCustomized background="bg-lavazzaBlue" fontColor="text-white" title="CLICK HERE" url="/franchisies/register" type="link" />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="m-auto lg:w-desktop">
        <ContactForm />
      </section>
    </>
  );
}
