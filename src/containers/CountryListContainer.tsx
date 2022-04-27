import { CountryList } from "../components/CountryList";
import { useCountries } from "../hooks/use-countries";

const CountryListContainer = () => {
  const { countries, isLoading } = useCountries();

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <CountryList countries={countries} />
  );
};

export { CountryListContainer };
