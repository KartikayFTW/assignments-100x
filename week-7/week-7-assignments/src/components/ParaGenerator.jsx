import React, { useState, useMemo, useCallback } from "react";

const wordList = [
  "apple",
  "mystery",
  "beautiful",
  "quick",
  "bright",
  "stream",
  "valley",
  "mountain",
  "sky",
  "ocean",
  "planet",
  "moon",
  "sun",
  "star",
  "forest",
  "tree",
  "river",
  "cloud",
  "rain",
  "wind",
  "snow",
  "storm",
  "thunder",
  "light",
  "dark",
  "color",
  "shadow",
  "light",
  "fire",
  "ice",
  "earth",
  "water",
  "air",
  "space",
  "time",
  "gravity",
  "energy",
  "science",
  "nature",
];

const ParaGenerator = () => {
  const [noOfWords, setNoOfWords] = useState(0);
  const [paragraph, setParagraph] = useState("");

  const generateWord = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
  }, []);

  const generateParagraph = useCallback(
    (numWords) => {
      return Array.from({ length: numWords }, generateWord).join(" ");
    },
    [generateWord]
  );

  const generatedParagraphs = useMemo(() => {
    return Array.from({ length: noOfWords })
      .map(() => generateParagraph(20))
      .join("\n\n");
  }, [noOfWords, generateParagraph]);

  const paraGeneratorHandler = useCallback(() => {
    setParagraph(generatedParagraphs);
  }, [generatedParagraphs]);

  console.log(noOfWords, paragraph);

  return (
    <div className="flex h-full mx-auto mt-40 justify-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl w-full text-center pr-16">Para Generator</h2>
        <div className="flex gap-10 w-[40rem] items-center pt-5">
          <input
            type="text"
            placeholder="Enter Number of Paragraphs"
            className="w-full h-10 border-2 border-gray-800"
            onChange={(e) => setNoOfWords(e.target.value)}
          />
          <button
            className="px-4 py-3 rounded-lg bg-black text-white"
            onClick={paraGeneratorHandler}
          >
            Generate
          </button>
        </div>
        {paragraph && <p className="w-2/5 -ml-16 mt-10">{paragraph}</p>}
      </div>
    </div>
  );
};

export default ParaGenerator;
