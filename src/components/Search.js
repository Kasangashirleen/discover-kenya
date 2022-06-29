import React, { useEffect, useState } from "react";
import RegionCard from "./RegionCard";
import Navbar from "./Navbar";
import "./Search.css";
// import regionData from '../data'
// nairobi,central,coast,eastern, north eastern,nyanza,rift valley,western

function Search() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [allRegions, setAllRegions] = useState([]);

  //   console.log(localStorage.getItem("token"));

  const getTok = {
    headers: { Authorization: "token  " + localStorage.getItem("token") },
  };

  useEffect(() => {
    fetch("https://discover-kenya.herokuapp.com/allsites", getTok)
      .then((res) => res.json())
      .then(
        (data) => setAllRegions(data)
        // console.log(data)
      );
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const filterByRegion = (filteredData) => {
      if (!selectedRegion) {
        return allRegions;
      }

      const filteredRegions = filteredData.filter(
        (reg) => reg.region.indexOf(selectedRegion) !== -1
      );
      return filteredRegions;
    };

    let filteredData = filterByRegion(allRegions);
    setAllRegions(filteredData);
    // eslint-disable-next-line
  }, [selectedRegion]);

  

  const regions = allRegions.map((region) => {
    return (
      <RegionCard
        key={region.id}
        id={region.id}
        region={region.region}
        image={region.image_url}
        title={region.title}
        description={region.experience}
      />
    );
  });

  return (
    <>
      <Navbar />
      <div className="main-search">
        {/* <h1 className="main-search-title">Discover Kenya</h1> */}
        <section className="dropdown">
          <label style={{ fontSize: "22px", fontWeight: "500" }}>
            Select Region:
            <select
              className="dropdown-list"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <option value="">-- Choose --</option>
              <option value="Coast">Coast</option>
              <option value="Nairobi">Nairobi</option>
              <option value="Central">Central</option>
              <option value="Eastern">Eastern</option>
              <option value="Nyanza">Nyanza</option>
              <option value="Rift Valley">Rift Valley</option>
              <option value="Western">Western</option>
              <option value="North Eastern">North Eastern</option>
            </select>
          </label>
        </section>
        <div className="selected_regions">{regions}</div>
      </div>
    </>
  );
}

export default Search;
