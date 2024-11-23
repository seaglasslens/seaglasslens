import { useEffect, useState, useContext } from "react";
import { AppContextValue, AppContext } from "../app/AppContext.tsx";
import { artists, filters } from "./artists-content.tsx";
import illustrationFilterAsset from "../../assets/illustration-filter.png";
import photographyFilterAsset from "../../assets/photography-filter.png";
import fashionFilterAsset from "../../assets/fashion-filter.png";
import handcraftFilterAsset from "../../assets/handcraft-filter.png";
import writingFilterAsset from "../../assets/writing-filter.png";

const Artists = () => {
  const { rerender } = useContext(AppContext) as AppContextValue;

  const [filteredArtists, setFilteredArtists] = useState(artists);
  const [selectedFilter, setSelectedFilter] = useState(0);

  useEffect(() => {
    filterArtists();
  }, [selectedFilter]);

  const filterArtists = () => {
    const currentFilter = filters[selectedFilter];
    const filtered = artists.filter((artist) =>
      artist.category.includes(currentFilter)
    );
    setFilteredArtists(filtered.flat());
    rerender();
  };

  const renderArtists = () => {
    return filteredArtists.map((artist, index) => (
      <li key={index} className="artists-list-item">
        {artist.username !== "Amir Patel" ? (
          <a
            href={"https://www.instagram.com/" + artist.username + "/"}
            target="_blank"
            className="username"
          >
            @{artist.username}
          </a>
        ) : (
          artist.username
        )}
      </li>
    ));
  };

  return (
    <>
      <div className="artists-container">
        <ul className="artists-list">{renderArtists()}</ul>
        <div className="filter-bar">
          <button
            className="previous-filter"
            onClick={() => {
              setSelectedFilter((prev) =>
                prev === 0 ? filters.length - 1 : prev - 1
              );
            }}
          >
            BACK
          </button>
          <img
            className="filter"
            src={
              {
                0: illustrationFilterAsset,
                1: photographyFilterAsset,
                2: fashionFilterAsset,
                3: handcraftFilterAsset,
                4: writingFilterAsset,
              }[selectedFilter]
            }
            alt="Filter"
          />
          <button
            className="next-filter"
            onClick={() => {
              setSelectedFilter((prev) =>
                prev === filters.length - 1 ? 0 : prev + 1
              );
            }}
          >
            NEXT
          </button>
        </div>
      </div>
    </>
  );
};

export default Artists;
