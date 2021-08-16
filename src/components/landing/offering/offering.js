import { Button } from "antd";
import React from "react";

export default function Offering() {
  const delay = 2500;
  const text = ["Tailored Solution", "Express Delivery", "Value For Money"];

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

  return (
    <div className="offering">
      <h1>Offering You</h1>
      <Slideshow />
      <p>
        At Flomo, we make you connect with fashion curators for chic fashion
        advice based on your personal attributes. Our fashion curators
        understand your requirements and give you the best. Just click the link
        below.
      </p>
      <Button type="primary" size="large" danger>
        Talk to a Fashion Expert
      </Button>
    </div>
  );
}
