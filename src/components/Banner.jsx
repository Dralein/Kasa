import PropTypes from 'prop-types';


const Banner = ({ imageUrl, title }) => {
  return (
    <section className="banner">
    <img src={imageUrl} alt="" />
    <h1>{title}</h1>
  </section>
  );
};

Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};


export default Banner;