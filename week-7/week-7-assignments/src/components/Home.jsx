import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateToAssignment = (assignmentNumber) => {
    navigate(`/assignment${assignmentNumber}`);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-6">Check Out Assignments</h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {[...Array(7)].map((_, index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigateToAssignment(index + 1)}
          >
            Assignment {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
