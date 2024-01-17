import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BusinessCard from "./components/BusinessCard";
import React from "react";

function App() {
  const [count, setCount] = useState(0);
  const interests = [
    {
      id: 1,
      interest: "React",
    },
    {
      id: 2,
      interest: "React Native",
    },
    {
      id: 1,
      interest: "NextJs",
    },
    {
      id: 1,
      interest: "NodeJs",
    },
  ];

  return (
    <>
      <BusinessCard
        name="Lokesh"
        description="A TA in the 100xDevs Cohort 2.0"
        interests={interests}
      />
    </>
  );
}

export default App;
