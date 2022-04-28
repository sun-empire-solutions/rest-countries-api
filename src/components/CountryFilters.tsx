import { ChangeEvent } from "react";
//@ts-ignore
import search from "./../assets/images/search.svg";

const CountryFilters = ({
  nameFilter,
  setNameFilter,
  regionFilter,
  setRegionFilter,
}: IProps) => {
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNameFilter(event.target.value);
  };

  const handleRegionSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setRegionFilter(event.target.value);
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
        <div className="img-icon">
          <img src={search} alt="" />
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
