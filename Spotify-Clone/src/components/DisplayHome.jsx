import React, { useContext } from "react";
import NavBar from "./NavBar";
import AlbumItems from "./AlbumItems";
import SongItems from "./SongItems";
import { PlayerContext } from "../context/PlayerContext";

const DisplayHome = () => {

  const {songsData, albumsData} = useContext(PlayerContext);

  return (
    <>
      <NavBar />
      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl">Featured Chart</h1>
        <div className="flex overflow-auto ">
          {albumsData.map((item, index) => (
            <AlbumItems
              key={index}
              name={item.name}
              desc={item.desc}
              id={item._id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto ">
          {songsData.map((item, index) => (
            <SongItems
              key={index}
              name={item.name}
              id={item._id}
              desc={item.desc}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
