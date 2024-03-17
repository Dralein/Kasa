import {useParams} from 'react-router-dom';
import logements from '../../database/logements.json';
import Slideshow from '../Slideshow';


const findLogementID = (id) => {
  return logements.find((logement) => logement.id === id);
};


const Logement = () => {
  const {id} = useParams();
  const logement = findLogementID(id);
  const pictures = logement.pictures;

  return (
    <main className='logement'>
      <Slideshow pictures={pictures}/>
      <section className="description">
      <p>Voici le détail du logement avec ID: {id}</p>
      <h2>Titre: {logement.title}</h2>
      <p> <strong>Description:</strong> {logement.description}</p>
      <p> <strong>Equipement:</strong> {logement.equipments}</p>
      <p> <strong>Location:</strong> {logement.location}</p>
      <p> <strong>Etoiles: </strong>{logement.rating}</p>
      <p> <strong>Style:</strong> {logement.tags}</p>
      <p> <strong>Autheur: </strong> {logement.host.name}</p>
      <img src={logement.host.picture}></img>
      </section>
    </main>
  );
};





export default Logement;