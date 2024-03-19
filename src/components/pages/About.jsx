import Banner from "../Banner";
import imagebanner from "../../assets/images/aboutbanner.webp";
import Collapse from "../Collapse";
import aboutdata from "../../database/aboutcollapse.json";

const About = () => {
  const collapsecontent = aboutdata.map((about, index) => (
    <Collapse title={about.title} content={about.content} key={index} />
  ));
  return (
    <main className="about">
      <Banner imageUrl={imagebanner} title="" />
      <section className="section-collapse">{collapsecontent}</section>
    </main>
  );
};

export default About;
