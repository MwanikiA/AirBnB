import { FaArrowRightLong } from "react-icons/fa6";
import "./hero.css"
import House from "../../assets/house-removebg-preview.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>YOUR BNB PLACE</h1>
      </div>
      <Link to='/discover'>
        <button className="discover-button">
          <p>DISCOVER</p>
          <FaArrowRightLong />
        </button>
      </Link>

      <div className="hero-image">
        <img src={House} alt="Landing page image" />
      </div>
    </section>
  );
};

export default Hero;