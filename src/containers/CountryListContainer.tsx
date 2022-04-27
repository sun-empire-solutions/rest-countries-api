import React from "react";
import { CountryFilters } from "../components/CountryFilters";
import { CountryList } from "../components/CountryList";
import { Spinner } from "../components/Spinner";
import { useCountries } from "../hooks/use-countries";

const CountryListContainer = () => {
  const {
    countries,
    isLoading,
    nameFilter,
    setNameFilter,
    regionFilter,
    setRegionFilter,
  } = useCountries();

  return (
    <div className="country-list__container">
      <CountryFilters
        nameFilter={nameFilter}
        regionFilter={regionFilter}
        setNameFilter={setNameFilter}
        setRegionFilter={setRegionFilter}
      />
      <CountryList
        countries={countries.filter(({ name: { common } }) =>
          common.toUpperCase().includes(nameFilter.toUpperCase())
        )}
        isLoading={isLoading}
      />
    </div>
  );
};

export { CountryListContainer };
