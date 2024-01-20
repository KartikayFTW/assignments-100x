import React, { useState } from "react";

const BirthdayCardGenerator = () => {
  const [name, setName] = useState("");
  const [showCards, setShowCards] = useState(false);

  const cardData = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1610599929507-fac366fb4252?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDN8fHxlbnwwfHx8fHw%3D",
      message: "Wishing You a great future ahead!",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1551972873-b7e8754e8e26?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      message: "May your day be filled with joy!",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1578922794704-7bdd46f70ce0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      message: "Cheers to another year of happiness!",
    },
  ];

  return (
    <>
      <div className="bg-[url('https://images.unsplash.com/photo-1578922864601-79dcc7cbcea9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-screen w-screen bg-contain bg-center flex flex-col gap-20 justify-center items-center">
        <div className="bg-blue-300 opacity-80 flex flex-col h-1/3 w-1/2 gap-5 pt-10 items-center">
          <h2 className="text-2xl flex justify-center">Enter Your Name</h2>
          <input
            type="text"
            placeholder="Enter Your name"
            className="h-10 w-4/5 pl-3"
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-900 text-white text-bold text-lg"
            onClick={() => setShowCards(true)}
          >
            Done
          </button>
        </div>
        {showCards && (
          <div className="flex gap-5">
            {cardData.map((card, index) => (
              <Card
                key={index}
                imgUrl={card.imgUrl}
                message={card.message}
                name={name}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const Card = ({ imgUrl, name, message }) => {
  return (
    <div
      className={`h-96 w-64 bg-cover bg-center flex flex-col items-center justify-center  `}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="bg-red-200 opacity-75 h-2/3 flex justify-center flex-col items-center text-center">
        <h2 className="text-2xl">Hello Birthday </h2>
        <h2 className="text-4xl">{name}</h2>

        <p className="">{message}</p>
      </div>
    </div>
  );
};

export default BirthdayCardGenerator;
