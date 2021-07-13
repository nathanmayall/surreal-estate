import PropTypes from "prop-types";

import "../styles/PropertyCard.css";

const PropertyCard = ({ property }) => {
  const { title, type, bedrooms, bathrooms, price, city, email } = property;
  return (
    <div className="propertyWrapper">
      <div>
        <img src="https://picsum.photos/500" alt="" />
      </div>
      <div className="propertyInfo">
        <p className="title">{title}</p>
        <p>Property type: {type}</p>
        <p>Bedrooms: {bedrooms}</p>
        <p>Bathrooms: {bathrooms}</p>
        <p>£{Number.parseInt(price, 10).toLocaleString("en-GB")}</p>
        <p>Location: {city}</p>
        <a
          href={`mailto:${email}?subject=I'm interested in the ${title}, in ${city}`}
        >
          <button type="button">Email</button>
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
  property: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.string.isRequired,
    bathrooms: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
