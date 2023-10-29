import React, { useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import baseUrl from "../../utils/baseUrl";

import axios from "axios"; 

const MapComponent = () => {
  const [manufacturers, setManufacturers] = useState([]);

  React.useEffect(() => {
    const url = `${baseUrl}/api/v1/manufacturerLocation/locations`;

    axios.get(url)
      .then((response) => {
        const responseData = response.data; 
        console.log(responseData)
        setManufacturers(responseData)
      })
      .catch((error) => {
        console.error("Error fetching placemarks:", error);
      });
  }, [baseUrl]);
  
  
  return (
    <div>
      <YMaps>
        <Map
          defaultState={{
            center: [42.937146, 74.627722],
            zoom: 11,
          }}
          width={"100%"}
          height={"400px"}
          modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
        >
          {manufacturers.map((placemark, index) => (
            <Placemark
              key={index}
              geometry={[placemark.latitude, placemark.longitude]}
              // options={placemark.options}
              properties={{
                balloonContent:placemark.id
              }}
            />
          ))}
        </Map>
      </YMaps>
    </div>
  );
};

export default MapComponent;
