
import {
    Link,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
  } from "react-scroll";
  
export default function PageOption ({ name, title, subtitle, handleUpload, handleButtonClick, isProcessing, videoRes}) {
    return (
      <Element name={name}>
        <hgroup>
          <h1 className="text-center text-5xl font-bold m-4">{title}</h1>
          <p className="text-center text-xl opacity-60 m-4">{subtitle}</p>
        </hgroup>
        <div>
          <input type="file" accept="video/*" onChange={handleUpload} />
          <button onClick={handleButtonClick}>Send request</button>
          {isProcessing && (
            <div className="mt-4">
              <p>Loading... Please wait.</p>
            </div>
          )}
        </div>
        <div className="mt-4">
          <video src={videoRes} controls width="100%" />
        </div>
      </Element>
      );
}
