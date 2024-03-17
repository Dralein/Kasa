import leftarrow from '../assets/Logo/left-arrow.svg'
import rightarrow from '../assets/Logo/right-arrow.svg'
import {useState} from "react"
import PropTypes from 'prop-types';

const Slideshow = ({pictures}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = pictures.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="pictures">
      {pictures.map((picture, index) => {
        return (
          <img className={`logement-img ${index === currentSlide ? 'display-img' : 'display-img-none'}`} src={picture} alt={picture.title} key={index}/>
        );
      })}
      <button className='left' onClick={prevSlide}>
      <img src={leftarrow} alt="leftarrow"></img>
      </button>
      <button className='right' onClick={nextSlide}>
      <img src={rightarrow} alt="rightarrow"></img>
      </button>
      <span className="slide-number">{`${currentSlide + 1}/${totalSlides}`}</span>
    </section>
  );
};

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired
};


export default Slideshow;