import React, { ChangeEvent } from "react";
import { useState } from "react";
import { useEffect } from "react";
//@ts-ignore
import search from "./../assets/images/search.svg";
//@ts-ignore
import remove from "./../assets/images/remove.svg";

const CountryFilters = ({
  nameFilter,
  setNameFilter,
  regionFilter,
  setRegionFilter,
}: IProps) => {
  const [State, setState] = useState("invisible");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNameFilter(event.target.value);
    if (event.target.value === "") {
      setState("invisible");
    } else {
      setState("visible");
    }
  };

  const handleRegionSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setRegionFilter(event.target.value);
  };

  const clearInput = () => {
    setNameFilter("");
    setState("invisible");
  };

  return (
    <div className="country-filters">
      <div className="name-filter">
        <input
          className=""
          type="text"
          value={nameFilter}
          onChange={handleNameChange}
          placeholder="Search for a country..."
        />
        <div className="img-icon-search">
          <img src={search} alt="" />
        </div>
        <div className={`img-icon-remove ${State}`} onClick={clearInput}>
          <img src={remove} alt="" />
        </div>
      </div>

      <select
        className="region-filter"
        onChange={handleRegionSelect}
        value={regionFilter}
      >
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

type IProps = {
  nameFilter: string;
  regionFilter: string;
  setNameFilter: (filter: string) => void;
  setRegionFilter: (filter: string) => void;
};
export { CountryFilters };
