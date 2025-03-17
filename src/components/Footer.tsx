import "../styles/components.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
