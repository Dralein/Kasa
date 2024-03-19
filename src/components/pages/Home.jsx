import Banner from "../Banner";
import Thumb from "../Thumb";
import logements from "../../database/logements.json";
import imagebanner from "../../assets/images/homebanner.webp";

const Home = () => {
  return (
    <main>
      <Banner imageUrl={imagebanner} title="Chez vous, partout et ailleurs" />
      <section className="gallery">
        <Thumb logements={logements} />
      </section>
    </main>
  );
};

export default Home;
