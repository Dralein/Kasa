import PropTypes from "prop-types";
import { useState } from "react";
import svg from "../assets/Logo/arrow-collapse.svg";

const Collapse = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const arrowStyle = {
    transform: isActive ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.5s ease",
  };

  return (
    <div className="accordion">
      <div className="accordion-title" aria-expanded={isActive}>
        <h2>{title}</h2>
        <>
          {isActive ? (
            <img
              src={svg}
              className="toggle-size"
              alt="arrow"
              style={arrowStyle}
              onClick={() => setIsActive(!isActive)}
            />
          ) : (
            <img
              src={svg}
              className="toggle-size"
              alt="arrow"
              style={arrowStyle}
              onClick={() => setIsActive(!isActive)}
            />
          )}
        </>
      </div>
      <div className="accordion-content" aria-expanded={isActive}>
        <p>{content}</p>
      </div>
    </div>
  );
};

Collapse.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  title: PropTypes.string.isRequired,
};

export default Collapse;
