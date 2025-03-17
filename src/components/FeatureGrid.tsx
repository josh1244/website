import "../styles/components.css";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Development",
    description:
      "Building modern web applications with cutting-edge technologies and best practices.",
  },
  {
    title: "Design",
    description:
      "Creating beautiful, intuitive interfaces that provide exceptional user experiences.",
  },
  {
    title: "Innovation",
    description:
      "Exploring new technologies and pushing the boundaries of what's possible on the web.",
  },
];

const FeatureGrid = () => {
  return (
    <section className="content">
      <div className="container">
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
