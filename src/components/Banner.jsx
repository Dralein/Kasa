import PropTypes from "prop-types";

const Banner = ({ imageUrl, title }) => {
  return (
    <section className="banner">
      <img src={imageUrl} alt="Image de Banner" />
      <h1>{title}</h1>
    </section>
  );
};

Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default Banner;
