import React from "react";

const BusinessCard = ({ name, description, interests }) => {
  const onLinkedInClick = () => {
    window.open("https://www.linkedin.com", "_blank");
  };

  const onTwitterClick = () => {
    window.open("https://www.twitter.com", "_blank");
  };
  return (
    <div className="pt-10 flex pl-10">
      <div className="border-solid border-2 border-gray-300 rounded-lg bg-white w-1/2 min-w-fit py-10 px-10 drop-shadow-lg flex flex-col justify-center gap-5 ">
        <h2 className="font-bold text-2xl">{name}</h2>
        <p className="text-lg ">{description}</p>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl">Interests</h3>
          <ul className="pt-3 flex flex-col gap-2">
            {interests.map((int) => (
              <li key={int.id}>{int.interest}</li>
            ))}
          </ul>
        </div>
        <div className="flex  gap-5">
          <button
            className="bg-blue-500 py-3 px-4 rounded-lg text-white font-bold"
            onClick={onLinkedInClick}
          >
            LinkedIn
          </button>
          <button
            className="bg-blue-500 py-3 px-4 rounded-lg text-white font-bold"
            onClick={onTwitterClick}
          >
            Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
