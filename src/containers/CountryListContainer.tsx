import { CountryList } from "../components/CountryList";
import { Spinner } from "../components/Spinner";
import { useCountries } from "../hooks/use-countries";

const CountryListContainer = () => {
  const { countries, isLoading } = useCountries();

  return isLoading ? <Spinner /> : <CountryList countries={countries} />;
};

export { CountryListContainer };
