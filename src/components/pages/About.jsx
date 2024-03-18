import Banner from "../Banner";
import imagebanner from "../../assets/images/aboutbanner.webp"
import Collapse from "../Collapse";

export const aboutList = [
  {
  title: 'Fiabilité',
  content:
  'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
  },
  {
  title: 'Respect',
  content:
  'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
  title: 'Service',
  content:
  "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
  title: 'Sécurité',
  content:
  "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
  ];


const About = () => {
  return (
    <main>
      <Banner  imageUrl={imagebanner}/>
      <section>
      <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes au logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
      <Collapse title="Respect"/>
      <Collapse title="Service"/>
      <Collapse title="Sécurité"/>
      </section>
    </main>
  );
};

export default About;