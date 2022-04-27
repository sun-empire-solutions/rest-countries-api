import { Country } from "../types";
import { CountryItem } from "./CountryItem";
import { Spinner } from "./Spinner";

const CountryList = ({ countries, isLoading }: IProps) => {
  return isLoading ? (
    <div className="loading">
      <Spinner />
    </div>
  ) : (
    <ul className="country-list">
      {countries.map((item, index) => (
        <CountryItem key={index} item={item} />
      ))}
    </ul>
  );
};

type IProps = { countries: Country[]; isLoading: boolean };

export { CountryList };
