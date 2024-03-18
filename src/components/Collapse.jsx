import PropTypes from "prop-types";
import { useState } from "react";
import svg from "../assets/Logo/arrow-collapse.svg"

const Collapse = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const arrowStyle = {
    transform: isActive ? "rotate(-180deg)" : "", 
    transition: 'transform 0.5s ease'
  };


  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? <img src={svg} alt="arrow" style={arrowStyle} /> : <img src={svg} alt="arrow" style={arrowStyle} />}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Collapse;
