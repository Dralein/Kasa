import Banner from "../Banner";
import Thumb from "../Thumb";
import logements from "../../database/logements.json"

const Home = () => {
  return (
    <main>
      <Banner />
      <section className="gallery">
        <Thumb logements={logements} />
      </section>
    </main>
  );
};



export default Home;