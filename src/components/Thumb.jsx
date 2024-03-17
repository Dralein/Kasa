import { Link, Navigate } from 'react-router-dom';

const Thumb = ({ logements }) => {
  return (
    logements.map((logement, index) => { // Ajout de 'index' ici
      if (logement.id) {
        return (
          <Link to={`/logement/${logement.id}`} className="thumb" key={logement.id}> 
            <img src={logement.cover} alt={logement.title} />
            <h3>{logement.title}</h3>
          </Link>
        );
      } else {
        // Rediriger vers la page Error si l'ID n'existe pas
        return <Navigate key={`error-${index}`} to="/error" replace />;
      }
    })
  );
};

export default Thumb;