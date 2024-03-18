import {useParams} from 'react-router-dom';
import logements from '../../database/logements.json';
import Slideshow from '../Slideshow';
import {Navigate} from 'react-router-dom'
import Rating from '../Rating';

const findLogementID = (id) => {
  return logements.find((logement) => logement.id === id);
};


const Logement = () => {
  const {id} = useParams();
  const logement = findLogementID(id);
  const pictures = logement.pictures;
  const rating = logement.rating;
  const fullName = logement.host.name;
  const [firstName, lastName] = fullName.split(" ");
  if (!id) {
    return <Navigate to="*" replace />;
  }
  return (
    <main className='logement'>
      <Slideshow pictures={pictures}/>
      <section className="description">
      <div className='leftposition'>
      <h2>{logement.title}</h2>
      <h3>{logement.location}</h3>
      <ul className='tags'>
      {logement.tags.map((tag, index) => (
      <li key={index}>{tag}</li>
      ))}
      </ul>
      <p> <strong>Description</strong> {logement.description}</p>
      </div>
      <div className='rightposition'>
      <div className='host-name'>
      <p>{firstName}<br />{lastName}</p>
      <img src={logement.host.picture}></img>
      </div>
      <div className='rating-flexend'>
      <Rating rating={rating} />
      </div>
      <ul>
      {logement.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
      ))} 
      </ul>
      </div>
      </section>
    </main>
  );
};



export default Logement;