import bannerimg from "../assets/images/homebanner.webp"

const Banner = () => {
  return (
    <section className="banner">
    <img src={bannerimg} alt="" />
    <h1>Chez vous, partout et ailleurs</h1>
  </section>
  );
};

export default Banner;