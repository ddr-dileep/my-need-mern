/* eslint-disable react/prop-types */
import "./Heading.scss";

const Heading = ({ title, className }) => {
  return <h2 className={`main-heading ${className}`}>{title}</h2>;
};

export default Heading;
