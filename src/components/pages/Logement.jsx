import { useParams } from "react-router-dom";
import logements from "../../database/logements.json";
import Slideshow from "../Slideshow";
import Rating from "../Rating";
import Collapse from "../../components/Collapse";

const findLogementID = (id) => {
  return logements.find((logement) => logement.id === id);
};

const Logement = () => {
  const { id } = useParams();
  const logement = findLogementID(id);
  const fullName = logement.host.name;
  const [firstName, lastName] = fullName.split(" ");
  return (
    <main className="logement">
      <Slideshow pictures={logement.pictures} />
      <section className="description">
        <div className="leftposition">
          <h2>{logement.title}</h2>
          <h3>{logement.location}</h3>
          <ul className="tags">
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="rightposition">
          <div className="host-name">
            <p>
              {firstName}
              <br />
              {lastName}
            </p>
            <img src={logement.host.picture}></img>
          </div>
          <div className="rating-flexend">
            <Rating rating={logement.rating} />
          </div>
        </div>
      </section>
      <div className="section-collapse">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipement"
          content={logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        />
      </div>
    </main>
  );
};

export default Logement;
