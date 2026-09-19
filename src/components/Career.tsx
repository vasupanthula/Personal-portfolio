import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> projects
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning & NLP Projects</h4>
                <h5>Independent Developer</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Developed and implemented practical machine learning pipelines, including an SMS spam detection system utilizing natural language processing and logistic regression, along with predictive modeling projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Science & Engineering</h4>
                <h5>Visvesvaraya College Of Engineering And Technology</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              Built a robust foundation in computer science principles, data structures, algorithms, and artificial intelligence, actively preparing for professional engineering roles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;