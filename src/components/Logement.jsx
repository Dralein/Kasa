import { useParams } from 'react-router-dom';
import logement from '../database/logements.json';

const findLivreID = (id) => {
  return logement.find((logement) => logement.id === id);
};

const Livre = () => {
  const { id } = useParams();
  const logement = findLivreID(id);
  const pictures = logement.pictures;
  return (
    <div className='logement'>
      <div className="pictures">
      {pictures.map((picture, index) => {
        return (
          <img src={picture} alt={picture.title} key={picture, index}/>
        );
      })}
      </div>
      <div className="description">
      <p>Voici le détail du livre avec ID: {id}</p>
      <h2>Titre: {logement.title}</h2>
      <p> <strong>Desciption:</strong> {logement.description}</p>
      <p> <strong>Equipement:</strong> {logement.equipments}</p>
      <p> <strong>Location:</strong> {logement.location}</p>
      <p> <strong>Etoiles: </strong>{logement.rating}</p>
      <p> <strong>Style:</strong> {logement.tags}</p>
      <p> <strong>Autheur: </strong> {logement.host.name}</p>
      <img src={logement.host.picture}></img>
      </div>
    </div>
  );
};

export default Livre;