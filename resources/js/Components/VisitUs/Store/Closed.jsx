

export const Closed = ({ title, image }) => {
  return (
    <div className="w-full join join-vertical">
      <div className="collapse collapse-arrow join-item">
        <input type="radio" name="my-accordion-4" />

        <h2 className="collapse-title text-xl font-normal text-beige border-b-[0.1rem] border-beige">
          <span className="block text-sm font-light text-beige">OPEN SOON</span>
          {title}
        </h2>

        <div className="p-0 collapse-content md:flex md:justify-center md:items-center">
          <img
            src={image}
            height={100}
            width={100}
            layout="responsive"
            alt="Main"
          />
          <article className="flex items-start gap-6 px-6 mt-5 mb-6 md:flex-col md:items-center md:justify-center md:w-1/2">
            <h2 className="hidden text-xl font-normal collapse-title text-beige md:text-center md:block">
              <span className="block text-sm font-light text-beige">OPEN SOON</span>
              {title}
            </h2>
            <img
              src={"/logos/ubication.png"}
              width={30}
              height={20}
              alt="Location"
            />
            <p className="w-2/3 text-gray md:text-center">
              707 E Ocean Blvd. Unit B-106, Long Beach, CA 90802
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};
