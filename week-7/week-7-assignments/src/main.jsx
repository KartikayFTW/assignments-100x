import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home.jsx";
import ProfileCard from "./components/ProfileCard";
import BackgroundChanger from "./components/BackgroundChanger.jsx";
import ParaGenerator from "./components/ParaGenerator.jsx";
import GithubCard from "./components/GithubCard.jsx";
import OtpScreen from "./components/OtpScreen.jsx";
import BirthdayCardGenerator from "./components/BirthdayCardGenerator.jsx";
import Assignment3 from "./components/Assignment3.jsx";

const profileData = {
  profilePhotoUrl:
    "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=2285&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  name: "John Doe",
  id: "@johndoe",
  followers: "1.2k",
  likes: "3.4k",
  likesName: "Likes",
  photo: "120",
  location: "New York, USA",
  photoName: "Photos",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "assignment1", element: <ProfileCard {...profileData} /> },
      { path: "assignment2", element: <BackgroundChanger /> },
      { path: "assignment3", element: <Assignment3 /> },
      { path: "assignment4", element: <ParaGenerator /> },
      { path: "assignment5", element: <GithubCard /> },
      { path: "assignment6", element: <OtpScreen /> },
      { path: "assignment7", element: <BirthdayCardGenerator /> },
    ],
  },
  // You can add more routes outside of the main layout here if needed
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
