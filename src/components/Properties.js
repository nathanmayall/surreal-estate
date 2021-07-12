import { useEffect, useState } from "react";

import axios from "axios";

import PropertyCard from "./PropertyCard";

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
    <div className="propertiesWrapper">
      {properties.map((p) => (
        <PropertyCard property={p} key={p._id} />
      ))}
    </div>
  );
};

export default Properties;
