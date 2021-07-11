import PropTypes from "prop-types";

import "../styles/Alert.css";

const Alert = ({ message, isSuccess }) => {
  return <div className={isSuccess ? "Good" : "Bad"}>{message}</div>;
};

export default Alert;

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  isSuccess: PropTypes.bool,
};
Alert.defaultProps = {
  isSuccess: false,
};
