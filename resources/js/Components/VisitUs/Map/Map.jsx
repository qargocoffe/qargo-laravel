
import {
  GoogleMap,
  useJsApiLoader,
} from "@react-google-maps/api";

import styles from "./styles";

export const Map = () => {

  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDWhb3NnSahO0oYXuIF2_nAY2gORFURCN0"
  });

  const center = {
    lat: 33.77014837170382,
    lng: -118.19262226683186
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.7) 12%, transparent 26%, transparent)',
        transition: 'background-image 0.5s ease',
        width: "100%",
        minHeight: "800px"
      }}
      center={center}
      zoom={10}
      options={{
        styles: styles,
        mapTypeControl: false,
        zoomControl: false,
        fullscreenControl: false,
        streetViewControl: true,
      }}
    >
      <div className="flex items-center justify-end w-auto">
        <div className="absolute z-20 flex flex-row items-center left-4 bottom-8">
          <input
            placeholder="ENTER CITY OR ZIPCODE"
            className="slide-in-left placeholder:text-[11px] placeholder:text-gray placeholder:font-bold tracking-widest border-0 rounded-full bg-white border-gray-400 pl-3 pr-12 py-2 w-full"
          />
          <figure className="absolute top-0 w-6 p-0 mx-0 mt-1 right-2">
            <img
              src="/menu/gray/search.png"
              width={30}
              height={30}
              layout="responsive"
              className=""
              alt="Search Icon"
            />
          </figure>
        </div>
      </div>

      {/* Child components, such as markers, info windows, etc. */}
    </GoogleMap>
  ) : <></>;
};
