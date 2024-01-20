import React from "react";
import { useState } from "react";
import ProfileCard from "./ProfileCard";

const GithubCard = () => {
  const [username, setUsername] = useState();
  const [githubdata, setGithubData] = useState();

  const getData = async () => {
    const fetchData = await fetch(`https://api.github.com/users/${username}`);
    const jsonData = await fetchData.json();
    setGithubData(jsonData);
  };

  console.log(githubdata);
  return (
    <div className=" mx-auto h-96 w-1/2 ">
      <div className="flex gap-5 justify-center items-center h-1/2 bg-green-200 rounded-sm mt-20">
        <input
          type="text"
          className="border-2 pl-2 border-black h-10"
          placeholder="Enter github username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={getData}
          className="py-2 px-4 rounded-lg shadow-2xl bg-black text-white"
        >
          Generate Card
        </button>
      </div>
      {githubdata && (
        <div className="-mt-10">
          <ProfileCard
            profilePhotoUrl={githubdata.avatar_url}
            name={githubdata.name || githubdata.login}
            id={githubdata.id}
            followers={githubdata.followers}
            likes={githubdata.public_repos}
            likesName="Public Repos"
            photo={githubdata.following}
            photoName="Following"
            location={githubdata.location}
          />
        </div>
      )}
    </div>
  );
};

export default GithubCard;
