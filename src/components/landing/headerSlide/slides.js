import React from "react";
import "./slide.scss";
const text = ["Tips", "Personalised Experience", "Delivery Portal"];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === text.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {text.map((texts, index) => (
          <div className="slide" key={index}>
            {" "}
            <h1>{texts}</h1>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
