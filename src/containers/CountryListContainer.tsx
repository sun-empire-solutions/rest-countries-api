import { CountryList } from "../components/CountryList";
import { useCountries } from "../hooks/use-countries";

const CountryListContainer = () => {
  const { countries, isLoading } = useCountries();

  return (
    <div className="list-container">
      {isLoading ? <h1>Loading...</h1> : <CountryList countries={countries} />}
    </div>
  );
};

export { CountryListContainer };
