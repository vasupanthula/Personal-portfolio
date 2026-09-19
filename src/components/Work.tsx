import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    number: "01",
    title: "SMS Spam Detection",
    category: "NLP / Machine Learning",
    tools: "Python, Scikit-learn, NLTK, Pandas",
    description:
      "Developed an NLP-based SMS spam classification system with text preprocessing and TF-IDF feature extraction. Classified messages as Spam or Ham using machine learning.",
    images: [
      "/images/sms-spam-01-classification.png",
      "/images/sms-spam-02-nlp-pipeline.png",
      "/images/sms-spam-03-model-workflow.png",
      "/images/sms-spam-04-technologies.png",
    ],
  },

  {
    number: "02",
    title: "Accident Emergency Alert",
    category: "Deep Learning / Computer Vision",
    tools: "Python, TensorFlow, OpenCV",
    description:
      "Developed a deep learning model for accident detection from images. Applied image preprocessing and data augmentation techniques and designed a real-time emergency alert workflow.",
    images: [
      "/images/accident-alert-01-detection.png",
      "/images/accident-alert-02-image-pipeline.png",
      "/images/accident-alert-03-emergency-workflow.png",
      "/images/accident-alert-04-technologies.png",
    ],
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX = 0;

    function setTranslateX() {
      const boxes = document.getElementsByClassName("work-box");

      if (!boxes.length) return;

      const container = document.querySelector(".work-container");

      if (!container) return;

      const rectLeft = container.getBoundingClientRect().left;
      const rect = boxes[0].getBoundingClientRect();

      const parentWidth =
        boxes[0].parentElement!.getBoundingClientRect().width;

      const padding =
        parseInt(window.getComputedStyle(boxes[0]).padding) / 2;

      translateX =
        rect.width * boxes.length -
        (rectLeft + parentWidth) +
        padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">

        {/* WORK TITLE */}
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">

          {projectsData.map((project, index) => (

            <div className="work-box" key={index}>

              {/* PROJECT INFORMATION */}
              <div className="work-info">

                <div className="work-title">

                  <h3>{project.number}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>

                </div>

                <h4>Tools and features</h4>

                <p>{project.tools}</p>

                <p
                  style={{
                    fontSize: "0.85rem",
                    opacity: 0.8,
                    marginTop: "10px",
                  }}
                >
                  {project.description}
                </p>

              </div>

              {/* PROJECT IMAGE GALLERY */}
              <div className="work-gallery">

                {project.images.map((image, imageIndex) => (

                  <WorkImage
                    key={imageIndex}
                    image={image}
                    alt={`${project.title} - Image ${imageIndex + 1}`}
                  />

                ))}

              </div>

            </div>

          ))}

        </div>
      </div>
    </div>
  );
};

export default Work;