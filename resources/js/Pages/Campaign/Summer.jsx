import ProductArticleSummer from "@/Components/Campaign/ProductArticleSummer";



export default function SummerPage() {

  const products  = [
    {
      id:1,
      description: "An enchanting and sweet combination of rose, raspberry, and lemonade flavors that create a sweet and slightly acidic drink that shines as the light reaches its surface.",
      image: "/campaign/summer/product1.png"
    },
    {
      id:2,
      description: "Cozy and sweet indulgence with a fresh flavor profile that matches its fulfilling sips perfectly.",
      image: "/campaign/summer/product2.png"
    },
    {
      id:3,
      description: "An energizing tropical escape that combines citric and sweet notes in every sip.",
      image: "/campaign/summer/product3.png"
    },
    {
      id:4,
      description: "Deliciously tart green apple infusion that's balanced by its creaminess, creating a nourishing delight.",
      image: "/campaign/summer/product4.png"
    },
  ]

  return (
    <div >
      <section 
        className="w-full h-full min-h-[30rem] lg:min-h-[50rem] relative slide-in-top" >
        <img src={'/campaign/summer/image1.png'} alt={'Order'} width={30} height={30 } layout="responsive" className="md:hidden" />
        <img src={'/campaign/summer/image1-desktop.png'} alt={'Order'} 
           layout="fill"
          objectFit="cover"
          className="hidden w-full md:block " />
        </section>
      <section className="px-6 my-4 lg:w-desktop md:m-auto">
        <p className="m-auto text-center text-gray slide-in-left lg:text-lg lg:p-5 lg:w-2/3 lg:py-12">
        Amore di Summer is a celebration of the electrifying and captivating the Summer Love experience, embracing that passion and taking it to a romantic Italian setting.
        </p>
      </section>

      <section className="gap-20 m-auto lg:w-desktop lg:px-6 lg:grid lg:grid-cols-2">
      {
          products.map((product) => (
            <ProductArticleSummer
                product={product}
                key={product.id}
              />
          ))
        }
      </section>
      
    </div>
  );
}