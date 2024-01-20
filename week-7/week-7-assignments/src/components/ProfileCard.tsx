import React from "react";

const ProfileCard = ({
  profilePhotoUrl,
  name,
  id,
  followers,
  likes,
  likesName,
  photo,
  location,
  photoName,
}) => {
  return (
    <div className=" h-[400px] w-[400px] mx-auto mt-20 shadow-lg">
      <div
        className="h-2/5 flex justify-center items-end -mb-6 border-b-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522918279596-eb92d4d75259?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className=" h-20 w-20 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover rounded-full"
            src={profilePhotoUrl}
            alt="Descriptive Alt Text"
          />
        </div>
      </div>

      <div className="h-2/3">
        <div className="bg-white h-2/3">
          <div className="flex justify-center items-center flex-col  h-full">
            <div className="flex gap-2 justify-center">
              <span className="font-semibold">{name}</span>
              <span className="text-gray-400">{id}</span>
            </div>
            <p className="text-gray-400">{location}</p>
          </div>
        </div>
        <div className=" h-1/3 flex border-t-2 border-gray-400">
          <div className="flex gap-1 justify-center flex-col items-center  w-full">
            <span className="font-semibold text-xl">{followers}</span>
            <span className="text-gray-400">Followers</span>
          </div>
          <div className="flex gap-1 justify-center flex-col items-center  w-full">
            <span className="font-semibold text-xl">{likes}</span>
            <span className="text-gray-400">{likesName}</span>
          </div>
          <div className="flex gap-1 justify-center flex-col items-center  w-full">
            <span className="font-semibold text-xl">{photo}</span>
            <span className="text-gray-400">{photoName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
