import { Fragment, useEffect, useRef, useState } from "react";
import Loader from "components/loader";

export default function Predictions({ predictions, submissionCount }) {
  const scrollRef = useRef(null);
  useEffect(() => {
    if (submissionCount > 0) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [predictions, submissionCount]);

  if (submissionCount === 0) return;

  return (
    <section className="w-full my-10">
      <h2 className="text-center text-3xl font-bold m-6">结果</h2>

      {submissionCount > Object.keys(predictions).length && (
        <div className="pb-10 mx-auto w-full text-center">
          <div className="pt-10" ref={scrollRef} />
          <Loader />
        </div>
      )}
      {Object.values(predictions)
        .slice()
        .reverse()
        .map((prediction, index) => (
          <Fragment key={prediction.id}>
            {index === 0 &&
              submissionCount == Object.keys(predictions).length && (
                <div ref={scrollRef} />
              )}
            <Prediction prediction={prediction} />
          </Fragment>
        ))}
    </section>
  );
}

export function Prediction({ prediction, showLinkToNewScribble = false }) {
  const [linkCopied, setLinkCopied] = useState(false);

  if (!prediction) return null;

  return (
    <div className="mt-6 mb-12">
      <div className="shadow-lg border my-5 p-5 bg-white flex">
        <div className="w-full aspect-square relative">
          {prediction.output?.length ? (
          <img
            src={prediction.output}
            alt="output image"
            className="w-full aspect-square"
          />
          ) : (
            <div className="grid h-full place-items-center">
              <Loader />
            </div>
          )}
        </div>
      </div>
      <div className="text-center py-2">
      </div>
    </div>
  );
}
