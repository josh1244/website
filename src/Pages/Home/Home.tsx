// Home Page

// Imports
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";
import Carousel, { CarouselItem } from "../../components/Carousel/Carousel";
import ProjectImage from "./Scriptos Login.png";

const ProjectLink = "/projects/scriptos";

const carouselData: CarouselItem[] = [
  { image: "/Images/2024-04-07-0024.jpg", title: "", description: "" },
  { image: "/Images/2024-04-08-0125.jpg", title: "", description: "" },
  { image: "/Images/2024-04-13-0151.jpg", title: "", description: "" },
  { image: "/Images/2024-04-13-0158.jpg", title: "", description: "" },
  { image: "/Images/2024-04-13-0160.jpg", title: "", description: "" },
  { image: "/Images/2024-04-22-0180.jpg", title: "", description: "" },
  { image: "/Images/2024-07-03-0002.jpg", title: "", description: "" },
  { image: "/Images/2024-07-04-0003.jpg", title: "", description: "" },
  { image: "/Images/2024-07-04-0004.jpg", title: "", description: "" },
  { image: "/Images/2024-07-04-0005.jpg", title: "", description: "" },
  { image: "/Images/2024-07-04-0007.jpg", title: "", description: "" },
  { image: "/Images/2024-07-04-0008.jpg", title: "", description: "" },
  { image: "/Images/2024-07-04-0009.jpg", title: "", description: "" },
  { image: "/Images/2024-07-04-0010.jpg", title: "", description: "" },
  { image: "/Images/2024-07-04-0011.jpg", title: "", description: "" },
  { image: "/Images/2024-07-04-0012.jpg", title: "", description: "" },
  { image: "/Images/2024-07-04-0013.jpg", title: "", description: "" },
  { image: "/Images/2024-07-04-0016.jpg", title: "", description: "" },
  { image: "/Images/2024-07-04-0017.jpg", title: "", description: "" },
  { image: "/Images/2024-07-04-0018.jpg", title: "", description: "" },
  { image: "/Images/2024-07-04-0022.jpg", title: "", description: "" },
  { image: "/Images/2024-07-05-0029.jpg", title: "", description: "" },
  { image: "/Images/2024-07-05-0031.jpg", title: "", description: "" },
  { image: "/Images/2024-07-05-0033.jpg", title: "", description: "" },
  { image: "/Images/2024-07-05-0034.jpg", title: "", description: "" },
  { image: "/Images/2024-07-05-0037.jpg", title: "", description: "" },
  { image: "/Images/2024-07-05-0041.jpg", title: "", description: "" },
  { image: "/Images/2024-07-05-0047.jpg", title: "", description: "" },
  { image: "/Images/2024-07-05-0048.jpg", title: "", description: "" },
  { image: "/Images/2024-07-05-0050.jpg", title: "", description: "" },
  { image: "/Images/2024-07-05-0052.jpg", title: "", description: "" },
  { image: "/Images/2024-07-06-0058.jpg", title: "", description: "" },
  { image: "/Images/2024-07-06-0059.jpg", title: "", description: "" },
  { image: "/Images/2024-07-06-0060.jpg", title: "", description: "" },
  { image: "/Images/2024-07-06-0064.jpg", title: "", description: "" },
  { image: "/Images/2024-07-06-0093.jpg", title: "", description: "" },
  { image: "/Images/2024-07-06-0119.jpg", title: "", description: "" },
  { image: "/Images/2024-07-06-0120.jpg", title: "", description: "" },
  { image: "/Images/2024-07-06-0121.jpg", title: "", description: "" },
  { image: "/Images/2024-07-06-0122.jpg", title: "", description: "" },
  { image: "/Images/2024-07-27-0124.jpg", title: "", description: "" },
  { image: "/Images/2024-09-17-0005.jpg", title: "", description: "" },
  { image: "/Images/2024-10-06-5200.jpg", title: "", description: "" },
];

const Home: React.FC = () => {
  return (
    <div className="container">
      {/* Introduction Section */}
      <div className="content-section">
        <h2>Welcome!</h2>
        <p>
          Hi, I'm Joshua Ham, a Software Engineering student with a
          concentration in Cybersecurity at Franciscan University of
          Steubenville. I am passionate about full-stack development,
          cybersecurity, and creating innovative solutions.
        </p>
        <p>
          Currently, I work as a Software Developer at the Air Force Research
          Lab and as a Software Engineer at Franciscan University, where I
          develop tools and applications that make a difference.
        </p>
        <img
          src="https://placehold.co/800x400/0099ff/ffffff?text=Featured+Image"
          alt="Featured Image"
          className="centered-image"
        />
      </div>

      {/* Projects Section */}
      <div className="content-section">
        <h2>My Projects</h2>
        <p>
          Explore some of the projects I've worked on, including DailyTrackPro,
          a cross-platform calendar app, and the USCCB Book Review System.
        </p>
        <Link to="/projects" className="home-button home-primary">
          View My Projects <FaArrowRight />
        </Link>
        <div className="image-container">
          <Link to={ProjectLink}>
            <img
              src={ProjectImage}
              alt="Projects Image"
              className="centered-image"
            />
          </Link>
        </div>
      </div>

      {/* Interests Section */}
      <div className="content-section">
        <h2>My Interests</h2>
        <p>
          Beyond coding, I enjoy 3D printing, teaching, photography, and helping
          others. I also love exploring cybersecurity challenges and designing
          secure networks.
        </p>

        <Carousel
          items={carouselData}
          autoRotateInterval={5000}
          title="Photography Showcase"
          description="A glimpse into my photography collection:"
          isImageOnlyMode={true}
        />
      </div>
    </div>
  );
};

export default Home;
