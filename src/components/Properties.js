import { useEffect, useState } from "react";

import axios from "axios";

import PropertyCard from "./PropertyCard";
import SideBar from "./SideBar";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  const loadProperties = async () => {
    const { data } = await axios("/PropertyListing");
    setProperties(data);
  };

  useEffect(() => {
    loadProperties();
  }, []);

  return (
    <div className="container">
      <SideBar />
      <div className="propertiesWrapper">
        {properties.map((p) => (
          <PropertyCard property={p} key={p._id} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
